import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login } from "./redux/actions/users";

import Box from '@material-ui/core/Box';

import Header from "./components/header"
import Footer from "./components/footer"

import {
  BrowserRouter as Router,
	Route,
	Switch,
  Redirect
} from "react-router-dom";

//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      isLoaded: false,
      err:{
        message:'',
        code:0,
      }
    };
  }

  componentDidMount(){
    console.log('Did Mount');
  }

  render() {
    return (
      <Box>    
        <Router basename="/">
          <Header />
          <Box className='body'>
            <Switch>
              <PrivateRoute loginState={this.state.isLogin} path="/dashboard">
                <>Dashboard Page</>
              </PrivateRoute>
              <Route exact path="/login">
                <>Login Page</>
              </Route>
              <Route exact path="/about">
                <>About Page</>
              </Route>
              <Route exact path="/">
                <>Home Page</>
              </Route>
            </Switch>
          </Box>
          <Footer />
        </Router>
      </Box>
    );
  }
}

function PrivateRoute({ children, ...rest }) {
  return (    
    <Route
      {...rest}
      render={({ location }) =>
        (rest.loginState !== false) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const mapStateToProps = state => ({
  ...state
});

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    login
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);