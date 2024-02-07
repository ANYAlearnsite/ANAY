import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Fotter from "./Fotter.jsx";

const Submituser = () => {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const obj = { email: email, name: name, pwd: pwd, role: role };

  const loging = async () => {
    try {
      console.log(obj);
      const response = await axios.post(`http://localhost:3600/create`, obj);
      if (response.status === 200) {
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-50">
          <div class=" w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="space-y-6" action="#">
              <h5 class="text-xl font-medium text-gray-900 dark:text-white">
                Sign in to our platfrom
              </h5>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@email.com"
                  required
                  onChange={(ele) => {
                    setEmail(ele.target.value);
                  }}
                />
              </div>
              <div>
                <label
                  for="text"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your name
                </label>
                <input
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name"
                  required
                  onChange={(ele) => {
                    setName(ele.target.value);
                  }}
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                  onChange={(ele) => {
                    setPwd(ele.target.value);
                  }}
                />
              </div>
              <div class="flex items-start"></div>
              <div class="flex items-start mt-2">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="isAdmin"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      onChange={() => setRole("admin")}
                    />
                  </div>
                  <label
                    for="isAdmin"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {" "}
                    Admin
                  </label>
                </div>
              </div>

              <div class="flex items-start mt-2">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="isUser"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      onChange={() => setRole("user")}
                    />
                  </div>
                  <label
                    for="isUser"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {" "}
                    User
                  </label>
                </div>
              </div>

              <button
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => {
                  loging();
                }}
              >
                Create your account
              </button>
            </div>
          </div>
        </div>
        <Fotter />
      </div>
    </div>
  );
};

export default Submituser;
