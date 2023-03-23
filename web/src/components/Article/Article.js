import { Link, routes } from '@redwoodjs/router'

const Article = ({ article, id, rand }) => {
  return (
    <article>
      <header>
        <h2 className="p-2 text-xl font-bold">
          <Link to={routes.article({ id: article.id })}>
            {article.title} ({id})
          </Link>
        </h2>
      </header>
      <p className="mb-2">By: {article.author}</p>
      <p className="mb-2">{article.body}</p>
      <p className="mb-2">{rand}</p>
      <p className="mb-2">Text</p>
      <div className="text-sm font-light text-gray-700">
        Posted at: {article.createdAt}
      </div>
    </article>
  )
}

export default Article
