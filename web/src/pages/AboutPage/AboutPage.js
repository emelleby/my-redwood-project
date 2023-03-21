import React, { useRef, useEffect, useState } from 'react'

import { BuilderComponent, builder } from '@builder.io/react'
import { createPopper } from '@popperjs/core'
import { Card } from 'flowbite-react'

// import { MongoClient } from 'mongodb'
// import { Manager, Target, Popper, Arrow } from 'react-popper'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Pop from 'src/components/pop'

import Modal2 from '../../components/modal2.js'

const contentNace = {
  _id: {
    $oid: '635bf92e461a4f282952e0a5',
  },
  code: '73.110',
  parentCode: '73.11',
  level: '5',
  co2Intensity: 11.03670962,
  naics: '541810',
  name: 'Reklamebyråer',
  shortName: 'Reklamebyråer',
  naceNotes:
    'Inkluderer: Omfatter mange former for reklamevirksomhet (enten av egenproduksjon eller av underleverandører), herunder rådgivning, kreativ virksomhet, produksjon av reklamemateriell og kjøp. Herunder: tilrettelegging og gjennomføring av reklamekampanjer dvs. utforming og plassering av reklamer i aviser, magasiner, radio og tv, på Internett og i andre media, utforming og plassering av utendørs reklame, f.eks. reklametavler, plakater, vindusutstilling, innredning av utstillingslokaler, plassering av reklame på biler og busser mv., luftreklame, distribusjon eller levering av reklamemateriell eller vareprøver, anskaffelse av stativer og andre innretninger for oppsetting av reklame, gjennomføring av markedsføringskampanjer og annen reklamevirksomhet med henblikk på å tiltrekke og beholde kunder, markedsføring av varer, markedsføring på salgsstedet, adresserte reklameforsendelser og markedsføringsrådgivning Ekskluderer: Utgivelse av reklamemateriell grupperes under: 58.19 Forlagsvirksomhet ellers. Produksjon av reklameinnslag til radio, fjernsyn og film grupperes under: 59.11 Produksjon av film, video og fjernsynsprogrammer. Markedsanalyse grupperes under: 73.20 Markeds- og opinionsundersøkelser. Reklamefotografering grupperes under: 74.20 Fotografvirksomhet. Organisering av kongresser, messer og utstillinger grupperes under: 82.30 Kongress-, messe- og utstillingsvirksomhet. Mailingvirksomhet grupperes under: 82.19 Fotokopiering, forberedelse av dokumenter og andre spesielle kontortjenester',
  naicsDescription: 'Advertising Agencies',
}

const AboutPage = () => {
  const popTitle = 'Pop Title'
  const popBody =
    'Omfatter dyrking av ettårige vekster, dvs. planter som ikke varer i mer enn to vekstsesonger. Omfatter også dyrking av ettårige vekster med henblikk på produksjon av såfrø og såkorn.'
  const color = 'sky'
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
      <MetaTags title="About" description="About page" />

      <h1>The AboutPage</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col rounded-xl border bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 dark:shadow-slate-700/[.7]">
          <img
            className="h-auto w-full rounded-t-xl"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt="Image Description"
          />
          <div className="p-4 md:p-5">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              Card title
            </h3>
            <p className="mt-1 text-gray-800 dark:text-gray-400">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="flex items-center justify-between gap-2">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Price: 79,99
                {/* Price: {price} */}
              </span>
              <button
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                href="#"
              >
                Go somewhere
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-sm">
          <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
            <h5 className="text-xl font-bold tracking-tight text-slate-800 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-slate-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
      </div>
      <br />
      <div className="w-[600px]">
        <div
          className="rounded-md border-l-4 border-sky-400 bg-sky-100 p-3 text-sm text-slate-800"
          role="alert"
        >
          <div className="flex gap-5">
            <div className="min-w-fit">
              <h6 className="font-bold text-slate-800">Nace code</h6>
              <input
                id="NaceCode"
                name="NaceCode"
                className="w-20 border-0 bg-sky-100 text-base"
                value="64.190"
                disabled
              />
            </div>
            <div className="grow">
              <h6 className="flex flex-row font-bold">
                Industry
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
                    color +
                    '-100 -top-5 z-50 mb-3 block max-w-sm break-words rounded-lg border-b-2 border-solid border-sky-600 text-left text-sm font-normal leading-normal no-underline shadow-lg'
                  }
                  ref={popoverRef}
                >
                  <div>
                    <div className="mb-0 rounded-t-lg border-b border-solid border-slate-100 bg-sky-700 p-3 font-semibold uppercase text-white">
                      Industry description
                    </div>
                    <div className="p-3 text-slate-800">
                      Inkluderer: Omfatter dyrking av ettårige vekster, dvs.
                      planter som ikke varer i mer enn to vekstsesonger
                      Inkluderer også: Omfatter også dyrking av ettårige vekster
                      med henblikk på produksjon av såfrø og såkorn.
                    </div>
                  </div>
                </div>
              </h6>
              <p className="text-base">
                Some industry description here with a lot of information that
                will span across a couple of lines.
              </p>
            </div>

            <div className="min-w-fit">
              <h6 className="font-bold text-slate-800">
                Industry factor{' '}
                <Pop
                  content={{
                    color: 'sky',
                    body: contentNace.naceNotes,
                    title: popTitle,
                  }}
                />
              </h6>
              <p className="text-base">
                10.74
                <span className="pl-2 text-xs text-slate-600">
                  Kg Co2e/kNOK
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="border-b-4 border-dotted border-slate-500"></div>
        <div className="text-slate-600">or</div>
        <div className="border-b-4 border-dotted border-slate-500"></div>
      </div>

      <p className="text-[#1D2B2C]">
        Find me in <code>./web/src/pages/AboutPage/AboutPage.js</code>
      </p>
      <button className="pl-3" type="button">
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
      <Modal2 />
      <p>
        My default route is named <code>about</code>, link to me with `
        <Link to={routes.about()}>About</Link>`
      </p>
      <div>
        <div className="flex items-center justify-between px-4">
          <label
            htmlFor="with-corner-hint"
            className="mb-1 block text-sm font-medium dark:text-white"
          >
            Email
          </label>
          <span className="mb-1 block text-sm text-gray-500">Optional</span>
        </div>
        <input
          type="email"
          id="with-corner-hint"
          className="text-md block w-full rounded-md border-gray-200 py-2 px-4 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
          placeholder="you@site.com"
        />
      </div>
    </>
  )
}

export default AboutPage
