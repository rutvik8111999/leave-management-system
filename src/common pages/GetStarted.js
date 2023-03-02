import React from "react";

import { motion, useScroll } from "framer-motion";
function GetStarted() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <motion.div className="flex w-full flex-col items-center justify-center rounded-lg  p-8">
        <div className="mt-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 5 }}
            className="text-4xl font-bold"
          >
            Welcome To
            <span className="text-blue-600"> Leave Management System</span>
          </motion.h1>
          <p className="mx-auto mt-4 lg:w-1/2 text-gray-500">
            A leave management system is a software application used by
            organizations to manage employee leave requests and absences.
          </p>
        </div>
        <div>
          {/* <label
            htmlFor="orgination"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Name Of Orgination
          </label> */}
          <select
            // value="user.role"
            className="mt-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            <option value="user">Softcoding solutions</option>
            <option value="admin">Print Revolution</option>
            <option value="admin">Ecommerce Company</option>
            <option value="admin">Product Company</option>
          </select>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="mt-8 block rounded-lg border bg-blue-500 py-1.5 px-4 font-medium text-white transition-colors disabled:opacity-50"
        >
          Get started
        </motion.button>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 5 }}
        className="mt-3 text-4xl font-bold text-center text-gray-800 mb-4"
      >
        Features Of
        <span className="text-blue-600"> Leave Management System</span>
      </motion.h1>
      <div className="container my-24 px-6 mx-auto">
        {/* <!-- Section: Design Block --> */}

        <section className="mb-32 text-gray-800 text-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-0 items-center">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="mb-12 lg:mb-0 relative"
            >
              <svg
                className="w-12 h-12 text-blue-600 mx-auto mb-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M208 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM123.7 200.5c1-.4 1.9-.8 2.9-1.2l-16.9 63.5c-5.6 21.1-.1 43.6 14.7 59.7l70.7 77.1 22 88.1c4.3 17.1 21.7 27.6 38.8 23.3s27.6-21.7 23.3-38.8l-23-92.1c-1.9-7.8-5.8-14.9-11.2-20.8l-49.5-54 19.3-65.5 9.6 23c4.4 10.6 12.5 19.3 22.8 24.5l26.7 13.3c15.8 7.9 35 1.5 42.9-14.3s1.5-35-14.3-42.9L281 232.7l-15.3-36.8C248.5 154.8 208.3 128 163.7 128c-22.8 0-45.3 4.8-66.1 14l-8 3.5c-32.9 14.6-58.1 42.4-69.4 76.5l-2.6 7.8c-5.6 16.8 3.5 34.9 20.2 40.5s34.9-3.5 40.5-20.2l2.6-7.8c5.7-17.1 18.3-30.9 34.7-38.2l8-3.5zm-30 135.1L68.7 398 9.4 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L116.3 441c4.6-4.6 8.2-10.1 10.6-16.1l14.5-36.2-40.7-44.4c-2.5-2.7-4.8-5.6-7-8.6zM550.6 153.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L530.7 224H384c-17.7 0-32 14.3-32 32s14.3 32 32 32H530.7l-25.4 25.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l80-80c12.5-12.5 12.5-32.8 0-45.3l-80-80z"
                />
              </svg>

              {/* <h5 className="text-lg  text-blue-600 font-bold mb-4">5000+</h5> */}
              <h6 className="font-medium text-gray-500">
                Electronic leave requests
              </h6>
              <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="mb-12 lg:mb-0 relative"
            >
              <svg
                className="w-12 h-12 text-blue-600 mx-auto mb-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z"
                />
              </svg>
              {/* <h5 className="text-lg  text-blue-600 font-bold mb-4">490+</h5> */}
              <h6 className="font-medium text-gray-500">Leave tracking</h6>
              <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="mb-12 md:mb-0 relative"
            >
              <svg
                className="w-12 h-12 text-blue-600 mx-auto mb-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                />
              </svg>
              {/* <h5 className="text-lg  text-blue-600 font-bold mb-4">100+</h5> */}
              <h6 className="font-medium text-gray-500">Calendar views</h6>
              <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <svg
                className="w-12 h-12 text-blue-600 mx-auto mb-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"
                />
              </svg>
              {/* <h5 className="text-lg  text-blue-600 font-bold mb-4">28</h5> */}
              <h6 className="font-medium text-gray-500 mb-0">Reporting</h6>
            </motion.div>
          </div>
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
      <div className="container my-24 px-6 mx-auto">
        {/* <!-- Section: Design Block --> */}
        <section className="mb-32 text-gray-800 text-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-0 items-center">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="mb-12 lg:mb-0 relative"
            >
              <svg
                className="w-12 h-12 text-blue-600 mx-auto mb-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"
                />
              </svg>
              {/* <h5 className="text-lg  text-blue-600 font-bold mb-4">5000+</h5> */}
              <h6 className="font-medium text-gray-500">Approval workflows</h6>
              <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="mb-12 lg:mb-0 relative"
            >
              <svg
                className="w-12 h-12 text-blue-600 mx-auto mb-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224 256A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 36-146.9c2-8.1 9.8-13.4 17.9-11.3c70.1 17.6 121.9 81 121.9 156.4c0 17-13.8 30.7-30.7 30.7H285.5c-2.1 0-4-.4-5.8-1.1l.3 1.1H168l.3-1.1c-1.8 .7-3.8 1.1-5.8 1.1H30.7C13.8 512 0 498.2 0 481.3c0-75.5 51.9-138.9 121.9-156.4c8.1-2 15.9 3.3 17.9 11.3l36 146.9 33.4-123.9z"
                />
              </svg>
              {/* <h5 className="text-lg  text-blue-600 font-bold mb-4">490+</h5> */}
              <h6 className="font-medium text-gray-500">
                Improve Employee Satisfaction
              </h6>
              <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="mb-12 md:mb-0 relative"
            >
              <svg
                className="w-12 h-12 text-blue-600 mx-auto mb-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M80 104c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zm32.4 49.2c28-12.4 47.6-40.5 47.6-73.2c0-44.2-35.8-80-80-80S0 35.8 0 80c0 32.8 19.7 61 48 73.3V358.7C19.7 371 0 399.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3V272c26.7 20.1 60 32 96 32h86.7c12.3 28.3 40.5 48 73.3 48c44.2 0 80-35.8 80-80s-35.8-80-80-80c-32.8 0-61 19.7-73.3 48H208c-49.9 0-91-38.1-95.6-86.8zM80 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zM392 272c0 13.3-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24z"
                />
              </svg>
              {/* <h5 className="text-lg  text-blue-600 font-bold mb-4">100+</h5> */}
              <h6 className="font-medium text-gray-500">
                Integration with other systems
              </h6>
              <hr className="absolute right-0 top-0 w-px bg-gray-200 h-full hidden lg:block" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <svg
                className="w-12 h-12 text-blue-600 mx-auto mb-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                />
              </svg>
              {/* <h5 className="text-lg  text-blue-600 font-bold mb-4">28</h5> */}
              <h6 className="font-medium text-gray-500 mb-0">Mobile access</h6>
            </motion.div>
          </div>
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
      <motion.h1
        style={{ opacity: scrollYProgress }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 5 }}
        className="text-4xl font-bold text-center text-gray-800 mb-4"
      >
        Introduction Of
        <span className="text-blue-600"> Leave Management System</span>
      </motion.h1>
      {/* <!-- Container for demo purpose --> */}
      <motion.div
        style={{ opacity: scrollYProgress }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="container my-24 px-6 mx-auto"
      >
        {/* <!-- Section: Design Block --> */}
        <section className="mb-32 text-gray-800">
          <div className="flex flex-wrap items-center">
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-4/12 mb-6 md:mb-0 px-3">
              <h2 className="text-3xl font-bold mb-6">
                Why is it so<u className="text-blue-600"> great?</u>
              </h2>

              <p className="text-gray-500 mb-12">
                A leave management system is a software application used by
                organizations to manage employee leave requests and absences.
                The system streamlines the process of requesting, approving, and
                tracking employee leaves, reducing the administrative burden on
                HR staff and providing employees with an easy way to request
                time off.
              </p>
            </div>

            <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 mb-6 mb-md-0 px-3">
              <div className="flex flex-wrap">
                <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12">
                  <div className="flex">
                    <div className="shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                        ></path>
                      </svg>
                    </div>
                    <div className="grow ml-4">
                      <p className="font-bold mb-1">
                        Electronic leave requests
                      </p>
                      <p className="text-gray-500">
                        Employees can submit leave requests electronically
                        through the system, eliminating the need for paper-based
                        forms and manual processing.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12">
                  <div className="flex">
                    <div className="shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                        ></path>
                      </svg>
                    </div>
                    <div className="grow ml-4">
                      <p className="font-bold mb-1">Approval workflows</p>
                      <p className="text-gray-500">
                        The system allows managers to review and approve or deny
                        leave requests based on company policies and leave
                        availability.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12">
                  <div className="flex">
                    <div className="shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                        ></path>
                      </svg>
                    </div>
                    <div className="grow ml-4">
                      <p className="font-bold mb-1">Leave tracking</p>
                      <p className="text-gray-500">
                        The system maintains a record of employee leave
                        balances, accruals, and usage, allowing managers to
                        track employee absences and ensure compliance with labor
                        laws and company policies.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12">
                  <div className="flex">
                    <div className="shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                        ></path>
                      </svg>
                    </div>
                    <div className="grow ml-4">
                      <p className="font-bold mb-1">Calendar views</p>
                      <p className="text-gray-500">
                        The system provides a visual calendar view of employee
                        leave schedules, making it easier for managers to plan
                        for employee absences and ensure adequate staffing
                        levels.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12">
                  <div className="flex">
                    <div className="shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                        ></path>
                      </svg>
                    </div>
                    <div className="grow ml-4">
                      <p className="font-bold mb-1">Reporting</p>
                      <p className="text-gray-500">
                        The system generates reports on employee leave usage,
                        balances, and trends, providing HR staff and managers
                        with valuable insights into workforce planning and
                        employee engagement.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12">
                  <div className="flex">
                    <div className="shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                        ></path>
                      </svg>
                    </div>
                    <div className="grow ml-4">
                      <p className="font-bold mb-1">
                        Integration with other systems
                      </p>
                      <p className="text-gray-500">
                        The system can be integrated with other HR systems, such
                        as payroll and time and attendance systems, to provide a
                        comprehensive view of employee data and streamline HR
                        processes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12">
                  <div className="flex">
                    <div className="shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                        ></path>
                      </svg>
                    </div>
                    <div className="grow ml-4">
                      <p className="font-bold mb-1">Mobile access</p>
                      <p className="text-gray-500">
                        Some leave management systems offer mobile apps,
                        allowing employees to submit leave requests and view
                        their leave balances on-the-go.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12">
                  <div className="flex">
                    <div className="shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                        ></path>
                      </svg>
                    </div>
                    <div className="grow ml-4">
                      <p className="font-bold mb-1">
                        Improve Employee Satisfaction
                      </p>
                      <p className="text-gray-500">
                        Makes the work of the employee easy so that employees
                        have a healthy work-life balance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Section: Design Block --> */}
      </motion.div>
      {/* <!-- Container for demo purpose --> */}
    </motion.div>
  );
}

export default GetStarted;
