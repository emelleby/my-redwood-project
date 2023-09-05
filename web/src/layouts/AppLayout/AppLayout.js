/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'

import Dropdown from '../../components/Dropdown/Dropdown'

const AppLayout = ({ children }) => {
  const [open, setOpen] = useState(true)

  const Menus = [
    { title: 'Dashboard', src: 'Icon-dash', link: routes.dashboard() },
    { title: 'Upload', src: 'Chat', link: routes.upload() },
    { title: 'Accounts', src: 'User', link: routes.about(), gap: true },
    { title: 'Shop ', src: 'Calendar', link: routes.shop() },
    { title: 'Search', src: 'Search', link: routes.sidepanel() },
    { title: 'Builder', src: 'Chart', link: routes.demo() },
    { title: 'Files ', src: 'Folder', link: routes.upload(), gap: true },
    { title: 'Preline', src: 'Setting', link: routes.preline() },
  ]

  return (
    <>
      <div
        className={` ${
          open ? 'grid-cols-layout' : 'grid-cols-[80px_auto]'
        } wrapper grid h-screen grid-rows-layout duration-300 grid-areas-layout`}
      >
        <section className="bg-sky-700 p-4 grid-in-logo">
          <Link to={routes.home()}>
            <div className="flex items-center gap-x-4">
              <img
                src="../assets/Logo-2links-40.png"
                className={`cursor-pointer duration-500 ${
                  open && 'rotate-[360deg]'
                }`}
              />

              <h1
                className={`origin-left text-xl font-medium text-slate-100 duration-200 ${
                  !open && 'scale-0'
                }`}
              >
                Scope321
              </h1>
            </div>
          </Link>
        </section>
        <header className="z-10 flex items-center bg-white px-6 shadow-md shadow-sky-200 grid-in-header">
          <img
            src="../assets/control.png"
            className={`relative right-10 h-7 w-7 cursor-pointer rounded-full
            border-2 border-[#d05663] ${!open && 'rotate-180'}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex w-full justify-between">
            <div className="flex flex-row items-center">
              <h1>Reporting year:</h1>
              <Dropdown />
            </div>
            <div className="flex items-center gap-4">
              <div className="">
                {/* <FeedbackFish projectId="388006e9d274cd" userId={email}>
                <div className="feedbackDiv">{t('Feedback')}</div>
              </FeedbackFish> */}
                Feedback
              </div>
              <div className=""> | </div>
              <div className="">Support</div>
              <div className="">
                <input
                  type="text"
                  className="searchInput rounded-lg"
                  placeholder="Search"
                ></input>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mr-2 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                en | no
              </div>
            </div>
          </div>
        </header>

        <aside className="flex-between flex flex-col bg-sky-700 p-3 text-slate-100 grid-in-sidebar">
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <Link key={index} to={Menu.link}>
                <li
                  key={index}
                  className={`hover:bg-light-white text-md flex w-full cursor-pointer items-center gap-x-4 rounded-md p-2 text-slate-100
                ${Menu.gap ? 'mt-4' : 'mt-2'} ${
                    index === 0 && 'bg-light-white'
                  } `}
                >
                  {/* <img src={`../assets/${Menu.src}.png`} /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6 text-sky-200"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  <span
                    className={`${!open && 'hidden'} origin-left duration-200`}
                  >
                    {Menu.title}
                  </span>
                </li>
              </Link>
            ))}
          </ul>

          <div className="mt-auto grid place-items-center">
            <div className="flex flex-col">
              <img
                className="mx-auto h-[3rem] w-[3rem] flex-shrink-0 rounded-full"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Image Description"
              />
              <div className={` ${open ? '' : 'hidden'}  `}>
                <h3 className="font-semibold text-slate-200 dark:text-white">
                  Maria Wanner
                </h3>
                <p className="text-sm font-medium text-gray-200">
                  maria@gmail.com
                </p>
              </div>
            </div>
          </div>
        </aside>

        <main className="overflow-y-auto grid-in-main">{children}</main>
      </div>
    </>
  )
}

export default AppLayout

{
  /* <img
src="../assets/control.png"
alt="collapse menu"
className={`relative right-4 top-4 z-20 w-7 cursor-pointer rounded-full border-2 border-[#d05663] grid-in-header ${
  !open && 'rotate-180'
}`}
onClick={() => setOpen(!open)}
/> */
}
