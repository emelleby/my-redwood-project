import {
  Card,
  Metric,
  Text,
  Flex,
  BadgeDelta,
  DeltaType,
  Color,
  Grid,
} from '@tremor/react'
export const QUERY = gql`
  query FindDashboardQuery($id: Int!) {
    dashboard: dashboard(id: $id) {
      id
    }
  }
`

const colors = {
  increase: 'emerald',
  moderateIncrease: 'emerald',
  unchanged: 'orange',
  moderateDecrease: 'rose',
  decrease: 'rose',
}

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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ dashboard }) => {
  return (
    <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
      {categories.map((item) => (
        <Card key={item.title}>
          <Text>{item.title}</Text>
          <Flex
            justifyContent="start"
            alignItems="baseline"
            className="space-x-3 truncate"
          >
            <Metric>{item.metric}</Metric>
            <Text className="truncate">from {item.metricPrev}</Text>
          </Flex>
          <Flex justifyContent="start" className="mt-4 space-x-2">
            <BadgeDelta deltaType={item.deltaType} />
            <Flex justifyContent="start" className="space-x-1 truncate">
              <Text color={colors[item.deltaType]}>{item.delta}</Text>
              <Text className="truncate">to previous month</Text>
            </Flex>
          </Flex>
        </Card>
      ))}
    </Grid>
  )
}
