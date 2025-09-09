'use client'

import React from 'react'

type H5PEmbedProps = {
  src: string // URL d'intégration fournie par H5P (ex: h5p.com ou h5p.org ou auto-hébergé)
  title?: string
  className?: string
  allowFullscreen?: boolean
}

export default function H5PEmbed({ src, title = 'H5P Activity', className = '', allowFullscreen = true }: H5PEmbedProps) {
  // H5P propose généralement un snippet <iframe src="..." ...>. On l'encapsule responsivement.
  return (
    <div className={`relative w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 ${className}`}>
      <div className="pt-[56.25%]" />
      <iframe
        src={src}
        title={title}
        allow={allowFullscreen ? 'fullscreen' : undefined}
        className="absolute inset-0 h-full w-full"
        frameBorder={0}
      />
    </div>
  )
}


