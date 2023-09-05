import { render } from '@redwoodjs/testing/web'

import CardTableSum from './CardTableSum'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CardTableSum', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CardTableSum />)
    }).not.toThrow()
  })
})
