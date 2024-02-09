import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBaruser from "./NavBaruser";
import { jwtDecode } from "jwt-decode";
import Fotter from "./Fotter";

const token = localStorage.getItem("token");
const Admin = () => {
  const [userInfo, setUserInfo] = useState("");
  const [data , setData] = useState('')

  useEffect(() => {
    axios.get(`http://localhost:3600/getusers`, {
        headers: {
          Autho: token,
        },
      })
      .then((data) => {
        // console.log("data for the admin ", data.data);
        setData(data.data)
      })
      .then(() => {
        setUserInfo(jwtDecode(token).user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("you loged info ", userInfo);
  console.log(data);
  return (
    <div>
      <NavBaruser />
      
    </div>
  );
};

export default Admin;
