import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const RqHomePage = () => {
  return (
    <>
      <MetaTags title="RqHome" description="RqHome page" />

      <h1>RqHomePage</h1>
      <p>
        Find me in <code>./web/src/pages/RQHomePage/RQHomePage.js</code>
      </p>
      <p>
        My default route is named <code>rqHome</code>, link to me with `
        <Link to={routes.rqHome()}>RqHome</Link>`
      </p>
    </>
  )
}

export default RqHomePage
