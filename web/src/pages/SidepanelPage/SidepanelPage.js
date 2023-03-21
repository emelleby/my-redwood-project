import { useState } from 'react'

import { Card } from 'flowbite-react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { ShopPage } from '../ShopPage/ShopPage'

const SidepanelPage = () => {
  const [open, setOpen] = useState(true)
  const Menus = [
    { title: 'Dashboard', src: 'Icon-dash' },
    { title: 'Inbox', src: 'Chat' },
    { title: 'Accounts', src: 'User', gap: true },
    { title: 'Schedule ', src: 'Calendar' },
    { title: 'Search', src: 'Search' },
    { title: 'Analytics', src: 'Chart' },
    { title: 'Files ', src: 'Folder', gap: true },
    { title: 'Setting', src: 'Setting' },
  ]
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for product 1',
      price: '$10.00',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for product 2',
      price: '$20.00',
      imageUrl:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.XCk9xg9Cc9rzcWfQzMQojgHaFj%26pid%3DApi&f=1&ipt=f0a974eda3afd2caff3ff2e978e51e8105b4beb068e3409a1898a6f4e5bbaa36&ipo=images',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for product 3',
      price: '$30.00',
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description for product 4',
      price: '$40.00',
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Description for product 5',
      price: '$50.00',
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'Description for product 6',
      price: '$60.00',
    },
    {
      id: 7,
      name: 'Product 7',
      description: 'Description for product 7',
      price: '$70.00',
    },
    {
      id: 8,
      name: 'Product 8',
      description: 'Description for product 8',
      price: '$80.00',
    },
  ]
  const ProductList = ({ products }) => (
    <div className="grid grid-cols-2 justify-items-center gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  )
  const ProductCard = ({ name, description, price, imageUrl }) => (
    <div className="my-8 max-w-sm">
      <Card imgAlt="Image alt" imgSrc={imageUrl}>
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p className="mt-2 text-sm">{description}</p>
        <div className="flex items-center justify-between gap-2">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            Price: {price}
          </span>

          <button className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to Cart
          </button>
        </div>
      </Card>
    </div>
  )
  return (
    <div className="grid">
      <div
        className={` ${
          open ? 'w-48' : 'w-20'
        }  relative h-screen bg-teal-600 p-4 pt-4 duration-300`}
      >
        <img
          src="../assets/control.png"
          className={`absolute -right-3 top-5 w-7 cursor-pointer rounded-full
           border-2 border-[#d05663] ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex items-center gap-x-4">
          <img
            src="../assets/Logo-2links.png"
            className={`cursor-pointer duration-500 ${
              open && 'w-10 rotate-[360deg]'
            }`}
          />
          <h1
            className={`origin-left text-xl font-medium text-slate-100 duration-200 ${
              !open && 'scale-0'
            }`}
          >
            Scope321
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`hover:bg-light-white  text-md flex cursor-pointer items-center gap-x-4 rounded-md p-2 text-slate-50
              ${Menu.gap ? 'mt-4' : 'mt-2'} ${
                index === 0 && 'bg-light-white'
              } `}
            >
              <img src={`../assets/${Menu.src}.png`} />
              <span className={`${!open && 'hidden'} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <ProductList products={products} />;
      </div>
    </div>
  )
}
export default SidepanelPage
