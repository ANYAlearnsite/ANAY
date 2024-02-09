import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Fotter from './Fotter';
import NavBar from './NavBar';

const FavoritList = () => {
  const { id } = useParams();
  const [lessons, setLessons] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3600/get/fav/${2}`)
      .then((res) => {
        console.log(res.data);
        setLessons(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [refresh])

  const deleteLesson = (idlessons) => {
    axios.delete(`http://localhost:3600/delete/${idlessons}`)
      .then(() => {
        console.log('deleted fav')
        setRefresh(!refresh)
      })
      .catch((err) => console.log(err))
  }
console.log(lessons);
  return (

 <div className="bg-gradient-to-br from-cyan-500 to-blue-50 min-h-screen">
  <NavBar/>
   <div className="container mx-auto px-4 md:px-8">
     <h1 className="text-3xl font-bold text-center text-indigo-600 bg-white bg-opacity-75 rounded-lg p-4 mt-8 mb-4">Favorite Lessons</h1>
  <nav className="bg-gray-200 shadow-md rounded-lg px-4 py-2 md:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
   {lessons.map((e) => (
   <div className="bg-gray-100 p-4 rounded-md">
     <p className="font-semibold">Lesson ID: {e.idlessons}</p>
     <p>Category: {e.category}</p>
     <video src={e.urlvid} controls width="300" height="200"></video>
   <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg mt-2"
      onClick={() => deleteLesson(e.idlessons)}>Delete</button>
    </div>
      ))}
     </div>
       </nav>
      {/* <Fotter/> */}
    </div>
  </div>
  
  
  )
}

export default FavoritList
