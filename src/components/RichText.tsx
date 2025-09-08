'use client'

import React from 'react'
import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'

type RichTextProps = {
  markdown: string
  className?: string
  // RTL pour l'arabe
  rtl?: boolean
}

const schema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    code: [...(defaultSchema.attributes.code || []), ['className']],
  },
}

// Type “safe” pour le renderer <code>, compatible avec toutes versions
type CodePropsLike = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  inline?: boolean
  className?: string
  children?: React.ReactNode
}

const components: Components = {
  // Liens → nouvelle fenêtre + sécurité
  a: (
    props: React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
  ) => <a {...props} target="_blank" rel="noopener noreferrer" />,

  // Images → on garde <img> natif pour éviter la config next/image
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const { src, alt } = props
    if (!src) return null
    return (
      <span className="block my-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt ?? ''} className="rounded-lg shadow-sm" />
      </span>
    )
  },

  // Code inline/bloc proprement typé (pas d'import interne)
  code: ({ inline, className, children, ...props }: CodePropsLike) => {
    if (inline) {
      return (
        <code className="px-1 py-0.5 rounded bg-gray-100" {...props}>
          {children}
        </code>
      )
    }
    return (
      <pre className="rounded-lg bg-gray-900 text-gray-100 p-4 overflow-x-auto">
        <code className={className} {...props}>
          {children}
        </code>
      </pre>
    )
  },
}

export default function RichText({ markdown, className, rtl }: RichTextProps) {
  return (
    <div className={className ?? 'prose prose-lg max-w-none'} dir={rtl ? 'rtl' : undefined}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, [rehypeSanitize, schema]]}
        components={components}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}
