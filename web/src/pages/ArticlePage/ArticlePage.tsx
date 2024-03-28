import { Metadata } from '@redwoodjs/web'

import ArticleCell from 'src/components/ArticleCell'

interface ArticlePageProps {
  id: number
}

const ArticlePage = ({ id }: ArticlePageProps) => {
  return (
    <>
      <Metadata title="Article" description="Article page" />

      <ArticleCell id={id} />
    </>
  )
}

export default ArticlePage
