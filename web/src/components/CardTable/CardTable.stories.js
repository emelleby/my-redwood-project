// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <CardTable {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import CardTable from './CardTable'

export const generated = () => {
  return <CardTable />
}

export default {
  title: 'Components/CardTable',
  component: CardTable,
}
