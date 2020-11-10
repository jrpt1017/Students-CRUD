import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import UpdatePage from "./components/UpdatePage/UpdatePage";
import MainHeader from "./components/MainHeader/MainHeader";
import DashBoard from "./components/DashBoard/DashBoard";
import Modal from "./components/Modal/Modal";

const App = () => {
  return (
    <>
      <MainHeader />
      <Modal/>
      <Switch>
        <Route exact path="/"
          render={() => {
            return <Redirect to="/dashboard"/>
          }}
        />
        <Route exact path="/dashboard" component={DashBoard} />
        <Route path="/updateStudent/:id" component={UpdatePage} />
        <Route path="/addStudent" component={UpdatePage} />
      </Switch>
    </>
  );
};

export default App;
