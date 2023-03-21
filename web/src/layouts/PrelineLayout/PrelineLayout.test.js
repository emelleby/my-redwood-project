import { render } from '@redwoodjs/testing/web'

import PrelineLayout from './PrelineLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PrelineLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrelineLayout />)
    }).not.toThrow()
  })
})
