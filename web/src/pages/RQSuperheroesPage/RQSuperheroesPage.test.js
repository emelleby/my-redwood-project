import { render } from '@redwoodjs/testing/web'

import RqSuperheroesPage from './RqSuperheroesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RqSuperheroesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RqSuperheroesPage />)
    }).not.toThrow()
  })
})
