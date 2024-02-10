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
        setdatausers(results.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3600/admin/alllessons")
      .then((results) => {
        console.log('data fetched');
        setdatalessons(results.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3600/admin/alltests")
      .then((results) => {
        console.log('data fetched');
        setdatatests(results.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-gray-100 py-4 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto max-w-4xl">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
            <div className="text-lg font-bold mb-2">All Users</div>
            <div className="text-xl">{users.length}</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
            <div className="text-lg font-bold mb-2">All Lessons</div>
            <div className="text-xl">{lessons.length}</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
            <div className="text-lg font-bold mb-2">All Tests</div>
            <div className="text-xl">{tests.length}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;