import {
  Grid,
  Col,
  Card,
  Title,
  AreaChart,
  Metric,
  Text,
  Flex,
  ProgressBar,
  DonutChart,
  BadgeDelta,
  BarChart,
  List,
  ListItem,
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
  const data = [
    {
      Cat: 'Categories',
      1: 2890,
      2: 1400,
      3: 4938,
    },
  ]
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
      deltaType: 'moderateIncrease',
    },
    {
      title: 'Profit',
      metric: '$ 40,598',
      metricPrev: '$ 45,564',
      delta: '10.9%',
      deltaType: 'moderateDecrease',
    },
    {
      title: 'Customers',
      metric: '1,072',
      metricPrev: '856',
      delta: '25.3%',
      deltaType: 'moderateIncrease',
    },
  ]
  const dataFormatter = () => {
    return '$ ' + Intl.NumberFormat('us').format().toString()
  }

  return (
    <div className="bg-slate-50 p-12">
      <MetaTags title="Dashboard" description="Dashboard page" />

      <h1 className="mb-12 text-2xl">Dashboard</h1>

      <Grid numCols={1} numColsSm={2} numColsLg={3} className="my-8 gap-6">
        <Col numColSpan={1} numColSpanLg={3}>
          <Card>
            <Title>Newsletter revenue over time (USD)</Title>
            <AreaChart
              className="mt-4 h-72"
              data={chartdata}
              index="date"
              categories={['SemiAnalysis', 'The Pragmatic Engineer']}
              colors={['sky', 'green']}
              // valueFormatter={dataFormatter}
            />
          </Card>
        </Col>
      </Grid>
      <div className="grid-rows-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Your grid items go here */}

        <Card>
          <div className="flex gap-2">
            <Card className="p-1">
              <BarChart
                className="mt-2"
                data={data}
                index="Cat"
                showLegend={false}
                noDataText="No data"
                categories={['1', '2', '3']}
                colors={['teal', 'amber', 'rose']}
                stack={true}
                //layout="vertical"
                valueFormatter={dataFormatter}
                yAxisWidth={5}
                relative={true}
              />
            </Card>
          </div>
        </Card>
        <div className="flex gap-2">
          <Grid numItemsSm={1} numItemsLg={1} className="w-full">
            <Flex flexDirection="col">
              {categories.map((item) => (
                <Card key={item.title} className="gap-3">
                  <Flex alignItems="start">
                    <Text>{item.title}</Text>
                    <BadgeDelta deltaType={item.deltaType}>
                      {item.delta}
                    </BadgeDelta>
                  </Flex>
                  <Flex
                    justifyContent="start"
                    alignItems="baseline"
                    className="space-x-3 truncate"
                  >
                    <Metric>{item.metric}</Metric>
                    <Text className="truncate">from</Text>
                    <Text className="truncate font-medium">
                      {item.metricPrev}
                    </Text>
                  </Flex>
                </Card>
              ))}
            </Flex>
          </Grid>
          <Card className="w-12 p-1">
            <BarChart
              className="h-96"
              data={data}
              index="Cat"
              showLegend={false}
              showYAxis={false}
              noDataText
              categories={['1', '2', '3']}
              colors={['teal', 'amber', 'rose']}
              stack={true}
              // layout="vertical"
              valueFormatter={dataFormatter}
              yAxisWidth={4}
              relative={true}
            />
          </Card>
        </div>

        <Card
          className="mx-auto max-w-xs"
          decoration="top"
          decorationColor="indigo"
        >
          <Text>Sales</Text>
          <Metric>$ 34,743</Metric>
        </Card>

        <Card className="mx-auto">
          <Text>Sales</Text>
          <Metric>$ 71,465</Metric>
          <Flex className="mt-4">
            <Text>32% of annual target</Text>
            <Text>$ 225,000</Text>
          </Flex>
          <ProgressBar value={32} className="mt-2" />
        </Card>
        <CardTable />
        <Card className="max-w-lg">
          <Title>Sales</Title>
          <DonutChart
            className="mt-6"
            data={cities}
            category="sales"
            index="name"
            variant="donut"
            // valueFormatter={valueFormatter}
            colors={['slate', 'violet', 'indigo', 'rose', 'cyan', 'amber']}
          />
        </Card>

        <Card className="p-5 pb-2" decoration="top" decorationColor="indigo">
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
        <CardTableSum />
        <div className="inline-block min-h-0 overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="text-base font-normal text-gray-900">Text 1</dt>
          <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
            <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
              Text 2
              <span className="ml-2 text-sm font-medium text-gray-500">
                from tidligere
              </span>
            </div>

            <div
              className="inline-flex items-baseline
                rounded-full bg-red-100 px-2.5 py-0.5 text-sm font-medium text-red-800 md:mt-2 lg:mt-0"
            >
              <span className="sr-only"> increased by </span>
              Text
            </div>
          </dd>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
