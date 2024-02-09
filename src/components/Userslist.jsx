import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBaruser from "./NavBaruser";
const Users = () => {
  const [datausers, setdatausers] = useState([]);
  const [refresh, setrefresh] = useState(false);
  const [name, setname] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3600/admin/allusers")
      .then((results) => {
        console.log('data fetched');
        setdatausers(results.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);

  const handleDelete = (user) => {
    setUserToDelete(user);
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    if (userToDelete) {
      axios.delete(`http://localhost:3600/admin/delet/${userToDelete.iduser}`)
        .then(() => {
          console.log("User deleted");
          setrefresh(!refresh);
          setShowDeleteConfirmation(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
   <div>
     <NavBaruser/>
    <div className="flex h-screen">
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

      <div className="flex-1 overflow-y-auto p-8">
        <div className="flex justify-center mb-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search by name"
              onChange={(e) => setname(e.target.value)}
              className="border rounded-md py-2 px-4 mr-2"
            />
            <Link to={`/searchforuser/${name}`}><button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Search
            </button></Link>
          </div>
        </div>
        <div className="flex flex-wrap">
          {datausers.map((user) => (
            <div key={user.iduser} className="bg-white rounded-md shadow-md p-4 mb-4 mr-4">
              <div className="mb-2">
                <span className="font-semibold">ID:</span> {user.iduser}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Name:</span> {user.name}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Role:</span> {user.role}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Email:</span> {user.email}
              </div>
              <div className="flex justify-between">
                <button 
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => handleDelete(user)}
                >
                  Delete
                </button>
                <Link to={`/update/${user.iduser}`}>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Update
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showDeleteConfirmation && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow-md">
            <p className="mb-4">Are you sure you want to delete this user?</p>
            <div className="flex justify-center">
              <button 
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-2"
                onClick={confirmDelete}
              >
                Yes
              </button>
              <button 
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                onClick={() => setShowDeleteConfirmation(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
   </div>
  );
};

export default Users;