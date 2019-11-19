import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userLogin} from '../actions/Actions';
import '../css/Login.css'
class Login extends Component {
  constructor(props){
      super(props)
    this.state = {
        name: "",
        password: ""
    }
  }

  componentDidUpdate(){
    if(this.props.currentUser && this.props.currentUser.name){
      this.props.history.push("/");
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userLogin(this.state)
  }

  render() {
    return (
      <form className="login" onSubmit={this.handleSubmit}>
        <h1>Login</h1>

        <label>Username</label>
        <input
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
          /><br/>

        <label>Password</label>
        <input
          type='password'
          name='password'
          value={this.state.password}
          onChange={this.handleChange}
          /><br/>

        <input type='submit'/>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userLogin: userInfo => dispatch(userLogin(userInfo))
})

const mapStateToProps = state => {
  return {currentUser: state.currentUser};
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);