import { useQuery, useQueryClient } from '@tanstack/react-query'
import { request, gql } from 'graphql-request'

const endpoint = 'http://localhost:8910/.redwood/functions/graphql'

function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const {
        posts: { data },
      } = await request(
        endpoint,
        gql`
          query posts {
              id
              title
              body
              author
              createdAt
            }
          }
        `
      )
      return data
    },
  })
}

export function Success({ setPostId }) {
  const queryClient = useQueryClient()
  const { status, data, error, isFetching } = usePosts()

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {status === 'loading' ? (
          'Loading...'
        ) : status === 'error' ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <div>
              {data.map((post) => (
                <p key={post.id}>
                  <a
                    onClick={() => setPostId(post.id)}
                    href="#"
                    style={
                      // We can find the existing query data here to show bold links for
                      // ones that are cached
                      queryClient.getQueryData(['post', post.id])
                        ? {
                            fontWeight: 'bold',
                            color: 'green',
                          }
                        : {}
                    }
                  >
                    {post.title}
                  </a>
                </p>
              ))}
            </div>
            <div>{isFetching ? 'Background Updating...' : ' '}</div>
          </>
        )}
      </div>
    </div>
  )
}

// export const Success = () => (
//   return (<ul>
//     {data.map((item) => {
//       return <li key={item.id}>{JSON.stringify(item)}</li>
//     })}
//   </ul>)
//   <div>Success</div>
// )

// function rqArticles() {
//   return useQuery({
//     queryKey: ['posts'],
//     queryFn: async () => {
//       const {
//         posts: { data },
//       } = await request(
//         endpoint,
//         gql`
//           query RqArticlesQuery {
//             rqArticles: posts {
//               id
//               title
//               body
//               author
//               createdAt
//             }
//           }
//         `
//       )
//       return data
//     },
//   })
// }
// export const QUERY = gql`
//   query RqArticlesQuery {
//     rqArticles: posts {
//       id
//       title
//       body
//       author
//       createdAt
//     }
//   }
// `

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)
