// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <CardTableSum {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import CardTableSum from './CardTableSum'

export const generated = () => {
  return <CardTableSum />
}

export default {
  title: 'Components/CardTableSum',
  component: CardTableSum,
}
