import { render } from '@redwoodjs/testing/web'

import TailwindPage from './TailwindPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TailwindPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TailwindPage />)
    }).not.toThrow()
  })
})
