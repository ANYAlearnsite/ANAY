// InputCard.jsx
import React, { useState } from 'react';
import axios from 'axios';

const InputCard = ({setPublicId}) => {
  const [image, setImage] = useState(null);
 



  const uplodeimages = () => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'jm66fokf');

    axios
      .post('https://api.cloudinary.com/v1_1/dcoxnxv3r/image/upload', formData)
      .then((res) => {
        console.log(res.data.public_id);
        setPublicId(res.data.public_id)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFileChange = (event) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
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
      className="mt-6 bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-500 hover:text-white transition duration-300">
        Submit
      </button>
    </div>
  );
};

export default InputCard;
