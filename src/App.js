import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Admin from './components/Admin.jsx';
import User from './components/User.jsx';
import NavBar from './components/NavBar.jsx'
import IntroPage from './components/IntroPage.jsx';
import Submit from './components/Submituser.jsx'
import Update from './components/Update.jsx'
import { useState } from 'react';
import Lesson from './components/Lesson.jsx'; 




function App() {
  const [publicId, setPublicId] = useState('')
  return (
    <div className="App">
      
    
      <Router>
  
     
      <Routes>
        <Route path='/' element={<IntroPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/user" element={<User publicId={publicId}/>}/>
      <Route path="/submit" element={<Submit/>}/>
      <Route path="/Update" element={<Update setPublicId={setPublicId}/>}/>
      <Route path="/lesson" element={<Lesson/>}/>
      </Routes>
      
      </Router>
     
    </div>
  );
}

export default App;
