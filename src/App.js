import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Admina from './components/Admin.jsx';
import User from './components/User.jsx';
import NavBar from './components/NavBar.jsx';
import IntroPage from './components/IntroPage.jsx';
import Submit from './components/Submituser.jsx';
import Users from "./components/Userslist.jsx";
import LessonsList from './components/lessonsList.jsx';
import UpdateRole from "./components/update.jsx";
import Addlesson from './components/addlesson.jsx';
import Updatelesson from './components/Updatelesson.jsx';
import Searchuser from './components/searchuser.jsx';
function App() {
  return (
    <div className="App">
    
      <Router>
  
     
      <Routes>
        <Route path='/intro' element={<IntroPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/submit" element={<Submit/>}/>
      <Route path="/" element={<Admina/>}/>
      <Route path='/userslist' element={<Users/>}/>
      <Route path='/lessonslist' element={<LessonsList/>}/>
      <Route path='/update/:id' element={<UpdateRole/>}/>
      <Route path='/addlesson' element={<Addlesson/>}/>
      <Route path='/updatelesson/:id' element={<Updatelesson/>}/>
      <Route path='/searchforuser/:name' element={<Searchuser/>}/>




      </Routes>
      
      </Router>
     
    </div>
  );
}

export default App;
