import React from "react";
import { useNavigate } from "react-router-dom";
import englishf from "../../images/flags/ef.jpg";
import frenshf from "../../images/flags/ff.jpg";
import germanyf from "../../images/flags/gerf.webp";
import russianf from "../../images/flags/rf.jpg";
import Fotter from "../Fotter";
import { Link } from "react-router-dom";

const LessonsfUser = () => {
  const lan = {
    fr: "frensh",
    all: "allmend",
    ru: "russia",
    en: "english",
  };

  const navigate = useNavigate();

  const handleGoToLesson = () => {
    navigate("/lesson");
  };

  return (
    <>
      <div className="bg-gradient-to-r from-cyan-400 to-sky-800 min-h-screen flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Lessons Zone!</h1>
          <p className="text-lg mb-8">Improve your knowledge and have fun with our lessons.</p>
        </div>
        <div className="text-center w-64 m-4 rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src={englishf}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">English Land</div>
                <Link to={`/lesson/${lan.en}`}> 
                  <button className="bg-sky-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Go to lesson 
                  </button>
                </Link>
              </div>
            </div>

            <div className="text-center w-64 m-4 rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src={frenshf}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Frensh Land</div>
               <Link to={`/lesoon/${lan.fr}`}>
               <button className="bg-sky-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Go to lesson 
                </button>
               </Link>
              </div>
            </div>
            <div className="text-center w-64 m-4 rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src={germanyf}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Germanny Land</div>
               <Link to={`/lesson/${lan.all}`}>
               <button className="bg-sky-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Go to lesson
                </button>
               </Link>
              </div>
            </div>

            <div className="text-center w-64 m-4 rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src={russianf}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Russain Land</div>
               <Link to={`/test/${lan.ru}`}>
               <button className="bg-sky-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Go to lesson
                </button>
               </Link>
              </div>
            </div>
        
      </div>

      <Fotter />
    </>
  );
};

// Helper function to get image path based on language
const getImagePath = (language) => {
  switch (language) {
    case "frensh":
      return frenshf;
    case "allmend":
      return germanyf;
    case "russia":
      return russianf;
    case "english":
    default:
      return englishf;
  }
};

// Helper function to capitalize the first letter of a string
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default LessonsfUser;
