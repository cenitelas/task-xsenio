import React, { Component } from 'react';
import Count from './Count';
import {connect} from 'react-redux';
import {getCount} from '../actions/Actions';
import Modal from './Modal';
import '../css/Main.css';

class Main extends Component {
    constructor(props){
         super(props);
         this.state={
            iShowModal:false
         }
    }
  componentDidMount(){
    this.props.getCount(); 
  }

  modalClose = () => {
    this.setState({iShowModal:false});
  }

  modalShow = () =>{
    this.setState({iShowModal:true});
  }

  render() {
    return (
      <div className="main">
        {(this.props.count)
        ?
                <>
                <div className="count">
                    <Count count={this.props.count}></Count>
                    <button onClick={this.modalShow}>Increment</button>
                </div>

                {this.state.iShowModal &&  <Modal modalClose={this.modalClose} count={this.props.count}></Modal>}
                </>
        :
        <h1>Loading...</h1>}
      </div>
    );
  }
}
  
   const mapStateToProps = state => {
     return {count: state.count, currentUser: state.currentUser};
   }
  
   const mapDispatchToProps = (dispatch) => ({
    getCount: () => dispatch(getCount())
   })

  export default connect(mapStateToProps,mapDispatchToProps)(Main);