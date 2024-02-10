import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import NavBar from "./NavBar";
import Fotter from "./Fotter";
const UpDateU = () => {
  const token = localStorage.getItem("token");
  const [newname, setNewname] = useState("");
  const [newpwd, setNewpwd] = useState("");
  const dectoken = jwtDecode(token);
  const navigate = useNavigate();

    console.log(dectoken.user[0].iduser);

  // in the delete  you need to pass 
  //the req.body as the second arg and in the 
  //put you need to pass it in the third param 
  
  const update = () => {
    axios.put(
        `http://localhost:3600/user/put/${dectoken.user[0].iduser}`,{ name: newname, pwd: newpwd },{
            headers:{
                Autho : token
            }
        })
      .then(() => {
        navigate("/user");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <NavBar />
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-50">
        <div class=" w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="space-y-6" action="#">
            <h1 className="text-3xl font-bold mt-8 mb-4">
              Update User Information
            </h1>
            <div className="flex flex-col">
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  type="text"
                  placeholder="Name"
                  onChange={(event) => {
                    setNewname(event.target.value);
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  type="password"
                  placeholder="••••••••"
                  onChange={(event) => {
                    setNewpwd(event.target.value);
                  }}
                />
              </div>
              <Link to="/User">
                {" "}
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white  text-center"
                  onClick={update}
                >
                  {" "}
                  Confirme{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Fotter />
    </div>
  );
};

export default UpDateU;
