import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
// import { Link } from 'react-router-dom';


const Login = () => {
  const [name, setName] = useState('')
  const [pwd, setPwd] = useState('')
  const navigate = useNavigate()
  const obj =
    { name: name, pwd: pwd }

  const loging = async () => {
    try {
      console.log(obj);
      const response = await axios.post(`http://localhost:3600/getuser`,obj)
      if (response.status === 200) {
        console.log(response.data);
        localStorage.setItem('token', response.data.jwt_user)
        navigate('/nour')
      }
    }
    catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <div class="card">
        <h4 class="title">Log In!</h4>
        <label>name</label>
        <input type="text" onChange={(ele) => {
          setName(ele.target.value)
        }} />
        <label>pwd</label>
        <input type="text" onChange={(ele) => {
          setPwd(ele.target.value)
        }} />
        <button type="button" onClick={() => {
          loging()
        }}>login</button>
      </div>

    </div>
  );
};

export default Login;