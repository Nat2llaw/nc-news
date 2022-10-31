import React from "react";
import { useState, useEffect } from "react";
import { fetchApiUsers } from "../utils/Api";
import { Link } from "react-router-dom";

const Users = (props) => {
  const { users, setUsers } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApiUsers().then((res) => {
      setUsers(res);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
        <p>welcome {users[0].username}</p>
    );
  }
};

export default Users;
