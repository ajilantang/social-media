import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import WebRouter from "./routes/routes";
import PersistentDrawerLeft from "./components/NavBar";
const App = ({ getUsers }: { getUsers: () => void }) => {
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <PersistentDrawerLeft>
      <WebRouter />
    </PersistentDrawerLeft>
  );
};
const getUsers = () => ({
  type: "USER_REQUESTED"
});
// connect user for makin app not request to api toomuch
const mapDispatchToProps = (dispatch: Function) => ({
  getUsers: () => dispatch(getUsers())
});

let AppWrapper = connect(
  null,
  mapDispatchToProps
)(App);

export default AppWrapper;
