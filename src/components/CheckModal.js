import React from 'react';
import Modal from 'react-modal';


export class CheckModal extends React.Component {

  componentWillMount() {
    Modal.setAppElement('body');
  }

  render(){
     return(
        <Modal
          isOpen={this.props.checkRemove}
          onRequestClose={this.props.cancel}
          contentLabel="Double Check"
          closeTimeoutMS={200}
          className="modal"
        >
          <h3 className="modal__title">Are you sure?</h3>
          <button className="button button--modal-primary" onClick={this.props.remove}>Yes</button>    
          <button className="button button--modal-secondary" onClick={this.props.cancel}>Cancel</button>
        </Modal>
     )
    }
  };

export default CheckModal;