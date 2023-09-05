import { render } from '@redwoodjs/testing/web'

import CardTable from './CardTable'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CardTable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CardTable />)
    }).not.toThrow()
  })
})
