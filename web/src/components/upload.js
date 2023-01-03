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

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        accept=".jpg,.png,.jpeg"
        onChange={handleFileChange}
      />
      {previewUrl && (
        <div>
          <img src={previewUrl} alt="Preview" />
          <button onClick={handleClearImage}>Clear</button>
        </div>
      )}
    </div>
  )
}

export default ImageUpload
