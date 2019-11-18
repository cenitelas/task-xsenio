import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userLogin} from '../Actions';

class Login extends Component {
  constructor(props){
      super(props)
    this.state = {
        name: "",
        password: ""
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
      <form onSubmit={this.handleSubmit}>
        <h1>Logon</h1>

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

export default connect(null, mapDispatchToProps)(Login);