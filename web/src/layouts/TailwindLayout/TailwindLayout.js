import { useState } from 'react'

import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

import { Link, routes } from '@redwoodjs/router'

import Dropdown from '../../components/Dropdown/Dropdown'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  {
    name: 'Teams',
    icon: UsersIcon,
    current: false,
    children: [
      { name: 'Engineering', href: '#' },
      { name: 'Human Resources', href: '#' },
      { name: 'Customer Success', href: '#' },
    ],
  },
  {
    name: 'Projects',
    icon: FolderIcon,
    current: false,
    children: [
      { name: 'GraphQL API', href: '#' },
      { name: 'iOS App', href: '#' },
      { name: 'Android App', href: '#' },
      { name: 'New Customer Portal', href: '#' },
    ],
  },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TailwindLayout({ children }) {
  const [open, setOpen] = useState(true)
  return (
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
      <aside className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 grid-in-sidebar">
        <nav className="flex flex-1 flex-col">
          <ul className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    {!item.children ? (
                      <a
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                          'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700'
                        )}
                      >
                        <item.icon
                          className="h-6 w-6 shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span
                          className={`${
                            !open && 'hidden'
                          } origin-left duration-200`}
                        >
                          {item.name}
                        </span>
                      </a>
                    ) : (
                      <div className="flex w-full items-center gap-x-3 rounded-md p-2">
                        <item.icon
                          className="h-6 w-6 shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <Disclosure as="div">
                          {({ visible }) => (
                            <>
                              <span
                                className={`${
                                  !open && 'hidden'
                                } origin-left duration-200`}
                              >
                                <Disclosure.Button
                                  className={classNames(
                                    item.current
                                      ? 'bg-gray-50'
                                      : 'hover:bg-gray-50',
                                    'flex items-center gap-x-3 text-left text-sm font-semibold leading-6 text-gray-700'
                                  )}
                                >
                                  {item.name}

                                  <ChevronRightIcon
                                    className={classNames(
                                      visible
                                        ? 'rotate-90 text-gray-500'
                                        : 'text-gray-400',
                                      'ml-auto h-5 w-5 shrink-0'
                                    )}
                                    aria-hidden="true"
                                  />
                                </Disclosure.Button>
                              </span>
                              <Disclosure.Panel as="ul" className="mt-1 px-2">
                                {item.children.map((subItem) => (
                                  <li key={subItem.name}>
                                    {/* 44px */}
                                    <Disclosure.Button
                                      as="a"
                                      href={subItem.href}
                                      className={classNames(
                                        subItem.current
                                          ? 'bg-gray-50'
                                          : 'hover:bg-gray-50',
                                        'block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700'
                                      )}
                                    >
                                      {subItem.name}
                                    </Disclosure.Button>
                                  </li>
                                ))}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </li>
            <li className="-mx-6 mt-auto">
              <a
                href="#"
                className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
              >
                <img
                  className="h-8 w-8 rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span className="sr-only">Your profile</span>
                <span aria-hidden="true">Tom Cook</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="overflow-y-auto grid-in-main">{children}</main>
    </div>
  )
}
