import { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

interface ArticleProps {
  article: Post
}

const Article = ({ article }: ArticleProps) => {
  return (
    <article key={article.id}>
      <header className="mb-4">
        <h2 className=" text-xl font-bold">
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <p className="mb-2">{article.body}</p>
      <div>Posted at: {article.createdAt}</div>
    </article>
  )
}

export default Article
