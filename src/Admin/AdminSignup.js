import React from "react";
import { motion } from "framer-motion";
function AdminSignup() {
  return (
    <div>
      <section className="text-gray-600 w-full h-screen body-font opacity-75 bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1605256585681-455837661b18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]">
        <div className="container px-10 py-2 flex flex-wrap h-2/4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="bg-gray-100 rounded-lg py-2 px-8 flex flex-col md:mx-auto"
          >
            <motion.h2
              animate={{ color: "#3b82f6", y: 10 }}
              transition={{ duration: 2 }}
              className="text-gray-900 text-lg font-medium title-font mb-4"
            >
              Company Registration
            </motion.h2>
            <motion.div className="relative mb-2">
              <motion.label
                htmlFor="orginationName"
                className="leading-7 text-sm text-gray-600"
              >
                Orginization Name
              </motion.label>
              <motion.input
                type="text"
                id="orginationName"
                name="orginationName"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </motion.div>

            <motion.div className="relative mb-2">
              <motion.label
                htmlFor="orginationEmail"
                className="leading-7 text-sm text-gray-600"
              >
                Orginization Email
              </motion.label>
              <motion.input
                type="orginationEmail"
                id="orginationEmail"
                name="orginationEmail"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </motion.div>

            <motion.div className="relative mb-2">
              <motion.label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Admin Email
              </motion.label>
              <motion.input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </motion.div>
            <motion.div className="relative mb-2">
              <motion.label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Orginization Contact Number
              </motion.label>
              <motion.input
                type="number"
                id="number"
                name="number"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </motion.div>
            <motion.div className="flex flex-wrap -mx-3 mb-2">
              <motion.div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <motion.label
                  className="leading-7 text-sm text-gray-600"
                  htmlFor="grid-city"
                >
                  City
                </motion.label>
                <motion.input
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  id="grid-city"
                  type="text"
                  placeholder="Albuquerque"
                />
              </motion.div>
              <motion.div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <motion.label
                  className="leading-7 text-sm text-gray-600"
                  htmlFor="grid-zip"
                >
                  Country
                </motion.label>
                {/* </select> */}
                <motion.input
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  id="grid-zip"
                  type="text"
                  placeholder="90210"
                />
              </motion.div>
              <motion.div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <motion.label
                  className="leading-7 text-sm text-gray-600"
                  htmlFor="grid-zip"
                >
                  State
                </motion.label>

                <motion.input
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  id="grid-zip"
                  type="text"
                  placeholder="90210"
                />
              </motion.div>
            </motion.div>
            <motion.div className="relative mb-4">
              <motion.label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </motion.label>
              <motion.input
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </motion.div>

            <motion.div className="relative mb-4">
              <motion.label
                className="leading-7 text-sm text-gray-600"
                htmlFor="file_input"
              >
                Upload Logo
              </motion.label>
              <motion.input
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                id="file_input"
                type="file"
              />
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Button
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AdminSignup;
