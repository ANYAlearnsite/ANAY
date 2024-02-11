import React from 'react';

const Lesson = ({ lessondata }) => {
  // Check if lessondata is an array
  if (!Array.isArray(lessondata)) {
    // Handle the case where lessondata is not an array
    return <p>Lesson data is not available or not in the expected format.</p>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center flex-wrap gap-6">
        {lessondata.map((e, i) => (
          <div key={i} className="max-w-md w-full rounded-lg overflow-hidden shadow-md bg-white">
            <a href="#!">
              <video width="100%" height="auto" controls className="rounded-t-lg">
              <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4https://www.youtube.com/watch?v=cExLQ1o2pDw" type="video/mp4"/>
             
                Your browser does not support the video tag.
              </video>
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">Video Card</h5>
              <p className="text-gray-700 text-base mb-4">
                have fun with learnning 
              </p>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lesson;

