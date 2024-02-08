import React from "react";
import { useParams } from "react-router";
import NavBaruser from "../NavBaruser";
import { Link } from "react-router-dom";
import Fotter from "../Fotter";

const Testlvl = () => {
  const { lan } = useParams();
  const languge ={
    lan : lan
  }
  console.log(languge.lan);
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
      description:
        "Proficient - Near-native proficiency, understands subtleties.",
    },
  ];

  return (
    <div>
      <NavBaruser />
      <h3> welcome you chose the {lan} quiz test plz select the lvl :</h3>
      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {levels.map((level, index) => (
            <div key={index} className="bg-white p-4 rounded-md shadow-md">
              <h2 className="text-2xl font-bold mb-4">{level.level}</h2>
              <p className="text-gray-700">{level.description}</p>
              <Link to={`/test/${languge.lan}/${level.level}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">
                  Go to {level.level} Test
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Fotter/>
    </div>
  );
};

export default Testlvl;
