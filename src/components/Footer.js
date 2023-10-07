import { EnvelopeIcon } from "@heroicons/react/20/solid";

export default function Footer() {
    return (
        // <footer className="text-center relative z-20 flex justify-center items-center h-16 mt-28 bg-gray-800 w-full text-center left-0 bottom-0">
        //     <p className="">        
        //     Made with 💙 by <a href="https://github.com/carlitoxe" className="hover:text-blue-700 text-blue-500" target="_blank" rel="noreferrer">carlitoxe</a>
        //     </p>   
        // </footer>

<footer class="bg-white dark:bg-gray-900 relative mt-28 px-8">
    <div class="mx-auto w-full max-w-screen-xl">
 
    <div class="px-4 py-6 text-center md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 Made by <a href="https://github.com/carlitoxe" className="text-blue-500 hover:text-blue-300" target="_blank">carlitoxe</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-5 justify-center sm:justify-center md:mt-0">
              <a href="https://github.com/carlitoxe" target="_blank" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub account</span>
              </a>
              <a href="https://twitter.com/carlitoxee" target="_blank" class="text-gray-400 dark:hover:text-white">
              <svg class="w-5 h-5 dark:text-gray-400 hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path fill="currentColor" d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"/>
  </svg>
  
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="mailto:cerc-12@hotmail.com" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <EnvelopeIcon className="h-5 w-5" />
                  <span class="sr-only">E-mail</span>
              </a>
        </div>
      </div>
    </div>
</footer>

    )
}