import React  from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import NotFound from '../../components/notFound/notFound';
import Profile from '../profile/profile';
import Announcment from '../announcment/announcment';
import Dictionary from '../dictionary/dictionary';
import Training from '../training/training';
import Rating from '../rating/rating';
import Login from '../auth/login/login';
import Register from '../auth/register/register';
import Forgot from '../auth/forgot/forgot';
import Default from '../default/default';

import './app.scss';

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Route path="/profile" component={() => <Default> <Profile /> </Default>}/>
        <Route path="/announcment" component={() => <Default> <Announcment /> </Default>}/>
        <Route path="/dictionary" component={() => <Default> <Dictionary /> </Default>}/>
        <Route path="/training" component={() => <Default> <Training /> </Default>}/>
        <Route path="/rating" component={() => <Default> <Rating /> </Default>}/>
        <Route path="/login" component={() => <Login /> }/>
        <Route path="/register" component={() => <Register /> }/>
        <Route path="/forgot" component={() => <Forgot /> }/>
      </Router>
    )
  }
}

export default App
