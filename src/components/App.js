import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {getMe,logoutUser} from '../actions/Actions';
import Signup from './Signup';
import Login from './Login';
import {NavLink} from "react-router-dom"
import Main from './Main';
import '../css/App.css'
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
      <div className="app">
      <div className="nav">
          {this.props.currentUser && this.props.currentUser.name
                ? <>
                <NavLink to="/" onClick={this.handleClick}>Log Out</NavLink>           
                </>
                :  (<>
            <NavLink activeClassName="active" to="/signup">Sing up</NavLink>
            <NavLink activeClassName="active" to="/login">logon</NavLink>
            </>)
            }
      </div>
      {!this.props.currentUser.name?<h1>Welcome!</h1>:<Main></Main>}
        <Switch>
           <Route path="/signup" component={Signup}/> 
           <Route path="/login" component={Login}/> 
        </Switch>       
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