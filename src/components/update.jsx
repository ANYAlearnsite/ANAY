import axios from "axios";
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import NavBaruser from "./NavBaruser";
const UpdateRole = () => {
  const [newrole, setnewrole] = useState("");
  const { id } = useParams();

  const updatedd = () => {
    axios.put(`http://localhost:3600/admin/update/${id}`, { role: newrole })
      .then(() => {
        console.log("updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
   <div>
    <NavBaruser/>
     <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-blue-100 w-64 py-4 px-6">
        <ul className="sidebar-nav">
        <Link to="/"><li className="text-gray-800 font-semibold mb-4">Dashboard</li></Link>
          <li>
            <Link to="/userslist" className="text-gray-800 hover:text-blue-500">
              Users
            </Link>
          </li>
          <li>
            <Link to="/lessonslist" className="text-gray-800 hover:text-blue-500">
              Lessons
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold mb-4">Change Role</h1>
          <input
            type="text"
            placeholder="New Role"
            className="border rounded-md py-2 px-4 mb-4"
            onChange={(e) => {
              setnewrole(e.target.value);
            }}
          />
          <Link to="/userslist">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              onClick={() => {
                updatedd();
              }}
            >
              Update Role
            </button>
          </Link>
        </div>
      </div>
    </div>
   </div>
  );
};

export default UpdateRole;