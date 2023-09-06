import { render } from '@redwoodjs/testing/web'

import TailwindLayout from './TailwindLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TailwindLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TailwindLayout />)
    }).not.toThrow()
  })
})
