import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getNext, countIncrement} from '../actions/Actions';
import '../css/Modal.css'

class Modal extends Component {

  componentDidMount(){
      this.props.getNext();
  }

  onClickIncrement = () => {
    this.props.countIncrement();
    this.props.modalClose();
  }
  
  render() {
    return (
      <div className="modal">
        {this.props.countNext && 
        <div className="content">
            <span className="close" onClick={this.props.modalClose}>X</span>
            <h4>Current counter : {this.props.count.number}</h4>
            <h4>Next counter : {this.props.countNext.number}</h4>
            <div className="buttons">
              <button onClick={this.props.modalClose}>Cancel</button>
              <button onClick={this.onClickIncrement}>Confirm</button>
            </div>
        </div>
        }
      </div>
    );
  }
}

    const mapDispatchToProps = (dispatch) => ({
        getNext: () => dispatch(getNext()),
        countIncrement: () => dispatch(countIncrement())
    })
  
   const mapStateToProps = state => {
     return {countNext: state.countNext};
   }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Modal);