import './App.css';
import { useState } from 'react';
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
import Updatelesson from './components/Updatelesson.jsx';
import Searchuser from './components/searchuser.jsx';
import FavoritList from './components/FavoritList.jsx'
import Stat from './components/stat.jsx';
import SearchLessons from './components/searchlessons.jsx';
import Lesson from './components/Lesson.jsx';
import Addlesson from './components/addlesson.jsx';

import Update from './components/Updateuser.jsx'

import LessonsfUser from './components/testpages/LessonsfUser.jsx';
import LessonLevel from './components/testpages/lessonslevel.jsx';
import AllLessons from './components/AllLessons.jsx';




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
      {/* //ahmed */}
      <Route path="/lesson" element={<Lesson lessondata={lessondata} />}/>
      <Route path="/lessonfUser" element={<LessonsfUser lessondata={lessondata}/>}/> 

      <Route path="/lesson" element={<Lesson/>}/>
      
      <Route path="/submit" element={<Submit/>}/>
      <Route path='/test' element={<Test/>}/>
      <Route path= "/test/:lan" element={<Testlvl/>}/>
        <Route path='/user/alllessens' element={<AllLessons/>}/>

      <Route path= "/lesson/:lan" element={<LessonLevel/>}/>
      <Route path='/test/:languge/:level' element={<Quiz/>}/>
      <Route path='/userslist' element={<Users/>}/>
      <Route path='/lessonslist' element={<LessonsList/>}/>
      <Route path='/update/:id' element={<UpdateRole/>}/>
      <Route path='/addlesson' element={<Addlesson/>}/> 
      <Route path='/updatelesson/:id' element={<Updatelesson/>}/> 

      <Route path='/searchforuser/:name' element={<Searchuser/>}/>
      <Route path='/stat' element={<Stat/>}/>
      <Route path='/searchLessons/:category' element={<SearchLessons/>}/>
      <Route path='/addlesson' element={<Addlesson/>}/>
      <Route path="/favoritList" element={<FavoritList/>}/>


      </Routes>
      
      </Router>
     
    </div>
  );
}

export default App;
