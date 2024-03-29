import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const Updateuser = ({ setPublicId, publicId }) => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const token = localStorage.getItem("token");
  const decToken = jwtDecode(token);

  const uplodeimages = async () => {
    try {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', 'jm66fokf');

      const res = await axios.post('https://api.cloudinary.com/v1_1/dcoxnxv3r/image/upload', formData);

      console.log("this is the url", res.data.secure_url);
      setPublicId(res.data.secure_url);
      localStorage.setItem("publicId", res.data.secure_url);

      await axios.put("http://localhost:3600/user/updateImage", {
        id: decToken.user[0].iduser,
        image: res.data.public_id || res.data.secure_url
      }, {
        headers: {
          Autho: token
        }
      });

      // Redirect to the /user route after successful update
      navigate('/user');

    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
      console.log(setImage, "this is imageeee");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-gradient-to-r from-blue-500 via-light-blue-300 to-violet-500 rounded-md p-6 shadow-md">
      <h2 className="text-2xl font-bold text-white mb-4">User Update</h2>
      <div className="mb-4">
        <label className="block text-white text-sm font-semibold mb-2" htmlFor="username">
          Username
        </label>
        <input
          className="w-full p-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          type="text"
          id="username"
          placeholder="Enter your username"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white text-sm font-semibold mb-2" htmlFor="image">
          Avatar
        </label>
        <div className="flex items-center space-x-2">
          <label className="cursor-pointer bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white transition duration-300">
            Update Image
            <input
              className="hidden"
              type="file"
              id="image"
              onChange={handleFileChange}
            />
          </label>
          {image && <span className="text-gray-300">{image.name}</span>}
        </div>
      </div>
      <button
        onClick={uplodeimages}
        className="mt-6 bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
      >
        Submit
      </button>
    </div>
  );
};

export default Updateuser;
