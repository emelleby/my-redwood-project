import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Modal from '../../components/modal.js'
import Modal3 from '../../components/Modal3/Modal3.js'
import ImageUploader from '../../components/upload2.js'

const UploadPage = () => {
  return (
    <>
      <MetaTags title="Upload" description="Upload page" />

      <h1>UploadPage</h1>
      <p>
        Find me in <code>./web/src/pages/UploadPage/UploadPage.js</code>
      </p>
      <p>
        My default route is named <code>upload</code>, link to me with `
        <Link to={routes.upload()}>Upload</Link>`
      </p>
      <ImageUploader />

      <Modal />

      <Modal3 />
    </>
  )
}

export default UploadPage
