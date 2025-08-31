// src/app/quiz/[slug]/page.tsx
import * as React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { hasUnlockedAccess } from "@/lib/access";
import { getLessonBySlug } from "@/data/all-lessons";

type Params = { slug: string };

// Type des questions (aligne avec ton schéma dans assessment.quiz)
type QuizQuestion = {
  question: string;
  type: "multiple-choice" | "true-false" | string;
  options?: string[];
  correctAnswer: string;
  explanation?: string;
  points?: number;
};

export default async function LessonQuizPage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);
  if (!lesson) notFound();

  const unlocked = await hasUnlockedAccess();
  const canView = unlocked || !lesson.isLocked;

  if (!canView) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
          <h1 className="text-2xl font-bold mb-2">Quiz verrouillé</h1>
          <p className="text-gray-600 mb-6">
            Ce quiz appartient à une leçon réservée (N2/N3/N4). Déverrouille l&apos;accès pour y jouer.
          </p>
          <Link
            href="/unlock"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Déverrouiller l’accès
          </Link>
        </div>
      </div>
    );
  }

  const quiz: QuizQuestion[] = (lesson.assessment?.quiz ?? []) as QuizQuestion[];
  const passingScore = lesson.assessment?.passingScore ?? 80; // pourcentage attendu

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h1 className="text-2xl font-bold mb-2">{lesson.title} — Quiz</h1>
          <p className="text-gray-600 mb-6">{lesson.summary}</p>

          {quiz.length === 0 ? (
            <p className="text-gray-500">Aucune question pour cette leçon.</p>
          ) : (
            <QuizClient questions={quiz} passingScore={passingScore} />
          )}

          <div className="mt-8">
            <Link href={`/lessons/${lesson.slug}`} className="text-blue-600 hover:text-blue-700 underline">
              ← Retour à la leçon
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuizClient({
  questions,
  passingScore,
}: {
  questions: QuizQuestion[];
  passingScore: number; // en %
}) {
  "use client";

  const [answers, setAnswers] = React.useState<Record<number, string>>({});
  const [score, setScore] = React.useState<number | null>(null);
  const [submitted, setSubmitted] = React.useState(false);

  // Total de points (par défaut 1 / question)
  const totalPoints = React.useMemo(
    () => questions.reduce((sum, q) => sum + (q.points ?? 1), 0),
    [questions]
  );

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    let s = 0;
    questions.forEach((q, i) => {
      const pts = q.points ?? 1;
      if ((answers[i] ?? "") === q.correctAnswer) s += pts;
    });
    setScore(s);
    setSubmitted(true);
  };

  // options par défaut pour true-false si non fournies
  const getOptions = (q: QuizQuestion): string[] => {
    if (q.options && q.options.length > 0) return q.options;
    if (q.type === "true-false") return ["Vrai", "Faux"];
    return [];
  };

  const success =
    score !== null ? Math.round((score / totalPoints) * 100) >= passingScore : false;

  return (
    <form onSubmit={submit} className="space-y-6">
      {questions.map((q, i) => (
        <div key={i} className="border border-gray-200 rounded-lg p-4">
          <div className="font-medium">{i + 1}. {q.question}</div>

          <div className="mt-3 grid grid-cols-1 gap-2">
            {getOptions(q).map((opt, idx) => (
              <label key={idx} className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name={`q-${i}`}
                  value={opt}
                  checked={answers[i] === opt}
                  onChange={() => setAnswers((a) => ({ ...a, [i]: opt }))}
                />
                {opt}
              </label>
            ))}
          </div>

          {submitted && (
            <div className="mt-2 text-sm text-gray-600">
              {answers[i] === q.correctAnswer ? "✅ Correct" : "❌ Incorrect"}{" "}
              {q.explanation ? `— ${q.explanation}` : ""}
            </div>
          )}
        </div>
      ))}

      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
      >
        Valider
      </button>

      {submitted && score !== null && (
        <div className="mt-4">
          <div className="font-semibold">Score : {score} / {totalPoints} ({Math.round((score / totalPoints) * 100)}%)</div>
          <div className={`mt-1 text-sm ${success ? "text-green-700" : "text-orange-700"}`}>
            {success
              ? "Bravo ! Vous avez atteint le score requis ✅"
              : `À revoir. Score requis : ${passingScore}%`}
          </div>
        </div>
      )}
    </form>
  );
}
