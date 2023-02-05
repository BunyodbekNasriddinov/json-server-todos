import axios from "axios";
import { useEffect, useState } from "react";

export const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/users")
      .then((data) => {
        if (data.status === 200) {
          setUsers(data.data);
        }
      })
      .catch((err) => console.log(err));
  }, [users]);

  return (
    <div className="container">
      <h2 className="h2 text-center my-5">USERS</h2>
      {users.length ? (
        <ul className="list-group w-50 mx-auto">
          {users.map((user) => (
            <li className="list-group-item" key={user.id}>
              {user.first_name} {user.last_name}
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};
