import React, { useState } from 'react'

const ImageUploader = () => {
  const [files, setFiles] = useState([])
  const [previewUrl, setPreviewUrl] = useState(null)

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    setFiles([...files, file])
    setPreviewUrl(URL.createObjectURL(file))
  }

  const handleChange = (e) => {
    const file = e.target.files[0]
    setFiles([...files, file])
    setPreviewUrl(URL.createObjectURL(file))
  }

  return (
    <div className="image-uploader">
      {previewUrl && <img src={previewUrl} alt="Preview" className="preview" />}
      <div
        className="upload-area"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <input
          type="file"
          onChange={handleChange}
          className="input"
          accept="image/*"
        />
        <p>Drop image here or click to upload</p>
      </div>
    </div>
  )
}

export default ImageUploader
