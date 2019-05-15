import React  from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import NotFound from 'components/not-found/not-found';
import Profile from 'containers/profile/profile';
import News from 'containers/news/news';
import Dictionary from 'containers/dictionary/dictionary';
import Training from 'containers/training/training';
import Rating from 'containers/rating/rating';
import Login from 'containers/auth/login/login';
import Register from 'containers/auth/register/register';
import Forgot from 'containers/auth/forgot/forgot';
import Default from 'containers/default/default';
import Landing from 'containers/landing/landing';
import Test from 'containers/games/test/test';
import PrivateRoute from './private-route';
import AuthRoute from './auth-route';

import './app.scss';

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Landing} />
        <PrivateRoute path="/profile" component={() => <Default> <Profile /> </Default>}/>
        <PrivateRoute path="/news" component={() => <Default> <News /> </Default>}/>
        <PrivateRoute path="/dictionary" component={() => <Default> <Dictionary /> </Default>}/>
        <PrivateRoute path="/training" component={() => <Default> <Training /> </Default>}/>
        <PrivateRoute path="/rating" component={() => <Default> <Rating /> </Default>}/>
        <PrivateRoute path="/test" component={() => <Default> <Test /> </Default>}/>
        <AuthRoute path="/login" component={() => <Login /> }/>
        <AuthRoute path="/register" component={() => <Register /> }/>
        <AuthRoute path="/forgot" component={() => <Forgot /> }/>
      </Router>
    )
  }
}

export default App
