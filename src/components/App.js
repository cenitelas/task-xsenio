import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {getMe,logoutUser} from '../Actions';
import Signup from './Signup';
import Login from './Login';
import {BrowserRouter as Router, Link} from "react-router-dom"

class App extends Component {
  componentDidMount(){
    this.props.getMe()
  }

  handleClick = event => {
    event.preventDefault()
    localStorage.removeItem("token")
    this.props.logoutUser()
  }

  render() {
    return (
      <div>
      <Router>
      {this.props.currentUser && this.props.currentUser.name
            ? <button onClick={this.handleClick}>Log Out</button>
            :  (<>
        <Link to="/signup">Sing up</Link>
        <Link to="/login">logon</Link>
        </>)
        }
        <Switch>
           <Route path="/signup" component={Signup}/> 
           <Route path="/login" component={Login}/> 
        </Switch>       
      </Router> 
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getMe: () => dispatch(getMe()),
  logoutUser: () => dispatch(logoutUser())
})

 const mapStateToProps = state => {
   return {currentUser: state.currentUser};
 }

export default connect(mapStateToProps,mapDispatchToProps)(App);