const CardTable = () => {
  const input = [
    {
      name: 'Supplier 1',
      emissions: 2545.54,
      id: 1,
    },
    {
      name: 'Supplier 2',
      emissions: 26.56,
      id: 2,
    },
    {
      name: 'Supplier 3',
      emissions: 18.32,
      id: 3,
    },
    {
      name: 'Supplier with a very long name that will overflow tha available space',
      emissions: 12.45,
      id: 4,
    },
    {
      name: 'Supplier 5',
      emissions: 12.45,
      id: 5,
    },
  ]

  return (
    <div className="inline-block min-w-full align-middle">
      <div className="overflow-hidden border-t-4 border-sky-600 shadow-md ring-1 ring-slate-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-slate-300">
          <thead className="bg-slate-100">
            <tr>
              <th className="py-3 px-4 text-left text-base font-semibold text-slate-900 ">
                Supplier name
              </th>
              <th className="px-4 py-3 text-left text-base font-semibold text-slate-900">
                Emissions<span className="text-slate-500"> tCo2e</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {input.map((item) => (
              <tr key={item.id}>
                <td
                  className="text-basetext-slate-700 truncate py-2.5 px-4"
                  style={{ maxWidth: '100px' }}
                >
                  {item.name}
                </td>
                <td className="w-24 whitespace-nowrap px-4 py-2.5 text-right text-base text-slate-700">
                  {item.emissions.toLocaleString('no-NO')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CardTable
