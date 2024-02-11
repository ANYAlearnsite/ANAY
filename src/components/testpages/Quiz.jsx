import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import NavBaruser from "../NavBaruser";
import Fotter from "../Fotter";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import ScoreLevel from "./ScoreLevel.jsx";

const Quiz = () => {
  const token = localStorage.getItem("token")
  const dectoken = jwtDecode(token)
  console.log( "dectoken",);
  const [data, setData] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const { languge, level } = useParams();
  const nametest = languge +'/'+level
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/quize_test/${languge}/test.json`);
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.log("Error in getting the data ", err);
      }
    };
    fetchData();
  }, []);
  console.log(data[level]);

  const saveresult = () => {
    // Implement logic to save the user's result
    console.log("Save result logic goes here");
    axios.post("http://localhost:3600/user/testresult",{
      score: score,
      iduser:dectoken.user[0].iduser,
      name:nametest
    },{
      headers:{
        Autho : token
      }
    })
    .then(()=>{
      navigate('/user')
    })
    .catch((err)=>{
      console.log(err);
    })
  };

  const handleAnswerSelection = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    const isCorrect =
      data[level][currentQuestion].options[selectedOption]?.isCorrect || false;

    if (isCorrect) {
      setScore(score + 1);
    }

    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
    // Reset selected option
    setSelectedOption(null);
  };

  return (
    <div>
      <NavBaruser />
      <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="text-white text-center mb-3">
          <h1 className="text-4xl font-bold mt">Welcome to Our Quiz Zone!</h1>
          <p className="text-lg">
            Test your knowledge and have fun with our interactive quiz.
          </p>
          <ScoreLevel score={score} level={level} />
        </div>
        <div className="flex items-center justify-center">
          {data[level] && currentQuestion < data[level].length && (
            <div className="mx-auto w-80 bg-gray-800 p-4 rounded-lg text-white shadow-xl text-center">
              <h1 className="text-xl">
                {languge} quiz for {level}
              </h1>
              <h2 className="text-lg">Score: {score}</h2>
              <div className="mt-4">
                <h3 className="text-darkblue text-2xl mb-2">
                  {data[level][currentQuestion].text}
                </h3>
                <ul className="list-none">
                  {data[level][currentQuestion].options.map(
                    (option, optionIndex) => (
                      <li
                        key={optionIndex}
                        className={`flex items-center justify-between bg-darkgray p-4 mt-8 border-white border-3 rounded-lg text-2xl ${
                          selectedOption === optionIndex ? "bg-green-500" : ""
                        }`}
                      >
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            className="form-radio text-red-500"
                            onChange={() => handleAnswerSelection(optionIndex)}
                            checked={selectedOption === optionIndex}
                          />
                          <span className="text-white">{option.text}</span>
                        </label>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <button
                onClick={handleNextQuestion}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
                disabled={selectedOption === null}
              >
                Next Question
              </button>
            </div>
          )}

          {currentQuestion === data[level]?.length && (
            <div className="mx-auto w-80 bg-gray-800 p-4 rounded-lg text-white shadow-xl text-center">
              <h1 className="text-xl">
                {languge} quiz for {level} - Quiz Completed
              </h1>
              <h2 className="text-lg">Final Score: {score}</h2>
              <button
                onClick={() => {
                  saveresult();
                }}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Go to the user page
              </button>
            </div>
          )}
        </div>
      </div>
      <Fotter />
    </div>
  );
};

export default Quiz;
