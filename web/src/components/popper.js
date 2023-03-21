import React from 'react'

import { createPopper } from '@popperjs/core'

const Popover = ({ color }) => {
  const [popoverShow, setPopoverShow] = React.useState(false)
  const btnRef = React.createRef()
  const popoverRef = React.createRef()
  const openPopover = () => {
    createPopper(btnRef.current, popoverRef.current, {
      placement: 'top',
    })
    setPopoverShow(true)
  }
  const closePopover = () => {
    setPopoverShow(false)
  }
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full text-center">
          <button
            className={
              'bg-' +
              color +
              '-600 active:bg-text-white mr-1 mb-1 rounded px-6 py-3 text-sm font-bold uppercase shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none'
            }
            type="button"
            onClick={() => {
              popoverShow ? closePopover() : openPopover()
            }}
            ref={btnRef}
          >
            top {color}
          </button>
          <div
            className={
              (popoverShow ? '' : 'hidden ') +
              'bg-' +
              color +
              '-600 z-50 mb-3 block max-w-xs break-words rounded-lg border-0 text-left text-sm font-normal leading-normal no-underline'
            }
            ref={popoverRef}
          >
            <div>
              <div
                className={
                  'bg-' +
                  color +
                  '-600 mb-0 rounded-t-lg border-b border-solid border-slate-100 p-3 font-semibold uppercase text-white opacity-75'
                }
              >
                {color} popover title
              </div>
              <div className="p-3 text-white">
                And here's some amazing content. It's very engaging. Right?
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Popover
