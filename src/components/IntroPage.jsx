import React from 'react';
import img from '../images/img_intro.jpg';


import Fotter from './Fotter';
import NavBar from './NavBar';
const IntroPage = () => {
   
    return (
        <div>
            <NavBar/>
           
            <div className="flex flex-col items-center justify-start h-screen pt-16 bg-gradient-to-r from-cyan-500 to-blue-500">
                <div className="welcome text-center">
                    <h2 className="text-4xl font-bold mb-6 mr-2">Welcome to ANAY Learn</h2>
                    <p className="text-lg text-center text-cyan-50 not-italic">
                        Are you ready to embark on a journey of language discovery and mastery?
                        Our platform is designed to make language learning an immersive and enjoyable
                        experience for learners of all levels.
                    </p>
                </div>

                <img className="mt-9 h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800" src={img} alt="image description" />

                <div className='bg-white-500 p-6 rounded-lg shadow-lg w-500 h-500'>
                    <p className="mt-5 text-center text-cyan-50 not-italic ">
                        Welcome to ANAY the ultimate destination
                        for language enthusiasts and curious minds! Immerse yourself in a world of linguistic
                        exploration and embark on a journey of discovery and mastery. Whether you're a beginner
                        taking your first steps into a new language or an experienced learner looking to refine your
                        skills, our platform offers a diverse range of courses tailored to your needs. Our interactive
                        and engaging lessons, coupled with cutting-edge technology, create an immersive language-learning
                        experience. Join us on this exciting adventure and unlock the doors to new cultures, friendships, and opportunities.
                        Start your language learning journey with ANAY today!
                    </p>
                </div>

            </div>
            <Fotter/>
            <div>
                



            </div>



        </div>
    );
};

export default IntroPage;
