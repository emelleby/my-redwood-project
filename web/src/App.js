import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'

const queryClient = new QueryClient()

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <QueryClientProvider client={queryClient}>
        <RedwoodApolloProvider>
          <Routes />
        </RedwoodApolloProvider>
      </QueryClientProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
