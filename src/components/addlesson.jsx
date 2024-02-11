import React, { useState } from "react";
import NavBaruser from "./NavBaruser";
import Fotter from "./Fotter";
import { Link } from "react-router-dom";
import axios from "axios";

const Addlesson = () => {
 
 const [category,setcategory]=useState('')
 const [userid,setuserid]=useState(0)
 const [url,seturl]=useState('')

 const lesson={category:category,user_iduser:userid}
 const link={urlvid:url}
 const addlesson=()=>{
    axios.post("http://localhost:3600/admin/add",{lesson:lesson,link:link}).then(()=>{
        console.log("done");
    }).catch((err)=>{
        console.log(err);
    })
 }
    return (
    <div className="flex flex-col h-screen">
      <NavBaruser />
      <div className="flex-1 flex flex-col justify-center items-center bg-gray-100">
        <div className="container mx-auto">
          <div className="max-w-lg mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
              <input
                type="text"
                placeholder="Lesson link"
                className="border border-gray-300 px-4 py-2 rounded-md mb-2 w-full"
              onChange={(e)=>{
                seturl(e.target.value)
              }}
              />
             
              <input
                type="text"
                placeholder="Lesson Category"
                className="border border-gray-300 px-4 py-2 rounded-md mb-2 w-full"
                onChange={(e)=>{
                    setcategory(e.target.value)
                  }}
              />
              <input
                type="number"
                placeholder="id of the user"
                className="border border-gray-300 px-4 py-2 rounded-md mb-2 w-full"
                onChange={(e)=>{
                    setuserid(e.target.value)
                  }}
              />
              <Link to="/lessonslist">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
              onClick={()=>{
                addlesson()
              }}>
                Add Lesson
              </button></Link>
            </div>
          </div>
        </div>
      </div>
      <Fotter />
    </div>
  );
};

export default Addlesson;
