import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import NavBaruser from "./NavBaruser";

const Updatelesson = () => {
  const [newurl, setnewurl] = useState("");
  const { id } = useParams();
const updateeee=()=>{
    axios.put(`http://localhost:3600/admin/updatelesson/${id}`,{urlvid:newurl}).then(()=>{
        console.log("url updated");
    }).catch((err)=>{
        console.log(err);
    })
}

  return (
    <div>
      <NavBaruser/>
      <div className="flex h-screen">
      <div className="bg-blue-100 w-64 py-4 px-6">
        <ul className="sidebar-nav">
        <Link to="/admin"><li className="text-gray-800 font-semibold mb-4">Dashboard</li></Link>          <li>
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

      <div className="flex-1 p-8">
        <div className="flex justify-center mb-8">
          <div className="flex">
            <input
              type="text"
              placeholder="New URL Lesson"
              value={newurl}
              onChange={(e) => setnewurl(e.target.value)}
              className="border rounded-md py-2 px-4 mr-4"
            />
            <Link to="/lessonslist"><button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            onClick={()=>{
                updateeee()
                console.log("aa");
            }}>
              Update
            </button></Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Updatelesson;