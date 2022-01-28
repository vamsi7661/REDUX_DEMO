import { connect } from "react-redux";
import { FetchUsers } from "./CounterRedux/index";
import { useEffect } from "react";
const User = ({fetchUsers,userData}) => {
    console.log(userData,"props User")
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((eachUser, index) => (
          <h2 key={index}>
            <small>UserName:</small><span>{eachUser.name}</span>
          </h2>
        ))}
        
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(FetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
