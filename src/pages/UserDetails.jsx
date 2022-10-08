import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import UserCard from "../Components/UserCard";

const getUserById = (id) => {
  return axios.get("https://reqres.in/api/users/" + id);
};

// HOOkS
function UserDetails() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const isMounted = useRef(null);

  const handleGetUser = async () => {
    try {
      setIsLoading(true);
      const { data } = await getUserById(id);
      if (!isMounted.current) {
        return;
      }
      setData(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetUser();
    if (!isMounted.current) {
      isMounted.current = true;
    }
    return () => {
      // * cleanup
      isMounted.current = false;
    };
  }, [id]);

  if (isLoading) return <div>...loading</div>;
  console.log(data);
  return (
    <div>
      <h3> User ID: {id} </h3>
      <UserCard
        id={id}
        name={`${data?.data?.first_name} ${data?.data?.last_name}`}
        avatar={data?.data?.avatar}
        email={data?.data?.email}
      />
      {id !== "1" && <Link to={`/users/${Number(id) - 1}`}>Prev</Link>}
      <Link to={`/users/${Number(id) + 1}`}>Next</Link>
    </div>
  );
}

export default UserDetails;
