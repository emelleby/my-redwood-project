import React, { useRef, useEffect, useState } from 'react'

import { BuilderComponent, builder } from '@builder.io/react'

// Put your API key here
builder.init('44b093e300534e7b9bfdfc34cb1189b5')

// set whether you're using the Visual Editor,
// whether there are changes,
// and render the content if found

const Modal2 = () => {
  const modalRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const toggleModal = () => {
    setIsVisible(!isVisible)
  }

  // Builder Component
  const [builderContentJson, setBuilderContentJson] = useState(null)

  useEffect(() => {
    builder
      .get('modal-content', { url: location.pathname })
      .promise()
      .then(setBuilderContentJson)
  }, [])

  return (
    <div>
      <button onClick={toggleModal} className="pl-3" type="button">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 7.4V13.8M9 4.2V5.8M9 17C13.4184 17 17 13.4184 17 9C17 4.5816 13.4184 1 9 1C4.5816 1 1 4.5816 1 9C1 13.4184 4.5816 17 9 17Z"
            stroke="#E35665"
            strokeWidth="2"
          />
        </svg>
      </button>
      <div ref={modalRef} style={{ display: isVisible ? 'block' : 'none' }}>
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          {/* Background backdrop, show/hide based on modal state.

          Entering: "ease-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100"
            To: "opacity-0" */}

          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              {/*
              Modal panel, show/hide based on modal state.

              Entering: "ease-out duration-300"
                From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                To: "opacity-100 translate-y-0 sm:scale-100"
              Leaving: "ease-in duration-200"
                From: "opacity-100 translate-y-0 sm:scale-100"
                To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" */}

              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        className="h-6 w-6 text-teal-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 10.5v3.75m-9.303 3.376C1.83 19.126 2.914 21 4.645 21h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 4.88c-.866-1.501-3.032-1.501-3.898 0L2.697 17.626zM12 17.25h.007v.008H12v-.008z"
                        />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        className="text-lg font-medium leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Please help me!
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Sure I will. No problem. Take a look at the video
                          below.
                        </p>
                      </div>
                    </div>
                  </div>
                  <BuilderComponent
                    model="modal-content"
                    content={builderContentJson}
                  />
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Deactivate
                  </button>
                  <button
                    type="button"
                    onClick={toggleModal}
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal2
