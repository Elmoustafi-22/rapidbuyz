import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/products").then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <header>
        <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                All Products
              </h1>

              <p className="mt-1.5 text-md text-gray-500">
                Create a new product
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <Link
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-teal-200 px-5 py-3 text-teal-600 transition hover:bg-teal-50 hover:text-teal-700 focus:outline-none focus:ring"
                href={"/products/new"}
              >
                <span className="text-sm font-medium"> Create Products </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <hr className="my-1 h-px border-0 bg-gray-300" />

      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-12 lg:px-8">
        {loading ? (
          <p>Loading...</p>
        ) : products.length === 0 ? (
          <p>No products</p>
        ) : (
          <div>
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  ></th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  ></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                {products.map((product, index) => (
                  <tr key={product._id}>
                    <th className="px-6 py-4 font-medium text-gray-900">
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{product.title}</td>
                    <td className="px-6 py-4 truncate max-w-sm">
                      {product.description}
                    </td>
                    <td className="px-6 py-4">{formatPrice(product.price)}</td>
                    <td className="flex justify-end gap-4 px-6 py-4 font-medium">
                      <Link
                        href={`/products/delete/${product._id}`}
                        className="text-gray-100  hover:text-red-500 p-2 border border-1 border-red-600 bg-red-500 rounded-md hover:bg-white"
                      >
                        Delete
                      </Link>
                      <Link
                        href={'/products/edit/' + product._id}
                        className=" text-gray-100 hover:text-teal-500 p-2 border border-1 bg-teal-600 rounded-md border-teal-500 hover:bg-white"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
