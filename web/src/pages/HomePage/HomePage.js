import React, { useRef, useEffect, useState } from 'react'

import { Builder } from '@builder.io/react'
import { BuilderComponent, builder } from '@builder.io/react'

import { MetaTags } from '@redwoodjs/web'

builder.init('44b093e300534e7b9bfdfc34cb1189b5')
export const Contact = () => {
  const [builderContentJson, setBuilderContentJson] = useState(null)

  useEffect(() => {
    builder
      .get('page', { url: location.pathname })
      .promise()
      .then(setBuilderContentJson)
  }, [])

  return <BuilderComponent model="page" content={builderContentJson} />
}
// Register your components for use in the visual editor!
// https://www.builder.io/blog/drag-drop-react
const Heading = (props) => <h1 className="my-heading">{props.title}</h1>

Builder.registerComponent(Heading, {
  name: 'Contact',
  inputs: [{ name: 'Contact', type: 'text' }],
})

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <section className="bg-teal-200 px-5 py-3">
        <h1>HomePage here</h1>
        <p>
          Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
        </p>
      </section>
      <div className="w-full">
        <Contact />
      </div>
    </>
  )
}

export default HomePage
