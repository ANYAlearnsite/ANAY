import React, { useEffect, useState } from "react";
import axios from "axios";

const Stat = () => {
  const [users, setdatausers] = useState([]);
  const [lessons, setdatalessons] = useState([]);
  const [tests, setdatatests] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3600/admin/allusers")
      .then((results) => {
        console.log('data fetched');
        setdatausers(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3600/admin/alllessons")
      .then((results) => {
        console.log('data fetched');
        setdatalessons(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3600/admin/alltests")
      .then((results) => {
        console.log('data fetched');
        setdatatests(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-gray-100 py-8 px-4 md:px-8">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md flex flex-col justify-center items-center">
        <div className="text-lg font-bold mb-2">Users</div>
        <div className="text-3xl text-gray-800">{users.length}</div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md flex flex-col justify-center items-center">
        <div className="text-lg font-bold mb-2">Lessons</div>
        <div className="text-3xl text-gray-800">{lessons.length}</div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md flex flex-col justify-center items-center">
        <div className="text-lg font-bold mb-2">Tests</div>
        <div className="text-3xl text-gray-800">{tests.length}</div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Stat;