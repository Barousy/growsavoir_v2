// src/app/quiz/page.tsx
import Link from "next/link";
import { BookOpenCheck, Search, Lock } from "lucide-react";
import { getAllLessons } from "@/data/all-lessons";
import { hasUnlockedAccess } from "@/lib/access";

type SimpleQuiz = {
  slug: string;
  title: string;
  subject: string;
  level: string;
  isLocked: boolean;
  questionCount: number;
};

export const metadata = { title: "Quiz — GrowSavoir" };

export default async function QuizIndexPage() {
  const lessons = Object.values(getAllLessons());
  const unlocked = await hasUnlockedAccess();

  const quizzes: SimpleQuiz[] = lessons
    .filter((l) => l.assessment?.quiz && l.assessment.quiz.length > 0)
    .map((l) => ({
      slug: l.slug,
      title: l.title,
      subject: l.subject,
      level: l.level,
      isLocked: !!l.isLocked,
      questionCount: l.assessment!.quiz.length,
    }))
    .sort((a, b) => a.subject.localeCompare(b.subject) || a.title.localeCompare(b.title));

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <BookOpenCheck className="h-7 w-7 text-blue-600 mr-2" />
                Quiz — Tous les sujets
              </h1>
              <p className="text-gray-600 mt-2">
                {quizzes.length} quiz disponibles dans les leçons.
              </p>
            </div>
            <Link
              href="/catalogue"
              className="text-blue-600 hover:text-blue-700 underline mt-1"
            >
              ← Retour au catalogue
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 flex items-center">
          <Search className="h-5 w-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Rechercher un quiz (titre ou matière)…"
            className="w-full outline-none"
            onChange={(e) => {
              const q = e.currentTarget.value.toLowerCase();
              const cards = document.querySelectorAll<HTMLElement>("[data-qcard]");
              cards.forEach((c) => {
                const hay = (c.dataset.hay || "").toLowerCase();
                c.style.display = hay.includes(q) ? "" : "none";
              });
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quizzes.map((q) => {
            const hay = `${q.title} ${q.subject} ${q.level}`;
            const locked = q.isLocked && !unlocked;
            return (
              <div
                key={q.slug}
                data-qcard
                data-hay={hay}
                className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm text-gray-500">{q.subject} • {q.level.toUpperCase()}</div>
                    <h2 className="text-lg font-semibold text-gray-900 mt-1">
                      {q.title}
                    </h2>
                  </div>
                  {locked ? (
                    <span className="inline-flex items-center text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                      <Lock className="h-3.5 w-3.5 mr-1" /> Verrouillé
                    </span>
                  ) : (
                    <span className="inline-flex items-center text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
                      {q.questionCount} questions
                    </span>
                  )}
                </div>

                <div className="mt-4">
                  {locked ? (
                    <Link
                      href="/unlock"
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300"
                    >
                      Déverrouiller l’accès
                    </Link>
                  ) : (
                    <Link
                      href={`/quiz/${q.slug}`}
                      className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                    >
                      Commencer le quiz
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {quizzes.length === 0 && (
          <p className="text-center text-gray-500 mt-8">Aucun quiz trouvé.</p>
        )}
      </main>
    </div>
  );
}
