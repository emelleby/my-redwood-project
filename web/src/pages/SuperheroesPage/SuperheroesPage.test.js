import { render } from '@redwoodjs/testing/web'

import SuperheroesPage from './SuperheroesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SuperheroesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SuperheroesPage />)
    }).not.toThrow()
  })
})
