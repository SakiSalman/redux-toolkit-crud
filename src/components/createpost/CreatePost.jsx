import React from 'react'
import './CreatePost.scss'

const CreatePost = ({close}) => {
    const {modal, setModal} = close

  return (
    <> 


        <div className="create-post-wrapper">
            <div className="create-post-btn">
                <div className="btn-wrapper" onClick={()=> setModal(!modal)}>
                    <i className='bx bxs-message-square-add'></i> 
                    <span>Create Post</span>
                </div>
            </div>
        </div>


    
    
    </>
  )
}

export default CreatePost