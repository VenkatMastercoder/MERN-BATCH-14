import "flowbite";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../../hooks/useOnlineStatus";
import { useContext } from "react";
import useCart from "../../hooks/useCart";
import UserStore from "../../store/UserStore";

const Header = () => {
  const data = UseOnlineStatus();

  const user_data = useContext(UserStore);

  const { cart, clearCartItem } = useCart();

  // Calculate cart total
  const cartTotal = cart.reduce((total, item) => total + (item.price * (item.Quantity || 1)), 0);

  return (
    <nav className="antialiased bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-4 mx-auto 2xl:px-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="shrink-0">
              <Link to="/" title="" className="">
                <img
                  className="block w-auto h-8 dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg"
                  alt=""
                />
                <img
                  className="hidden w-auto h-8 dark:block"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg"
                  alt=""
                />
              </Link>
            </div>
            <ul className="items-center justify-start hidden gap-6 py-3 lg:flex md:gap-8 sm:justify-center">
              <li>
                <Link
                  to="/"
                  title=""
                  className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                  Home
                </Link>
              </li>
              <li className="shrink-0">
                <Link
                  to="/products"
                  title=""
                  className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                  Products{" "}
                </Link>
              </li>
              <li className="shrink-0">
                <Link
                  to="/cart"
                  title=""
                  className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                  Cart{" "}
                </Link>
              </li>
              <li className="shrink-0">
                <Link
                  to=""
                  title=""
                  className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                  {data ? "🟢" : "🔴"}
                </Link>
              </li>
              <li className="shrink-0">
                <Link
                  to=""
                  title=""
                  className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
                  {user_data.name}
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center lg:space-x-2">
            <button
              id="myCartDropdownButton1"
              data-dropdown-toggle="myCartDropdown1"
              type="button"
              className="relative inline-flex items-center justify-center p-2 text-sm font-medium leading-none text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
              <span className="sr-only">Cart</span>
              {cart.length > 0 && (
                <span className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white rounded-full -top-2 -right-2 bg-primary-700">
                  {cart.length}
                </span>
              )}
              <svg
                className="w-5 h-5 lg:me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                />
              </svg>
              <span className="hidden sm:flex">My Cart</span>
              <svg
                className="hidden w-4 h-4 text-gray-900 sm:flex dark:text-white ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id="myCartDropdown1"
              className="z-10 hidden max-w-sm p-4 mx-auto space-y-4 overflow-hidden antialiased bg-white rounded-lg shadow-lg dark:bg-gray-800">
              {cart.length === 0 ? (
                <p className="text-sm text-center text-gray-500 dark:text-gray-400">Your cart is empty</p>
              ) : (
                <>
                  {cart.map((item) => (
                    <div key={item.id} className="grid grid-cols-2">
                      <div>
                        <Link
                          to={`/products/${item.id}`}
                          className="text-sm font-semibold leading-none text-gray-900 truncate dark:text-white hover:underline">
                          {item.title}
                        </Link>
                        <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                          ${item.price}
                        </p>
                      </div>
                      <div className="flex items-center justify-end gap-6">
                        <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                          Qty: {item.quantity || 1}
                        </p>
                        <button
                          onClick={() => clearCartItem(item.id)}
                          type="button"
                          className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                          <span className="sr-only">Remove</span>
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              fillRule="evenodd"
                              d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-3 mt-3 border-t border-gray-200 dark:border-gray-600">
                    <div className="flex justify-between mb-3">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">Total:</span>
                      <span className="text-sm font-bold text-gray-900 dark:text-white">${cartTotal.toFixed(2)}</span>
                    </div>
                    <Link
                      to="/cart"
                      className="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      role="button">
                      Proceed to Checkout
                    </Link>
                  </div>
                </>
              )}
            </div>
            <button
              id="userDropdownButton1"
              data-dropdown-toggle="userDropdown1"
              type="button"
              className="inline-flex items-center justify-center p-2 text-sm font-medium leading-none text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
              <svg
                className="w-5 h-5 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeWidth={2}
                  d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              Account
              <svg
                className="w-4 h-4 text-gray-900 dark:text-white ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id="userDropdown1"
              className="z-10 hidden w-56 overflow-hidden overflow-y-auto antialiased bg-white divide-y divide-gray-100 rounded-lg shadow dark:divide-gray-600 dark:bg-gray-700">
              <ul className="p-2 text-sm font-medium text-gray-900 text-start dark:text-white">
                <li>
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center w-full gap-2 px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-600">
                    {" "}
                    My Account{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center w-full gap-2 px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-600">
                    {" "}
                    My Orders{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center w-full gap-2 px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-600">
                    {" "}
                    Settings{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center w-full gap-2 px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-600">
                    {" "}
                    Favourites{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center w-full gap-2 px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-600">
                    {" "}
                    Delivery Addresses{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center w-full gap-2 px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-600">
                    {" "}
                    Billing Data{" "}
                  </a>
                </li>
              </ul>
              <div className="p-2 text-sm font-medium text-gray-900 dark:text-white">
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center w-full gap-2 px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-600">
                  {" "}
                  Sign Out{" "}
                </a>
              </div>
            </div>
            <button
              type="button"
              data-collapse-toggle="ecommerce-navbar-menu-1"
              aria-controls="ecommerce-navbar-menu-1"
              aria-expanded="false"
              className="inline-flex items-center justify-center p-2 text-gray-900 rounded-md lg:hidden hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
              <span className="sr-only">Open Menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="ecommerce-navbar-menu-1"
          className="hidden px-4 py-3 mt-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <ul className="space-y-3 text-sm font-medium text-gray-900 dark:text-white">
            <li>
              <a
                href="#"
                className="hover:text-primary-700 dark:hover:text-primary-500">
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-700 dark:hover:text-primary-500">
                Best Sellers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-700 dark:hover:text-primary-500">
                Gift Ideas
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-700 dark:hover:text-primary-500">
                Games
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-700 dark:hover:text-primary-500">
                Electronics
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-primary-700 dark:hover:text-primary-500">
                Home &amp; Garden
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
