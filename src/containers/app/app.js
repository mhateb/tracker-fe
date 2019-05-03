import React  from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import NotFound from '../../components/notFound/notFound';
import Profile from '../profile/profile';
import News from '../news/news';
import Dictionary from '../dictionary/dictionary';
import Training from '../training/training';
import Rating from '../rating/rating';
import Login from '../auth/login/login';
import Register from '../auth/register/register';
import Forgot from '../auth/forgot/forgot';
import Default from '../default/default';
import Landing from '../landing/landing';
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
        <AuthRoute path="/login" component={() => <Login /> }/>
        <AuthRoute path="/register" component={() => <Register /> }/>
        <AuthRoute path="/forgot" component={() => <Forgot /> }/>
      </Router>
    )
  }
}

export default App
