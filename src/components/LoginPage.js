import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { LockClosedIcon, ExclamationCircleIcon, BuildingStorefrontIcon } from '@heroicons/react/24/solid';
import { useAuth } from '@hooks/useAuth';

export default function LoginPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const auth = useAuth();
  const [errorLogin, setErrorLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    setErrorLogin(null);
    setLoading(true);
    // console.log(email, password);
    auth
      .signIn(email, password)
      .then(() => {
        router.push('/dashboard')
      })
      .catch((error) => {
        console.log(error);
        if (error.response?.status === 401) {
          setErrorLogin('Incorrect email or password.');
        } else if (error.request) {
          setErrorLogin('We had a problem.');
        } else {
          setErrorLogin('Something went bad.');
        }
        setLoading(false);
      })
      setLoading(false)
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-8 pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            {/* <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" /> */}
            <BuildingStorefrontIcon className='mx-auto text-indigo-500 w-12 h-12 hover:text-indigo-700' />

            <h2 className="mt-6 text-center text-3xl font-extrabold">Sign in to your account</h2>
          </div>
          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            {errorLogin && (
              <div className="flex items-center p-3 mb-2 text-sm text-white bg-red-600 rounded-lg" role="alert">
                <span><ExclamationCircleIcon className='h-6 w-6 mr-2'/></span><span> {errorLogin} </span> 
              </div>
            )}

            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  ref={emailRef}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  ref={passwordRef}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={loading}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  {loading ? (
                    <>
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-300 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-indigo-400"></span>
                    </>
                  ) : (
                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                  )}
                </span>
                {/* {loading && (
  <span className="flex absolute h-4 w-4 top-0 right-0 -mt-1 -mr-1">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-300 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-4 w-4 bg-indigo-400"></span>
  </span>
)} */}
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
