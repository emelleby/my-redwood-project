import { DotsVerticalIcon } from '@heroicons/react/outline'
import { CheckCircleIcon, ExclamationIcon } from '@heroicons/react/solid'
import {
  Grid,
  Card,
  Callout,
  Title,
  Metric,
  Icon,
  Text,
  Flex,
  DonutChart,
  Badge,
  BarChart,
  List,
  ListItem,
  Legend,
  CategoryBar,
} from '@tremor/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import CardTable from 'src/components/CardTable/CardTable'
import CardTableSum from 'src/components/CardTableSum/CardTableSum'

const DashboardPage = () => {
  const cities = [
    {
      name: 'New York',
      sales: 9800,
    },
    {
      name: 'London',
      sales: 4567,
    },
    {
      name: 'Hong Kong in the republic of China',
      sales: 3908,
    },
    {
      name: 'San Francisco',
      sales: 2400,
    },
    {
      name: 'Singapore',
      sales: 1908,
    },
    {
      name: 'Zurich',
      sales: 1398,
    },
  ]
  const cityNames = cities.map((city) => city.name)
  console.log(cityNames)

  const chartdata = [
    {
      date: 'Jan 22',
      SemiAnalysis: 2890,
      'The Pragmatic Engineer': 2338,
    },
    {
      date: 'Feb 22',
      SemiAnalysis: 2756,
      'The Pragmatic Engineer': 2103,
    },
    {
      date: 'Mar 22',
      SemiAnalysis: 3322,
      'The Pragmatic Engineer': 2194,
    },
    {
      date: 'Apr 22',
      SemiAnalysis: 3470,
      'The Pragmatic Engineer': 2108,
    },
    {
      date: 'May 22',
      SemiAnalysis: 3475,
      'The Pragmatic Engineer': 1812,
    },
    {
      date: 'Jun 22',
      SemiAnalysis: 3129,
      'The Pragmatic Engineer': 1726,
    },
  ]
  const categories = [
    {
      title: 'Sales',
      metric: '$ 12,699',
      metricPrev: '$ 9,456',
      delta: '34.3%',
      prosent: 35,
      deltaType: 'moderateIncrease',
    },
    {
      title: 'Sales',
      metric: '$ 12,699',
      metricPrev: '$ 9,456',
      delta: '34.3%',
      prosent: 35,
      deltaType: 'moderateIncrease',
    },
    {
      title: 'Profit',
      metric: '$ 40,598',
      metricPrev: '$ 45,564',
      delta: '10.9%',
      prosent: 23,
      deltaType: 'moderateDecrease',
    },
    {
      title: 'Customers',
      metric: '1,072',
      metricPrev: '856',
      delta: '25.3%',
      prosent: 42,
      deltaType: 'moderateIncrease',
    },
  ]
  const dummyData = [
    {
      id: '1',
      name: 'Kategori 1 - Innkjøpte varer og tjenester',
      co2e: 851.97,
      percent: 47.67,
      color: 'red',
    },
    {
      id: '2',
      name: 'Kategori 2 - Kapitalvarer',
      co2e: 308.69,
      percent: 17.28,
      color: 'amber',
    },
    {
      id: '3',
      name: 'Kategori 3 - Drivstoff og energirelaterte aktiviteter',
      co2e: 52.64,
      percent: 2.95,
      color: 'lime',
    },
    {
      id: '4',
      name: 'Kategori 4 - Oppstrøms transport og distribusjon',
      co2e: 154.65,
      percent: 8.66,
      color: 'emerald',
    },
    {
      id: '5',
      name: 'Kategori 5 - Avfall fra produksjon',
      co2e: 30.83,
      percent: 1.73,
      color: 'cyan',
    },
    {
      id: '6',
      name: 'Kategori 6 - Forretningsreiser',
      co2e: 80.43,
      percent: 4.5,
      color: 'blue',
    },
    {
      id: '7',
      name: 'Kategori 7 - Pendling for ansatte',
      co2e: 64.44,
      percent: 3.6,
      color: 'purple',
    },
    {
      id: '8',
      name: 'Kategori 8 - Oppstrøms leasing',
      co2e: 180.2,
      percent: 10.09,
      color: 'pink',
    },
  ]
  const totalCo2e = 34743

  const co2eData = [
    {
      id: 1,
      title: 'Scope 1',
      co2e: totalCo2e * 0.1381,
      percent: 13.81,
      color: ['rose', 'slate', 'slate'],
    },
    {
      id: 2,
      title: 'Scope 2',
      co2e: totalCo2e * 0.1734,
      percent: 17.34,
      color: ['sky', 'neutral', 'neutral'],
    },
    {
      id: 3,
      title: 'Scope 3',
      co2e: totalCo2e * 0.6885,
      percent: 68.85,
      color: ['amber', 'slate', 'slate'],
    },
  ]
  const scopeNames = co2eData.map((scope) => scope.title)
  const createScopesData = (data, scope) => {
    if (scope === 1)
      return [
        { percent: data[0].percent },
        { percent: data[1].percent },
        { percent: data[2].percent },
      ]
    if (scope === 2)
      return [
        { percent: data[1].percent },
        { percent: 100 - data[1].percent },
        { percent: 0 },
      ]

    if (scope === 3)
      return [
        { percent: data[2].percent },
        { percent: 100 - data[2].percent },
        { percent: 0 },
      ]
    //console.log(dataToReturn)
    //return dataToReturn
  }

  console.log(co2eData)

  const energyData = [
    { type: 'Stationary combustion', value: 45540 },
    { type: 'Mobile combustion', value: 26560 },
    { type: 'Renewable energy', value: 18032 },
    { type: 'Non-renewable energy', value: 12245 },
  ]

  const monthlyData = [
    {
      month: 'January',
      'scope 1': 405.83,
      'scope 2': 523.75,
      'scope 3': 1964.92,
      color: 'rose',
    },
    {
      month: 'February',
      'scope 1': 400.08,
      'scope 2': 503.75,
      'scope 3': 1990.67,
      color: 'sky',
    },
    {
      month: 'March',
      'scope 1': 420.33,
      'scope 2': 540.25,
      'scope 3': 1925.58,
      color: 'amber',
    },
    {
      month: 'April',
      'scope 1': 391.17,
      'scope 2': 520.83,
      'scope 3': 1990.83,
      color: 'rose',
    },
    {
      month: 'May',
      'scope 1': 416.25,
      'scope 2': 527.08,
      'scope 3': 1951.17,
      color: 'sky',
    },
    {
      month: 'June',
      'scope 1': 416.92,
      'scope 2': 517.42,
      'scope 3': 1960.17,
      color: 'amber',
    },
    {
      month: 'July',
      'scope 1': 407.42,
      'scope 2': 533.25,
      'scope 3': 1945.5,
      color: 'rose',
    },
    {
      month: 'August',
      'scope 1': 411.58,
      'scope 2': 504.92,
      'scope 3': 1978.08,
      color: 'sky',
    },
    {
      month: 'September',
      'scope 1': 409,
      'scope 2': 534.17,
      'scope 3': 1951.33,
      color: 'amber',
    },
    {
      month: 'October',
      'scope 1': 420.67,
      'scope 2': 521.83,
      'scope 3': 1952,
      color: 'rose',
    },
    {
      month: 'November',
      'scope 1': 418.58,
      'scope 2': 535.25,
      'scope 3': 1940.67,
      color: 'sky',
    },
    {
      month: 'December',
      'scope 1': 412.33,
      'scope 2': 524.58,
      'scope 3': 1991,
      color: 'amber',
    },
  ]

  const energyLabels = energyData.map((source) => source.type)

  console.log(energyLabels)

  const getCo2eValues = (data) => {
    return data.map((item) => item.co2e)
  }
  const getNameValues = (data) => {
    return data.map((item) => item.name)
  }
  const getColorValues = (data) => {
    return data.map((item) => item.color)
  }
  const co2eValues = getCo2eValues(dummyData)
  console.log(co2eValues)
  const nameValues = getNameValues(dummyData)
  console.log(nameValues)
  const colorValues = getColorValues(dummyData)
  console.log(colorValues)
  const createNameCo2eObject = (data) => {
    return data.reduce((result, item) => {
      result[item.name] = item.co2e
      return result
    }, {})
  }

  // Example usage:
  const nameCo2eObject = createNameCo2eObject(dummyData)
  console.log(nameCo2eObject)

  const dataFormatter = () => {
    return Intl.NumberFormat('us').format().toString()
  }
  const valueFormatter = (value) => {
    return <div className="font-bold">{value}</div>
  }

  const valueFormat = (number) => {
    console.log(number)
    return `${new Intl.NumberFormat('no-NO', {
      maximumFractionDigits: 1,
    })
      .format(number)
      .toString()} %`
  }
  const format = (number) => {
    console.log(number)
    return `${new Intl.NumberFormat('no-NO', {
      maximumFractionDigits: 1,
    })
      .format(number)
      .toString()} tco2e`
  }

  const intensityScale = (factor = 15, industry = 12) => {
    const highEnd = industry * 2
    const lowEnd = industry / 2

    // Ensure factor is within the range [lowEnd, highEnd]
    const clampedFactor = Math.min(Math.max(factor, lowEnd), highEnd)

    // Calculate logarithmic scale
    const indicator =
      ((Math.log(clampedFactor) - Math.log(lowEnd)) /
        (Math.log(highEnd) - Math.log(lowEnd))) *
      100

    return [indicator, lowEnd, highEnd, factor]
  }

  return (
    <>
      <div className="bg-slate-50 p-4 2xl:px-8">
        <MetaTags title="Dashboard" description="Dashboard page" />

        <h1 className="mb-5 text-2xl font-bold text-slate-900">Dashboard</h1>

        <div className="grid auto-rows-min grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {/* Your grid items go here */}

          <div className="first flex flex-col gap-3">
            <Card
              className="mx-auto min-h-0 self-start"
              decoration="top"
              decorationColor="emerald"
            >
              <Text className="mb-2 text-[18px] font-bold">
                Total emissions for Company name
              </Text>
              <div className="flex place-items-baseline">
                <Metric>{Intl.NumberFormat('no-NO').format(totalCo2e)}</Metric>
                <Text className="text-sm font-bold">
                  <span className="pl-1">tCo2e</span>
                </Text>
              </div>
            </Card>
            <Card className="mx-auto" decoration="left" decorationColor="slate">
              <Flex>
                <Text className="text-[18px] font-bold">Carbon intensity</Text>
                <Text className="text-sm font-bold">
                  {intensityScale()[3]} Kg/tNOK
                </Text>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-8 w-8 rounded-md p-1 ring-1 ring-slate-200"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                    />
                  </svg>
                </div>

                {/* <Icon
                  icon={DotsVerticalIcon}
                  color="slate"
                  variant="outline"
                  tooltip="Click to add company revenue"
                  size="md"
                /> */}
              </Flex>
              <CategoryBar
                values={[22, 21, 14, 21, 22]}
                showLabels={false}
                colors={['emerald', 'lime', 'yellow', 'orange', 'rose']}
                markerValue={intensityScale()[0]}
                className="mt-4"
              />
              <Flex>
                <Text className="mt-2">
                  {intensityScale()[1]} <span className="text-xs">Kg/tNOK</span>
                </Text>
                {/* <Text className=" mt-2">
                value: {intensityScale()[0].toFixed(2)}
              </Text> */}
                <Text className=" mt-2">
                  {intensityScale()[2]}... <span className="text-xs">Kg</span>
                </Text>
              </Flex>
            </Card>
            <div className="w-full">
              <Flex flexDirection="col" className="gap-3">
                {co2eData.map((item) => (
                  <Card
                    key={item.id}
                    decoration="left"
                    decorationColor={item.color[0]}
                    className="gap-3 py-3"
                  >
                    <Flex className="w-full">
                      <Flex flexDirection="col" className="gap-2">
                        <Flex alignItems="start">
                          <Text className="font-bold">{item.title}</Text>
                        </Flex>
                        <Flex
                          justifyContent="start"
                          alignItems="baseline"
                          className="space-x-3 truncate"
                        >
                          <Metric>
                            {Intl.NumberFormat('no-NO', {
                              maximumFractionDigits: 1,
                            }).format(item.co2e)}
                          </Metric>
                          <Text className="truncate">tCo2e</Text>
                        </Flex>
                      </Flex>
                      <DonutChart
                        className="h-28 w-28"
                        data={createScopesData(co2eData, item.id)}
                        category="percent"
                        index="title"
                        variant="donut"
                        label={item.percent}
                        valueFormatter={valueFormat}
                        colors={item.color}
                      />
                    </Flex>
                  </Card>
                ))}
              </Flex>
            </div>
            <Card className="w-full">
              <Title>Emissions per scope</Title>
              <DonutChart
                className="mt-2"
                data={co2eData}
                category="percent"
                index="title"
                variant="pie"
                // valueFormatter={valueFormatter}
                colors={['rose', 'sky', 'amber']}
              />
              <Legend
                className="mt-3"
                categories={scopeNames}
                colors={['rose', 'sky', 'amber']}
              />
            </Card>
          </div>

          <div className="categories flex flex-col gap-3 lg:-mt-10">
            <div className="ml-2 text-xl font-bold">Scope 3 categories</div>
            <div className="flex w-full gap-2 self-start">
              <Card className="w-12 p-1">
                <BarChart
                  className="h-full min-h-0"
                  data={[nameCo2eObject]}
                  index=""
                  showLegend={false}
                  showYAxis={false}
                  showXAxis={false}
                  noDataText
                  categories={nameValues}
                  colors={colorValues}
                  stack={true}
                  // valueFormatter={dataFormatter}
                  yAxisWidth={4}
                  relative={true}
                />
              </Card>
              <Flex flexDirection="col" className="gap-3">
                {dummyData.map((item) => (
                  <Card key={item.id} className="gap-3">
                    <Flex alignItems="start">
                      <Text className="font-bold">{item.name}</Text>
                      <Badge color={item.color}>{item.percent} %</Badge>
                    </Flex>
                    <Flex
                      justifyContent="start"
                      alignItems="baseline"
                      className="space-x-3 truncate"
                    >
                      <div className="text-2xl font-semibold">
                        {Intl.NumberFormat('no-NO', {
                          maximumFractionDigits: 2,
                        }).format(item.co2e)}
                      </div>
                      <Text className="truncate">tons co2e</Text>
                      {/* <Text className="truncate font-medium">
                        {item.metricPrev}
                      </Text> */}
                    </Flex>
                  </Card>
                ))}
              </Flex>
            </div>
          </div>

          <div className=" lg:col-span-2 xl:col-span-1 xl:row-span-2 xl:-mt-10">
            {/* Nested grid for the four items */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-1">
              {/* Four items */}
              <div className="flex flex-col gap-3">
                <div className="ml-2 text-xl font-bold">Top 5 suppliers</div>
                <CardTable />
              </div>
              <div className="flex flex-col gap-3 xl:mt-2">
                <div className="ml-2 text-xl font-bold">Energy overview</div>
                <CardTableSum />
              </div>
              <Card className="mt-4 w-full">
                <Title>Energy data</Title>
                <DonutChart
                  className="mt-2"
                  data={energyData}
                  category="value"
                  index="type"
                  variant="pie"
                  // valueFormatter={valueFormatter}
                  colors={['stone', 'rose', 'teal', 'amber']}
                />
                <Legend
                  className="mt-3"
                  categories={energyLabels}
                  colors={['stone', 'rose', 'teal', 'amber']}
                />
              </Card>
              <div className="flex flex-col gap-3">
                <div className="ml-2 mt-2 text-xl font-bold">Co2 added</div>
                <Card
                  className="p-5 pb-2"
                  decoration="top"
                  decorationColor="sky"
                >
                  <div className="-m-5 rounded-t-tremor-default bg-slate-50 shadow">
                    <p className="p-5 text-lg font-bold">Tremor's Hometowns</p>
                  </div>
                  <List className="mt-6 mb-0 w-full">
                    {cities.map((item) => (
                      <ListItem key={item.name}>
                        <span className="truncate">{item.name}</span>
                        <span className="pl-5">{item.sales} tCo2e</span>
                      </ListItem>
                    ))}
                  </List>
                </Card>
              </div>
            </div>
          </div>

          <div className="barchart col-span-1 lg:col-span-2">
            <Card>
              <Title>Emissions by month</Title>
              <BarChart
                className="mt-1"
                data={monthlyData}
                index="month"
                categories={['scope 1', 'scope 2', 'scope 3']}
                colors={['rose', 'sky', 'amber']}
                stack={true}
                valueFormatter={format}
                yAxisWidth={40}
              />
            </Card>
          </div>

          {/* Nested grid for the four items */}

          {/* Three items */}

          {/* <Text className="text-lg font-bold">Manglende data</Text> */}

          <Callout
            className="overflow-y-hidden ring-1 ring-sky-400"
            title="Manglende data"
            icon={ExclamationIcon}
          >
            Det er hovedsaklig to grunner til at vi ikke har data på disse.
            Leverandøren har lagt ned virksomheten eller det er en
            utenlandsleverandør som vi ikke har noen industrikode på.
          </Callout>
          <Callout
            className="overflow-y-hidden ring-1 ring-sky-400"
            title="Reiser"
            icon={ExclamationIcon}
          >
            Det er viktig å få gode data på reisevirksomhet.
            <p>
              <br />
              <Link>
                <span className="text-blue underline">
                  Legg til ansattes pendling til og fra jobb
                </span>
              </Link>
            </p>
          </Callout>
          <Callout
            className="overflow-y-hidden ring-1 ring-sky-400"
            title="Røde flagg"
            icon={ExclamationIcon}
          >
            For at det skal bli best mulig rapportering har vi flagget noen
            transaksjoner med rødt flagg. Disse bør du manuelt sjekke da det er
            viktige føringer.
          </Callout>
        </div>

        {/* Add more items as needed */}

        <style jsx="true">{`
          .recharts-tooltip-wrapper {
            z-index: 10;
          }
        `}</style>
      </div>
    </>
  )
}

export default DashboardPage
