import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux/user/userActions";

const UserComponent = ({ userData, fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, []);
  return userData.loader ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      {userData &&
        userData.data &&
        userData.data.map((user) => {
         return <p key={user.name}>{user.name}</p>;
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
