import React from 'react'

// import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const GridPage = () => {
  return (
    <>
      <MetaTags title="Grid" description="Grid page" />
      <h1>GridPage</h1>
      <div className="grid grid-cols-4 grid-rows-[300px_300px_300px] gap-4">
        <div className="grid place-items-center rounded border border-rose-500 bg-slate-100">
          <p className="">Number 1</p>
        </div>
        <div className="grid place-items-center rounded border border-rose-500 bg-slate-100 ">
          Number 2
        </div>
        <div className="grid place-items-center rounded border border-rose-500 bg-slate-100">
          Number 3
        </div>
        <div className="grid place-items-center rounded border border-rose-500 bg-slate-100">
          Number 4
        </div>
        <div className="grid place-items-center rounded border border-rose-500 bg-slate-100">
          Number 5
        </div>
        <div className="grid place-items-center rounded border border-rose-500 bg-slate-100">
          Number 6
        </div>
        <div className="grid place-items-center rounded border border-rose-500 bg-slate-100">
          Number 7
        </div>
        <div className="grid place-items-center rounded border border-rose-500 bg-slate-100">
          Number 8
        </div>
        <div className="grid place-items-center rounded border border-rose-500 bg-slate-100">
          Number 9
        </div>
        <div className="grid place-items-center rounded border border-rose-500 bg-slate-100">
          Number 10
        </div>
        <div className="grid place-items-center rounded border border-rose-500 bg-slate-100">
          Number 11
        </div>
        <div className="grid place-items-center rounded border border-rose-500 bg-slate-100">
          Number 12
        </div>
      </div>
    </>
  )
}

export default GridPage
