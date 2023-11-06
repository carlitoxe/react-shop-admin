/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from '@hooks/useAuth';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, Bars3Icon, XMarkIcon, BuildingStorefrontIcon, UserIcon, ArrowRightOnRectangleIcon, UserCircleIcon } from '@heroicons/react/24/solid';
// import { ,  } from '@heroicons/react/20/solid';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Products', href: '/dashboard/products' },
  { name: 'Sales', href: '/sales' },
];
const userNavigation = [
  // { name: 'Your Profile', href: '#' },
  // { name: 'Settings', href: '#' },
  { name: 'Sign out' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const { user, logOut } = useAuth();
  const { pathname } = useRouter();

  const userData = {
    name: user?.name,
    email: user?.email,
    imageUrl: `https://ui-avatars.com/api/?name=${user?.name}`,
  };

  return (
    <>
      <Disclosure as="nav" className="bg-gray-800 relative z-20">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16 px-1">
                <div className="flex items-center">
                  {/* <div className="flex-shrink-0">
                    <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                  </div> */}
                  <BuildingStorefrontIcon className="w-7 h-7" />
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline text-base space-x-4">
                      {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md font-medium')}
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  {user?.name != undefined ? (
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* <button
                        type="button"
                        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button> */}

                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={userData.imageUrl} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="flex bg-gray-900 justify-center origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <button onClick={logOut} className="block text-gray-400 flex items-center justify-center px-4 py-2 hover:text-white font-medium">
                              <ArrowRightOnRectangleIcon className="w-6 h-6 mr-1" />
                              Sign out
                            </button>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  ) : (
                    <button className="bg-indigo-600 rounded-lg bg-indigo-700 py-1 px-4 hover:bg-indigo-800 group">
                      <Link href="/login" className="flex items-center mr-1">
                        <UserIcon className="w-6 h-6 mr-1 text-indigo-300 group-hover:text-white" />
                        <p className="text-sm font-medium">Sign In</p>
                      </Link>
                    </button>
                  )}
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium')}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  );
                })}
              </div>
              <div className="py-3 px-2 border-t border-gray-700 sm:px-3">
                {user?.name != undefined ? (
                  <div className="flex items-center px-5 justify-center">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={userData.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{userData.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{userData.email}</div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                    </button>
                    <div className="px-2 space-y-1">
                      {userNavigation.map((item) => (
                        <Disclosure.Button key={item.name} as="a" href={logOut} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </div>
                ) : (
                  // <div className="space-y-1">
                    <Disclosure.Button as="a" href='/login' className="block text-gray-300 font-medium px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-700 group">
                      Sign in
                    </Disclosure.Button>
                  // </div>
                )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
