const CardTableSum = () => {
  const data = [
    {
      name: 'Stationary combustion',
      kwh: 45540,
      id: 1,
    },
    {
      name: 'Mobile combustion',
      kwh: 26560,
      id: 2,
    },
    {
      name: 'Renewable energy',
      kwh: 18032,
      id: 3,
    },
    {
      name: 'Non-renewale energy',
      kwh: 12245,
      id: 4,
    },
  ]
  const totalKwh = data.reduce((accumulator, item) => {
    if (item.kwh !== undefined) {
      return accumulator + item.kwh
    }
    return accumulator
  }, 0)

  return (
    <div className="inline-block min-w-full align-middle">
      <div className="overflow-hidden border-t-4 border-sky-600 shadow-md ring-1 ring-slate-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-slate-300">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-3 text-left text-base font-semibold text-slate-900 ">
                Type
              </th>
              <th className="float-right whitespace-nowrap py-3 pr-4 text-left text-base font-semibold text-slate-900">
                Kilowatt hours
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {data.map((item) => (
              <tr key={item.id}>
                <td
                  className="truncate py-2.5 px-4 text-base text-slate-700 "
                  style={{ maxWidth: '100px' }}
                >
                  {item.name}
                </td>
                <td className="w-24 whitespace-nowrap px-4 py-2.5 text-right text-base text-slate-700">
                  {item.kwh.toLocaleString('no-NO')}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-slate-300">
              <td className="px-4 text-left text-base font-semibold text-slate-900">
                Total energy consumption
              </td>
              <td className="py-3 pr-4 text-right text-base font-semibold text-slate-900">
                {totalKwh.toLocaleString('no-NO')}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default CardTableSum
