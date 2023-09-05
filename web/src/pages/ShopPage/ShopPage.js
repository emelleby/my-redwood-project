import React from 'react'

import { Card } from 'flowbite-react'
//import { Card } from 'flowbite-react/lib/cjs/components/Card'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

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

//return <ProductList products={products} />;

const ShopPage = () => {
  return (
    <>
      <MetaTags title="Shop" description="Shop page" />
      <div className="bg-slate-100">
        <ProductList products={products} />
      </div>
    </>
  )
}

export default ShopPage
