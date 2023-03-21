import { render } from '@redwoodjs/testing/web'

import PrelinePage from './PrelinePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PrelinePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrelinePage />)
    }).not.toThrow()
  })
})
