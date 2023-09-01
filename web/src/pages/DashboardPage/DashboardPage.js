import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const DashboardPage = () => {
  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />
      <div className="p-4">
        <h1>DashboardPage</h1>
        <div className="grid grid-cols-1 grid-rows-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Your grid items go here */}
          <div className="bg-blue-200 p-4">1</div>
          <div className="bg-green-200 p-4">2</div>
          <div className="bg-yellow-200 p-4">3</div>
          <div className="bg-red-200 p-4">4</div>
          <div className="bg-purple-200 p-4">5</div>
          <div className="bg-pink-200 p-4">6</div>
        </div>
      </div>
    </>
  )
}

export default DashboardPage
