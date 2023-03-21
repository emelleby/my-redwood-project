import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import DemoPageContent from 'src/components/demo-page-content'

import eye from './eye.jpg'

const DemoPage = () => {
  return (
    <>
      <MetaTags title="Demo" description="Demo page" />

      <h1>DemoPage Header</h1>
      <img src={eye} />
      <img src="web/public/assets/Calendar.png" />

      <DemoPageContent />

      <div className="flex items-center">
        <p>This is the Footer for the demo. </p>
        <br />
        <p>
          My default route is named <code>demo</code>, link to me with `
          <Link to={routes.demo()}>Demo</Link>`
        </p>
      </div>
    </>
  )
}

export default DemoPage
