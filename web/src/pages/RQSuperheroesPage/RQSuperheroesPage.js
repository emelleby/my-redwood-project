// import { Link, routes } from '@redwoodjs/router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { MetaTags } from '@redwoodjs/web'

import RqArticlesCell from 'src/components/RqArticlesCell'

const RqSuperheroesPage = () => {
  return (
    <>
      <MetaTags title="TRQ" description="TRQ" />
      <RqArticlesCell />
      <ReactQueryDevtools initialIsOpen />
    </>
  )
}

export default RqSuperheroesPage
