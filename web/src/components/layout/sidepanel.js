import { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const Sidepanel = () => {
  const [open, setOpen] = useState(true)
  const Menus = [
    { title: 'Home', src: 'Icon-dash' },
    { title: 'Inbox', src: 'Chat' },
    { title: 'Accounts', src: 'User', gap: true },
    { title: 'Schedule ', src: 'Calendar' },
    { title: 'Search', src: 'Search' },
    { title: 'Analytics', src: 'Chart' },
    { title: 'Files ', src: 'Folder', gap: true },
    { title: 'Setting', src: 'Setting' },
  ]

  return (
    <div className="flex">
      <div
        className={` ${
          open ? 'w-48' : 'w-20'
        }  relative h-screen bg-teal-600 p-4 pt-4 duration-300`}
      >
        <img
          src="../assets/control.png"
          className={`absolute -right-3 top-5 w-7 cursor-pointer rounded-full
           border-2 border-[#d05663] ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex items-center gap-x-4">
          <img
            src="../assets/Logo-2links.png"
            className={`cursor-pointer duration-500 ${
              open && 'w-10 rotate-[360deg]'
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
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`hover:bg-light-white  text-md flex cursor-pointer items-center gap-x-4 rounded-md p-2 text-slate-50
              ${Menu.gap ? 'mt-4' : 'mt-2'} ${
                index === 0 && 'bg-light-white'
              } `}
            >
              <img src={`../assets/${Menu.src}.png`} />
              <span className={`${!open && 'hidden'} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Sidepanel
