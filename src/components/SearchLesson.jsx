import React, { useState } from 'react'
import axios from 'axios'

const SearchLesson = (props) => {
  const [lessonId, setLessonId] = useState("")

  const search = (idlessons) => {
    axios.get(`http://localhost:3600/get/${idlessons}`)
      .then((res) => { 
        props.sear(res.data)
        console.log(res.data) })
      .catch((error) => console.log(error))
  }

  return (
    
    <div className="flex justify-end">
    <input
      className="flex font-semibold border border-gray-300 rounded-md px-4 py-2 mr-2"
      type='text'
      placeholder='Enter lesson ID'
      value={lessonId}
      onChange={(e) => setLessonId(e.target.value)}
    />
    <button
      className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2"
      onClick={() => search(lessonId)}
    >
      Search
    </button>
  </div>
  
  );
}

export default SearchLesson
