import { createPopper } from '@popperjs/core'
const Pop = ({ content }) => {
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
      <button
        className="pl-3"
        type="button"
        onClick={() => {
          popoverShow ? closePopover() : openPopover()
        }}
        ref={btnRef}
      >
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
      <div
        className={
          (popoverShow ? '' : 'hidden ') +
          'bg-' +
          content.color +
          '-100 z-50 mb-3 block max-w-xl break-words rounded-lg border-b-2 border-solid border-sky-600 text-left text-sm font-normal leading-normal no-underline shadow-lg'
        }
        ref={popoverRef}
      >
        <div>
          <div className="mb-0 rounded-t-lg border-b border-solid border-slate-100 bg-sky-700 py-2 px-3 font-semibold uppercase text-white">
            {content.title}
          </div>
          <div className="p-3 text-slate-800">{content.body}</div>
        </div>
      </div>
    </>
  )
}

export default Pop
