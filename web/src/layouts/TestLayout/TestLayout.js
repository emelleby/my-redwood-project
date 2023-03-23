import { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const TestLayout = ({ children }) => {
  const [open, setOpen] = useState(true)
  const { isAuthenticated, currentUser, logOut } = useAuth()
  // grid-cols-[80px_auto] grid-rows-[3.5rem_auto]

  return (
    <>
      <div
        className={` ${
          open ? 'grid-cols-layout' : 'grid-cols-[80px_auto]'
        } wrapper grid h-screen grid-rows-layout duration-300 grid-areas-layout`}
      >
        <header className="sticky z-10 flex items-center bg-teal-300 px-6 grid-in-header">
          <h1>GridPage header H1</h1>
        </header>
        <div className="bg-teal-600 p-4 grid-in-logo">
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
        <img
          src="../assets/control.png"
          alt="collapse menu"
          className={`relative right-4 top-4 z-20 w-7 cursor-pointer rounded-full border-2 border-[#d05663] grid-in-header ${
            !open && 'rotate-180'
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex-between sticky flex flex-col bg-teal-600 p-3 text-slate-100 grid-in-sidebar">
          <nav>
            <Link to={routes.posts()}>
              <h1>Post Admin</h1>
            </Link>
            <Link to={routes.demo()}>
              <h1 className="text-xl">Demo</h1>
            </Link>
            <Link to={routes.grid()}>
              <h1>Grid</h1>
            </Link>
            <Link to={routes.rqSuperheroes()}>
              <h1>RqSuperheroes</h1>
            </Link>
            <Link to={routes.superheroes()}>
              <h1>Superheroes</h1>
            </Link>
            <Link to={routes.contact()}>Contact</Link>
          </nav>
          <div>
            {isAuthenticated ? (
              <div className="flex-between sticky flex flex-col">
                <span className="text-sm">Logged in as {currentUser.id}</span>{' '}
                <button type="button" onClick={logOut}>
                  Logout
                </button>
              </div>
            ) : (
              <Link to={routes.login()}>Login</Link>
            )}
          </div>
        </div>

        <main className="overflow-y-scroll bg-teal-50 p-4 grid-in-main">
          {children}
        </main>
      </div>
    </>
  )
}

export default TestLayout
