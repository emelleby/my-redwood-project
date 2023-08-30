import { render } from '@redwoodjs/testing/web'

import Modal3 from './Modal3'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Modal3', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Modal3 />)
    }).not.toThrow()
  })
})
