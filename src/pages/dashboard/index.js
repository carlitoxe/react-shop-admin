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
  
  // console.log(products);

  const categoryNames = products?.map(product => product.category)
  const categoryCount = categoryNames?.map(category => category.name)

  const countOcurrencies = (array) => array.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {})
  // console.log(countOcurrencies(categoryCount));

  console.log(categoryNames);
  console.log(categoryCount);
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

    </>
  );
}
