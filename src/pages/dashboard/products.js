import { useEffect, useState } from 'react';
import { PencilIcon, SquaresPlusIcon } from '@heroicons/react/24/solid';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';
import Paginate from '@components/Paginate';
import Modal from '@common/Modal';
import FormProduct from '@components/FormProduct';
import axios from 'axios';
import useAlert from '@hooks/useAlert';
import Alert from '@common/Alert';
import { TrashIcon } from '@heroicons/react/20/solid';
import { deleteProduct } from '@services/api/products';
import Link from 'next/link';

const PRODUCT_LIMIT = 6;
const PRODUCT_OFFSET = 0;

export default function Products() {
  const [offsetProducts, setOffsetProducts] = useState(0);
  const [products, setProducts] = useState([])
  // const getProducts = useFetch(endPoints.products.getProducts(PRODUCT_LIMIT, offsetProducts), offsetProducts);
  // setProducts(getProducts)
  const totalProducts = useFetch(endPoints.products.getProducts(0, 0)).length;

  const [open, setOpen] = useState(false);

  const { alert, setAlert, toggleAlert } = useAlert();

  useEffect(() =>   {
    async function getProducts() {
      const response = await axios.get(endPoints.products.allProducts)
      setProducts(response.data)
    }

    try {
      getProducts()
    } catch (error) {
      console.error(error);
    }

  }, [alert])

  const handleDelete = (id) => {
    deleteProduct(id)
      .then(() => {
        setAlert({
          active: true,
          message: 'Product has been DELETED successfully',
          type: 'success',
          autoClose: true
        })
      })
      .catch((error) => {
        setAlert({
          active: true,
          message: `Product could not be added. Error: ${error.message}`,
          type: 'error',
          autoClose: false,
        })
      })
  }

  return (
    <>
      <Alert alert={alert} handleClose={toggleAlert} />
      <div className="lg:flex lg:items-center lg:justify-between mb-6">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">List of Products</h2>
        </div>
        <div className="mt-5 flex lg:ml-4 lg:mt-0">
          <span className="hidden sm:block">
     
          </span>

          <span className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => setOpen(true)}
            >
              <SquaresPlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
              Add Product
            </button>
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <Paginate totalItems={totalProducts} itemsPerPage={PRODUCT_LIMIT} setOffset={setOffsetProducts} neighbours={3} />
              <table className="min-w-full divide-y divide-gray-200 bg-gray-800">
                <thead className="">
                  <tr className="bg-gray-900">
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      ID
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {products?.map((product) => (
                    <tr key={`Product-item-${product.id}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={product.images[0]} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-white">{product.title}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-white">{product.category.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">${product.price}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{product.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link href={`edit/${product.id}`} className=''>
                          <PencilIcon className="h-5 w-5 text-gray-400 hover:text-gray-500" aria-hidden="true" />
                        </Link>
                        
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-red-600 hover:text-red-700">
                          <TrashIcon className='w-5 h-5 text-red-600 hover:text-red-700' onClick={() => handleDelete(product.id)}/>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen}>
        <FormProduct setOpen={setOpen} setAlert={setAlert} />
      </Modal>
    </>
  );
}
