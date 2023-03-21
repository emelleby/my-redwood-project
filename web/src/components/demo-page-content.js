import { useEffect, useState } from 'react'

import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react'

import NotFoundPage from 'src/pages/NotFoundPage/NotFoundPage'

// Put your API key here
builder.init('44b093e300534e7b9bfdfc34cb1189b5')

// set whether you're using the Visual Editor,
// whether there are changes,
// and render the content if found
export default function DemoPageContent() {
  const isPreviewingInBuilder = useIsPreviewing()
  const [notFound, setNotFound] = useState(false)
  const [content, setContent] = useState(null)
  const myLocale = 'en'

  // get the page content from Builder
  useEffect(() => {
    async function fetchContent() {
      const content = await builder
        .get('page', {
          url: window.location.pathname,
          // myLocale can be any locale that you've added,
          // see https://www.builder.io/c/docs/add-remove-locales.
          userAttributes: { locale: myLocale },
          options: {
            locale: myLocale,
          },
        })
        .promise()

      setContent(content)
      setNotFound(!content)
    }
    fetchContent()
  }, [window.location.pathname])

  // If no page is found, return
  // a 404 page from your code.
  // The following hypothetical
  // <FourOhFour> is placeholder.
  if (notFound && !isPreviewingInBuilder) {
    return <NotFoundPage />
  }

  // return the page when found
  return (
    <>
      <head>
        <title>{content?.data.title}</title>
      </head>
      {/* Render the Builder page */}
      <BuilderComponent locale={myLocale} model="page" content={content} />
    </>
  )
}
