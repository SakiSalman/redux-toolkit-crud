import React, { useEffect, useState } from 'react'
import './timeline.scss'
import Cards from '../../components/cards/Cards'
import CreatePost from '../../components/createpost/CreatePost'
import Modal from '../../components/modal/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './timelineAPI'
import { getAllPosts } from './timelineSlice'

const Timelines = () => {

  const [modal, setModal] = useState(false)
  const dispatch = useDispatch()
  const posts = useSelector(getAllPosts)
  
  useEffect( () => {
    dispatch(fetchPosts())
  }, [dispatch])


  return (


    <>

      <div className="container">
      <CreatePost close={{modal,setModal}}/>


        { posts ?
        [...posts].reverse().map( (data, index) => {
          return <Cards key={index} data={data}/>
        }) : "No Post Found"
        
        }
        

        {
          modal && <Modal close={{modal,setModal}}/>
        }
        
      </div>
        
    
    
    </>
  )
}

export default Timelines