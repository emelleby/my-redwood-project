/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'

const AppLayout = ({ children }) => {
  const [open, setOpen] = useState(true)
  const Menus = [
    { title: 'Dashboard', src: 'Icon-dash', link: routes.home() },
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
      <div className="flex h-screen flex-row">
        <aside className="h-screen overflow-hidden overflow-y-auto bg-[#085952] p-4">
          <div className={`${open ? 'w-52' : 'w-12'} duration-300`}>
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
          </div>

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
                  <img src={`../assets/${Menu.src}.png`} />
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
        <main className="flex w-full flex-col">
          <header className="flex h-14 w-full flex-row items-center bg-teal-300">
            <img
              src="../assets/control.png"
              className={`relative right-4 h-7 w-7 cursor-pointer rounded-full
            border-2 border-[#d05663] ${!open && 'rotate-180'}`}
              onClick={() => setOpen(!open)}
            />
            <h1>GridPage header H1</h1>
          </header>
          <section className="h-full w-full overflow-y-auto">
            {children}
          </section>
        </main>
      </div>
    </>
  )
}

export default AppLayout
