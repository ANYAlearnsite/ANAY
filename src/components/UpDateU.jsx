import React, { useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import NavBar from './NavBar'
import Fotter from './Fotter'
const UpDateU = () => {
    const [newname, setNewname] = useState('')
    const [newpwd, setNewpwd] = useState('')
    const { id } = useParams()

    const update = () => {
        axios.put(`http://localhost:3600/put/${id}`, { newname, newpwd })
            .then(() => {
                console.log('updated')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
              <NavBar/>
              <div className='flex items-center justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-50'>
                <div class=" w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div class="space-y-6" action="#">
            <h1 className="text-3xl font-bold mt-8 mb-4">Update User Information</h1>
            <div className="flex flex-col">
     <div>
     <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
      <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
       type='text'
       placeholder='Name'
       onChange={(event) => { setNewname(event.target.value) }}  />
       </div>
<div>
<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
      <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
     type='password'
     placeholder='••••••••'
     onChange={(event) => { setNewpwd(event.target.value) }}
                />
 </div>
     <Link to="/User">  <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm px-5 py-2.5 text-center"
         onClick={update}  > Confirme </button></Link>
  </div>
 </div> 
 </div>
 </div>
 <Fotter/>
        </div>
      
    )
}

export default UpDateU

