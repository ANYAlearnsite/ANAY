import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import SearchLesson from './SearchLesson'; // Import the SearchLesson component

const AllLessons = () => {
  const [lessons, setLessons] = useState([]);
  const [refresh, setRefresh] = useState(false)
  const [lessonId, setLessonId] = useState("")

  useEffect(() => {
    axios.get('http://localhost:3600/getAll')
      .then((res) => {
        setLessons(res.data)
      })
      .catch((err) => { console.log(err) })
  }, [refresh]);

  const sear=(v)=>{
    setLessons(v[0])
  }
  const addFavorite = (obj) => {
    axios.post('http://localhost:3600/add', obj)
      .then(() => {
        console.log('add fav')
        setRefresh(!refresh)
      })
      .catch((error) => console.log(error))
  }

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-50 min-h-screen">
      <NavBar />
 <div className="container mx-auto">
 <h1 className="text-3xl font-bold text-center text-indigo-600 bg-white bg-opacity-75 rounded-lg p-4 mt-8 mb-4">All Lessons</h1>
 <Link to="/favoritList">
 <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">Favorite</button>
  </Link>
     <SearchLesson sear={sear} /> 
    </div>
 <div className='flex items-center justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-50'>
 <div className="container mx-auto">
     <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {lessons.map((e) => (
    <div  className="bg-gray-100 p-4 rounded-md">
     <p className="font-semibold">Lesson ID:{e.idlessons}</p>
     <p>Category: {e.category}</p>
     <video src={e.urlvid} controls width="300" height="200"></video>
   <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2" onClick={() => {
      const obj = { user: 2,
                lesson: e.idlessons }
         addFavorite(obj)}}>⭐️ Add to Favorite</button>
     </div>
     ))}
     </nav>
  </div>
     </div>
    </div>
  )
}

export default AllLessons;
