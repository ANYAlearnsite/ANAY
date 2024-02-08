import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Admin from './components/Admin.jsx';
import User from './components/User.jsx';
import NavBar from './components/NavBar.jsx'
import IntroPage from './components/IntroPage.jsx';
import Submit from './components/Submituser.jsx'
import Test from './components/testpages/Test.jsx';
import Testlvl from './components/testpages/Testlvl.jsx';
import Quiz from './components/testpages/Quiz.jsx';

function App() {
  return (
    <div className="App">
    
      <Router>
  
     
      <Routes>
        <Route path='/' element={<IntroPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/submit" element={<Submit/>}/>
      <Route path='/test' element={<Test/>}/>
      <Route path= "/test/:lan" element={<Testlvl/>}/>
      <Route  path='/test/:languge/:level' element={<Quiz/>}/>
      </Routes>
      
      </Router>
     
    </div>
  );
}

export default App;
