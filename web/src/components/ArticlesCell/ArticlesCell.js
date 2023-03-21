export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      body
      author
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <article key={article.id}>
          <header>
            <h2 className="p-2 text-xl font-bold">{article.title}</h2>
          </header>
          <p className="mb-2">By: {article.author}</p>
          <p className="mb-2">{article.body}</p>
          <div className="text-sm font-light text-gray-700">
            Posted at: {article.createdAt}
          </div>
        </article>
      ))}
    </>
  )
}
