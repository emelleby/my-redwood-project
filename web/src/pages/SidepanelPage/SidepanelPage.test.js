import { render } from '@redwoodjs/testing/web'

import SidepanelPage from './SidepanelPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SidepanelPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SidepanelPage />)
    }).not.toThrow()
  })
})
