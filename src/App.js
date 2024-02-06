import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Admin from './components/Admin.jsx';
import User from './components/User.jsx';


function App() {
  return (
    <div className="App">
      <Router>

      <h2> nav bar  ...........</h2>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/user" element={<User/>}/>

      </Routes>
      
      </Router>
     
    </div>
  );
}

export default App;
