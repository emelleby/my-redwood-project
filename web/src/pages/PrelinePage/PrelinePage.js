import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PrelinePage = () => {
  return (
    <>
      <MetaTags title="Preline" description="Preline page" />

      <h1>PrelinePage</h1>
      <p>
        Find me in <code>./web/src/pages/PrelinePage/PrelinePage.js</code>
      </p>
      <p>
        My default route is named <code>preline</code>, link to me with `
        <Link to={routes.preline()}>Preline</Link>`
      </p>
    </>
  )
}

export default PrelinePage
