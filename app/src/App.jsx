import React from 'react';
import UpdatePage from './components/UpdatePage/UpdatePage';
import { Route } from 'react-router-dom';
import MainHeader from './components/MainHeader/MainHeader';
import DashBoard from './components/DashBoard/DashBoard';
import { Switch } from 'react-router-dom';

const App = () => {
  return (
    <>
      <MainHeader />
      <Switch>
        <Route exact path="/dashboard" component={DashBoard} />
        <Route path="/fillup" component={UpdatePage} />
      </Switch>
    </>
  );
};

export default App;
