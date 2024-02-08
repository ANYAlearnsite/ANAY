import React from "react";
import englishf from "../../images/flags/ef.jpg";
import frenshf from "../../images/flags/ff.jpg";
import germanyf from "../../images/flags/gerf.webp";
import russianf from "../../images/flags/rf.jpg";
import NavBaruser from "../NavBaruser";
import Fotter from "../Fotter";
import { Link } from "react-router-dom";
const Test = () => {
  const lan = {
    fr: "frensh",
    all: "allmend",
    ru: "russia",
    en: "english",
  };
  return (
    <>
      <NavBaruser />
      <div className=" bg-gradient-to-r bg-cyan-400">
        <div>
          {" "}
          <h1 className="text-center ">hello </h1>
          <div className="flex justify-center items-center h-screen">
            <div className="text-center w-64 m-4 rounded overflow-hidden shadow-lg">
              <img
                className="w-full"
                src={englishf}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">English Land</div>
                <Link to={`/test/${lan.en}`}>
                  <button className="bg-sky-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Go to test
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
               <Link to={`/test/${lan.fr}`}>
               <button className="bg-sky-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Go to test
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
               <Link to={`/test/${lan.all}`}>
               <button className="bg-sky-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Go to test
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
                  Go to test
                </button>
               </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Fotter />
    </>
  );
};

export default Test;
