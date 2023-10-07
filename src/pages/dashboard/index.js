import Paginate from '@components/Paginate';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';
import { useState } from 'react';
import { Chart } from '@common/Chart';

const PRODUCT_LIMIT = 0;
// const PRODUCT_OFFSET = 0;

export default function Dashboard() {
  const [offsetProducts, setOffsetProducts] = useState(0);
  const products = useFetch(endPoints.products.getProducts(PRODUCT_LIMIT, offsetProducts), offsetProducts);
  const totalProducts = useFetch(endPoints.products.getProducts(0, 0)).length;
  
  console.log(products);
  const prices = products.map(product => product.price)
  const totalPrices = prices.reduce((accumulator, curr) => accumulator + curr, 0)
  console.log(totalPrices);
  // console.log(totalValueInProducts);
  const categoryNames = products?.map(product => product.category)
  const categoryCount = categoryNames?.map(category => category.name)

  const countOcurrencies = (array) => array.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {})
  // console.log(countOcurrencies(categoryCount));

  // console.log(categoryNames);
  // console.log(categoryCount);
  // Chart.defaults?.global.defaultFontColor = "#fff";


  const data = {
    datasets: [
      {
        label: 'Categories',
        data: countOcurrencies(categoryCount),
        borderWidth: 4,
        backgroundColor: ['rgb(220 38 38)', 'rgb(146 64 14)', 'rgb(8 145 178)', 'rgb(250 204 21)', 'rgb(22 163 74)'],
        // fontColor: ['white']
      },
    ],
  };

  return (
    <>
      <Chart className="mb-8 mt-2" chartData={data} />
      <div>
        <h2 className='text-2xl text-center mt-10 text-gray-300'>Total items: <span className='text-white'>{totalProducts}</span> </h2>
        <h2 className='text-2xl text-center mt-2 text-gray-300'>Total value: <span className='text-green-500 font-medium'>${totalPrices}</span></h2>

      </div>
    </>
  );
}
