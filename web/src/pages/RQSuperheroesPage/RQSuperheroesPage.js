import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const RqSuperheroesPage = () => {
  return (
    <>
      <MetaTags title="RqSuperheroes" description="RqSuperheroes page" />

      <h1>RqSuperheroesPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/RQSuperheroesPage/RQSuperheroesPage.js</code>
      </p>
      <p>
        My default route is named <code>rqSuperheroes</code>, link to me with `
        <Link to={routes.rqSuperheroes()}>RqSuperheroes</Link>`
      </p>
    </>
  )
}

export default RqSuperheroesPage
