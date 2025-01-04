import React, { useState, useEffect } from "react";
import axios from "axios";
const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((response) => {
        setUsers(response.data);

        console.log(users);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {users.map((users) => (
        <div className="flex items-center p-5 " key={users.id}>
          <div className="bg-slate-200 w-[248px] h-[296px] rounded-lg flex items-center flex-col p-5">
            <div className="bg-white w-[150px] h-[150px] rounded-[50%]"></div>
            <h2 className="mt-9 font-semibold">Name: {users.name}</h2>
            <p>Email: {users.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
