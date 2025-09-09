import Link from 'next/link'
import { FileText, Headphones, Play, Image as ImageIcon, LinkIcon, Search } from 'lucide-react'
import { getAllResources, searchResources, Resource } from '@/data/resources'

function ResourceIcon({ type }: { type: Resource['type'] }) {
  switch (type) {
    case 'pdf':
      return <FileText className="h-4 w-4" />
    case 'audio':
      return <Headphones className="h-4 w-4" />
    case 'video':
      return <Play className="h-4 w-4" />
    case 'image':
      return <ImageIcon className="h-4 w-4" />
    default:
      return <LinkIcon className="h-4 w-4" />
  }
}

export const metadata = { title: 'Ressources — GrowSavoir' }

export default async function ResourcesPage({ searchParams }: { searchParams?: Promise<{ q?: string }> }) {
  const { q: rawQ } = (await searchParams) || {}
  const q = (rawQ || '').trim()
  const all = q ? searchResources(q) : getAllResources()
  const subjects = Array.from(new Set(all.map((r) => r.subject)))

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Banque de ressources</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">PDF, audio, vidéo et liens utiles liés aux leçons.</p>

          <form className="mt-6 max-w-xl" action="/ressources" method="get">
            <div className="relative">
              <input
                name="q"
                defaultValue={q}
                placeholder="Rechercher une ressource, matière ou leçon..."
                className="w-full pl-10 pr-3 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </form>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {subjects.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">Aucune ressource trouvée.</p>
        ) : (
          <div className="space-y-10">
            {subjects.map((subject) => {
              const group = all.filter((r) => r.subject === subject)
              return (
                <section key={subject}>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{subject}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {group.map((r) => (
                      <article
                        key={r.id}
                        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                            <ResourceIcon type={r.type} />
                            <h3 className="font-semibold text-gray-900 dark:text-white">{r.title}</h3>
                          </div>
                          {r.lessonSlug && (
                            <Link href={`/lessons/${r.lessonSlug}`} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                              Voir la leçon
                            </Link>
                          )}
                        </div>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{r.description}</p>
                        <div className="mt-4 flex items-center justify-between text-sm">
                          <span className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                            {r.type.toUpperCase()}
                          </span>
                          <a href={r.url} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                            Ouvrir
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}


