import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TailwindPage = () => {
  return (
    <div className="container my-4">
      <MetaTags title="Tailwind" description="Tailwind page" />

      <h1>TailwindPage</h1>
      <p>
        Find me in <code>./web/src/pages/TailwindPage/TailwindPage.js</code>
      </p>
      <p>
        My default route is named <code>tailwind</code>, link to me with `
        <Link to={routes.tailwind()}>Tailwind</Link>`
      </p>
    </div>
  )
}

export default TailwindPage
