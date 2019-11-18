import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userPost} from '../Actions';

class Signup extends Component {
  constructor(props){
      super(props);
  this.state = {
    name: "",
    password: "",
    repassword: ""
  }
}

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    if(this.state.password===this.state.repassword){
        let user = {name:this.state.name,password:this.state.password}
        this.props.userPost(user);
    }else{
        alert("Пароли не совпадают!")
    }
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>

        <label>Username</label>
        <input
          name='name'
          value={this.state.username}
          onChange={this.handleChange}
          /><br/>

        <label>Password</label>
        <input
          type='password'
          name='password'
          value={this.state.password}
          onChange={this.handleChange}
          /><br/>

        <label>Re password</label>
        <input
          type='password'
          name='repassword'
          value={this.state.repassword}
          onChange={this.handleChange}
          /><br/>
        <input type='submit'/>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userPost: userInfo => dispatch(userPost(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup);