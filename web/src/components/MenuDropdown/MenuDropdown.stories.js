// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <MenuDropdown {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import MenuDropdown from './MenuDropdown'

export const generated = () => {
  return <MenuDropdown />
}

export default {
  title: 'Components/MenuDropdown',
  component: MenuDropdown,
}
