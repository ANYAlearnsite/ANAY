import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Admin from './components/Admin.jsx';
import User from './components/User.jsx';
import IntroPage from './components/IntroPage.jsx';
import Submit from './components/Submituser.jsx'
import Test from './components/testpages/Test.jsx';
import Testlvl from './components/testpages/Testlvl.jsx';
import Quiz from './components/testpages/Quiz.jsx';
import Users from "./components/Userslist.jsx";
import LessonsList from './components/lessonsList.jsx';
import UpdateRole from "./components/update.jsx";
import Addlesson from './components/addlesson.jsx';
import Updatelesson from './components/Updatelesson.jsx';
import Searchuser from './components/searchuser.jsx';
import Update from './components/Updateuser.jsx'
import { useState } from 'react';
import Lesson from './components/Lesson.jsx'; 

import LessonsfUser from './components/testpages/LessonsfUser.jsx';
import LessonLevel from './components/testpages/lessonslevel.jsx';

import AllLessons from './components/AllLessons.jsx';
import FavoritList from './components/FavoritList.jsx';
import SearchLesson from './components/SearchLesson.jsx';
import UpDateU from './components/UpDateU.jsx';


function App() {
  const [publicId, setPublicId] = useState("")
  const [lessondata,setLessondata]=useState("")
  return (
    <div className="App">
      <Router>
      <Routes>
          {/* lending page then the login page  */}
        <Route path='/' element={<IntroPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/user" element={<User publicId={publicId } setLessondata={setLessondata}/>}/>
      <Route path="/Update" element={<Update setPublicId={setPublicId} publicId={publicId}/>}/>
      <Route path="/lesson" element={<Lesson lessondata={lessondata} />}/>
      <Route path="/lessonfUser" element={<LessonsfUser lessondata={lessondata}/>}/> 

      <Route path="/submit" element={<Submit/>}/>
      <Route path='/test' element={<Test/>}/>
      <Route path= "/test/:lan" element={<Testlvl/>}/>

      <Route path= "/lesson/:lan" element={<LessonLevel/>}/>
    
      

      <Route path='/test/:languge/:level' element={<Quiz/>}/>

      <Route path='/userslist' element={<Users/>}/>
      <Route path='/lessonslist' element={<LessonsList/>}/>
      <Route path='/update/:id' element={<UpdateRole/>}/>
      <Route path='/addlesson' element={<Addlesson/>}/> 
      <Route path='/updatelesson/:id' element={<Updatelesson/>}/> 
      <Route path='/searchforuser/:name' element={<Searchuser/>}/>
      <Route path="/allLessons" element={<AllLessons/>}/>
      <Route path="/favoritList" element={<FavoritList/>}/>
      <Route path="/upDateU" element={<UpDateU/>}/>
      <Route path="/SearchLesson" element={<SearchLesson/>}/>

      </Routes>
      
      </Router>
     
    </div>
  );
}

export default App;
