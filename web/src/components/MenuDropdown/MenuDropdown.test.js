import { render } from '@redwoodjs/testing/web'

import MenuDropdown from './MenuDropdown'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MenuDropdown', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MenuDropdown />)
    }).not.toThrow()
  })
})
