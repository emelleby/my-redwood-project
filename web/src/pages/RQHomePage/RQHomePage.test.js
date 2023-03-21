import { render } from '@redwoodjs/testing/web'

import RqHomePage from './RqHomePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RqHomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RqHomePage />)
    }).not.toThrow()
  })
})
