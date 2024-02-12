import React from "react";
import { useParams } from "react-router";
import NavBaruser from "../NavBaruser";
import { Link } from "react-router-dom";
import Fotter from "../Fotter";

const LessonLevel = () => {
  const { lan } = useParams();
  const language = { 
    lan: lan,
  };
  const levels = [
    {
      level: "A1",
      description: "Beginner - Basic understanding of everyday phrases.",
    },
    {
      level: "A2",
      description: "Elementary - Can communicate in simple and routine tasks.",
    },
    {
      level: "B1",
      description: "Intermediate - Can handle most situations while traveling.",
    },
    {
      level: "B2",
      description:
        "Upper Intermediate - Can understand complex texts and discussions.",
    },
    {
      level: "C1",
      description: "Advanced - Can express ideas fluently and spontaneously.",
    },
    {
      level: "C2",
      description: "Proficient - Near-native proficiency, understands subtleties.",
    },
  ];

  return (
    <div>
      <NavBaruser />
      <div className="bg-gradient-to-r bg-cyan-400">
        <div className="container mx-auto py-8">
          <h3 className="mt-4 text-center text-xl font-bold text-white">
            Welcome! You chose the {lan} quiz test. Please select the level:
          </h3>
          <div className="flex justify-center items-center h-screen">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {levels.map((level, index) => (
                <div key={index} className="bg-white p-4 rounded-md shadow-md mt-4">
                  <h2 className="text-2xl font-bold mb-4">{level.level}</h2>
                  <p className="text-gray-700">{level.description}</p>
                  <Link to={`/lesson`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                      Go to {level.level} lesson  {lan}
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Fotter />
    </div>
  );
};

export default LessonLevel;
