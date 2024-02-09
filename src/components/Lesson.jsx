// Lesson.jsx
import React from 'react';

const Lesson = () => {
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!">
          <video width="320" height="240" controls className="w-full rounded-t-lg">
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">Video Card</h5>
          <p className="text-gray-700 text-base mb-4">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
