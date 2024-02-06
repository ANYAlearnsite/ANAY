import axios from 'axios';
import React, { useEffect } from 'react';

const token = localStorage.getItem('token')
const Admin = () => {
    useEffect(()=>{
        axios.get(`http://localhost:3600/getusers`,{
        headers:{
            Autho : token
        }
        })
        .then((data)=>{
            console.log( "data for the admin ",data.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    })
    return (
        <div>
            
        </div>
    );
};

export default Admin;