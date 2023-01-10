import React, { useState } from 'react'

const ImageUpload = () => {
  const [image, setImage] = useState(null)
  const [previewUrl, setPreviewUrl] = useState()
  const [isValid, setIsValid] = useState(false)

  const fileInputRef = React.createRef()

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const fileUrl = URL.createObjectURL(file)
      setImage(file)
      setPreviewUrl(fileUrl)
      setIsValid(true)
    } else {
      setImage(null)
      setPreviewUrl('')
      setIsValid(false)
    }
  }

  const handleClearImage = () => {
    fileInputRef.current.value = null
    setImage(null)
    setPreviewUrl('')
    setIsValid(false)
  }

  const FileInput = ({ label, ...props }) => {
    return (
      <label className="hidden font-bold text-gray-700 text-sm mb-2 mx-4 border-2 border-gray-300 rounded-md  leading-tight focus:outline-none focus:border-blue-600">
        {label}
        <input
          type="file"
          ref={fileInputRef}
          className="border-2 border-gray-300 rounded-md  leading-tight focus:outline-none focus:border-blue-600"
          {...props}
        />
      </label>
    )
  }

  return (
    <section>
      <div>
        <FileInput
          style={{
            appearance: 'none',
            width: '0.1px',
            height: '0.1px',
            overflow: 'hidden',
            position: 'absolute',
            zIndex: '-1',
          }}
          label="Upload file"
          accept=".jpg,.png,.jpeg"
          onChange={handleFileChange}
        />
        {previewUrl && (
          <div>
            <img src={previewUrl} alt="Preview" />
            <button
              className="my-5 w-1/2 flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                          font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
              onClick={handleClearImage}
            >
              Clear
            </button>
          </div>
        )}
      </div>
      <div className="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
        <form className="mt-8 space-y-3" action="#" method="POST">
          <div className="grid grid-cols-1 space-y-2">
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                <div className="h-full w-full text-center flex flex-col items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-blue-400 group-hover:text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <div className="flex flex-auto max-h-48 w-2/5 mx-auto">
                    <img
                      className="has-mask h-36 object-center"
                      src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                      alt="freepik"
                    />
                  </div>
                  <p className="pointer-none text-gray-500 ">
                    <span className="text-sm">Drag and drop</span> an image here{' '}
                    <br /> or{' '}
                    <button
                      href="#"
                      id="1"
                      className="text-blue-600 hover:underline"
                    >
                      select a file
                    </button>{' '}
                    from your computer
                  </p>
                </div>
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>
          <p className="text-sm text-gray-300">
            <span>File type: types of images</span>
          </p>
          <div>
            <button
              type="submit"
              className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                          font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ImageUpload
