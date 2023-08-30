// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Modal3 {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Modal3 from './Modal3'

export const generated = () => {
  return <Modal3 />
}

export default {
  title: 'Components/Modal3',
  component: Modal3,
}
