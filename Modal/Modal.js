import React,{useState} from 'react';
import ModalButton from './ModalButton';

const  Modal = props => {
    
   if(!props.showModal){
       return null
   }
  return ( 
  <div className="modal">
      <div className="modalContent">
          <div className="modalHeader">
              <p>THere was an unexpected issue with the modification</p>
          </div>
          <div className="modalBody">
              <p> Exit the order and open it again prior to attempting further modifications.Not exiting the order will result in additional failures.</p>
          </div>
          <div className="modalFooter">
              <button className="button" onClick={props.onClose}> close</button>
          </div>
      </div>
  </div>
  )
}

export default Modal;
