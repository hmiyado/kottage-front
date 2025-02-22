import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github-dark.css'
import styles from './sentence.module.css'

export default function Sentence({
  title,
  children,
}: {
  title: React.JSX.Element | string
  children: React.JSX.Element | string
}) {
  return (
    <>
      <h2 className={styles.headline}>{title}</h2>
      <section className={styles.body}>
        {typeof children === 'string' ? (
          <ReactMarkdown
            remarkPlugins={[remarkBreaks]}
            rehypePlugins={[rehypeHighlight]}
          >
            {children}
          </ReactMarkdown>
        ) : (
          children
        )}
      </section>
    </>
  )
}
