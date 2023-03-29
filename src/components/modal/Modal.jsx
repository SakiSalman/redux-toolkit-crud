import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendPost } from '../../features/timeline/timelineAPI'
import './Modal.scss'

const Modal = ({close}) => {

    const {modal, setModal} = close
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        auth_name : '',
        auth_photo : '',
        content : '',
        photo : '',
        reactions : {
            like : null,
            dislike : null,
            love : null
        },
        post_time : Date.now()
    })

    const handleInputChange = (e) =>{

        setInput((prevState)=> ({
            ...prevState,
            [e.target.name] : e.target.value
        }))

    }

    // handle posts
    const handlePost = () =>{
        dispatch(sendPost(input))
        setModal(!modal)
    }

  return (
    <>

        <div className="modal-wrapper">
            <div className="modal-container">
                <div className="form-box">
                    <input
                    name='auth_name'
                    value={input.auth_name}
                    onChange={handleInputChange}
                    type="text" placeholder='user bane'/>
                    <input
                    name='auth_photo'
                    value={input.auth_photo}
                    onChange={handleInputChange}
                    type="text" placeholder='Auth photo'/>
                    <input
                    name='content'
                    value={input.content}
                    onChange={handleInputChange}
                    type="text" placeholder='Post Commnet'/>
                    <input
                    name='photo'
                    value={input.photo}
                    onChange={handleInputChange}
                    type="text" placeholder='Post Image'/>
                    <button onClick={handlePost}>Post</button>
                    <button className='btn btn-danger w-100' onClick={()=> setModal(!modal)}>close</button>
                </div>
            </div>
        </div>
    
    
    
    </>
  )
}

export default Modal