import React,{useState} from 'react'
import Modal from './Modal'
import  './Modal.css'
//import modal.css from 

const ModalButton =(props)=>{

const [showModal, setShowModal]=useState(false)

return (
    <div>
<button onClick={()=> setShowModal(true)}>Show Modal</button>
<Modal onClose={()=>setShowModal(false)}   showModal={showModal}/>
</div>
)
}
    
export default ModalButton ;















