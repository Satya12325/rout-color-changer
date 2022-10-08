// * fetch all users information here

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const fetchUsers = () => {
  return axios.get("https://reqres.in/api/users");
};

function Users() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleFetchUsers = async () => {
    try {
      setIsLoading(true);
      const { data } = await fetchUsers();
      setData(data);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    handleFetchUsers();
  }, []);
  if (isLoading) {
    return <div>...loading</div>;
  }
  return (
    <div>
      <h3>Users</h3>
      <Link to="users/info">Info</Link>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {data?.data?.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              margin: 2,
              padding: 5
            }}
          >
            <div>{`${item.first_name} ${item.last_name}`}</div>
            <img width="40px" src={item.avatar} alt={item.first_name} />
            <Link to={`/users/${item.id}`}>Show more info</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
