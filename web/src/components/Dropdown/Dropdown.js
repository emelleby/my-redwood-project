const Dropdown = () => {
  return (
    <div className="relative w-32">
      <label
        htmlFor="year-select"
        className="absolute -top-2 left-2 mt-0 inline-block bg-white px-1 text-xs font-medium text-gray-900 md:hidden"
      >
        Reporting year
      </label>

      <select
        id="year-select"
        name="year-select"
        className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-sky-600 sm:text-base sm:leading-6"
        defaultValue="2022"
      >
        <option>2020</option>
        <option>2021</option>
        <option>2022</option>
        <option>2023</option>
      </select>
    </div>
  )
}

export default Dropdown
