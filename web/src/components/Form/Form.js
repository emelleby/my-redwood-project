import * as React from 'react'

export default function Form() {
  return (
    <div className="flex flex-col items-start bg-white p-5 px-5">
      <h1 className="w-full self-stretch text-4xl font-bold text-teal-800">
        Step 1 - NSRS Climate commitment
      </h1>
      <div className="mt-4 flex items-start gap-5 self-center max-md:flex-wrap md:max-w-full">
        <div className="flex shrink-0 grow basis-auto flex-col items-start justify-center self-stretch">
          <label
            htmlFor="targetYear"
            className="w-full self-stretch text-sm font-medium text-slate-800"
          >
            Target year
          </label>
          <input
            type="text"
            id="targetYear"
            className="mt-1.5 w-full grow items-center self-stretch rounded-lg border border-solid border-[color:var(--gray-200,#D5DAE1)] bg-white px-3.5 py-2 text-base leading-[150%] text-gray-500 shadow"
            value="2030"
            readOnly
          />
        </div>
        <div className="flex w-full shrink-0 flex-col items-start justify-center self-stretch">
          <label
            htmlFor="baseYear"
            className="w-full self-stretch text-sm font-medium leading-7 text-slate-600"
          >
            Base year
          </label>
          <input
            type="text"
            id="baseYear"
            className="w-full items-center rounded-lg border border-0 bg-white px-3.5 py-2 text-base text-gray-500 shadow ring-1 ring-slate-700"
            value="2022"
          />
        </div>
      </div>
      <div className="mt-4 flex w-full flex-col items-start justify-center self-center">
        <label
          htmlFor="comment"
          className="block text-sm font-medium leading-7 text-gray-900"
        >
          Add your comment
        </label>

        <textarea
          rows={2}
          name="comment"
          id="comment"
          className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
          defaultValue="You might come back to this when you have done the rest of the activities in this report."
        />

        <label
          htmlFor="commitment"
          className="w-full self-stretch text-sm font-medium leading-7 text-slate-600 max-md:max-w-full"
        >
          Our climate commitment
        </label>
        <textarea
          type="textarea"
          className="w-full grow items-center self-stretch rounded-lg border border-solid border-[color:var(--gray-200,#D5DAE1)] bg-white px-3 py-2 text-base text-gray-500 shadow max-md:max-w-full"
          value="You might come back to this when you have done the rest of the
          activities in this report. It might be easier when you have thought
          through what you and your company want and shoot for."
          id="commitment"
        />
      </div>
      <div className="mt-4 flex w-full items-start justify-between gap-5 self-center px-5 max-md:flex-wrap">
        <button
          href="#"
          className="flex max-w-full flex-col items-center self-stretch rounded-lg border border-solid border-[color:var(--Scope321-Green,#0D9488)] bg-white px-4 py-2"
        >
          <span className="self-center text-base font-bold uppercase tracking-wider text-teal-600">
            Back
          </span>
        </button>
        <button className="shadow-class flex max-w-full flex-col items-center self-stretch rounded-lg bg-teal-600 px-4 py-2">
          <span className="self-center text-base font-bold uppercase tracking-wider text-white">
            Button
          </span>
        </button>
      </div>
    </div>
  )
}
