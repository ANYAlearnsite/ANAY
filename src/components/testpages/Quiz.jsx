import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import NavBaruser from "../NavBaruser";
import Fotter from "../Fotter";

const Quiz = () => {
  const [data, setData] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { languge, level } = useParams();
  console.log(languge, level);

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
  }, [languge]);
  // for saving result of the user and then i will go back to the user interface !
  const saveresult = () => {};

  const handleAnswerSelection = (selectedOption) => {
    const isCorrect =
      data[level][currentQuestion].options[selectedOption].isCorrect;
    if (isCorrect) {
      setScore(score + 1);
    }

    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
    <div>
      <NavBaruser />
    </div>
    <div className=" h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div>
        <div className="text-white text-center mb-3 ">
          <h1 className="text-4xl font-bold mt">Welcome to Our Quiz Zone!</h1>
          <p className="text-lg">
            Test your knowledge and have fun with our interactive quiz.
          </p>
        </div>
      </div>
      <div className="   flex items-center justify-center">
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
                      className="flex items-center justify-between bg-darkgray p-4 mb-2 border-white border-3 rounded-lg text-2xl"
                    >
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name={`answer${currentQuestion}`}
                          className="form-radio text-red-500"
                          onChange={() => handleAnswerSelection(optionIndex)}
                        />
                        <span className="text-white">{option.text}</span>
                      </label>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        )}
        
        <script>
       
          console.log("This is a custom script");
        </script>
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
