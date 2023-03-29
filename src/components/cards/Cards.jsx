import axios from 'axios'
import { formatDistanceToNow } from 'date-fns'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, updateData } from '../../features/timeline/timelineAPI'
import { getAllPosts } from '../../features/timeline/timelineSlice'
import './Card.scss'

const Cards = ({data}) => {
  const disPatch = useDispatch()
  const {auth_name, post_time,  auth_photo, content, photo, reactions, id} = data
  const posts = useSelector(getAllPosts)

  


  const handleLike = async (id, type) =>{

    if (type==='like') {
      try {
        await axios.patch("http://localhost:5050/posts/" + id, {
          reactions: {
            ...reactions,
            like : reactions.like ? reactions.like + 1 : 1
          }
      }).then(res => {
    
          disPatch(fetchPosts())
      
      });
      } catch (error) {
        console.log(error);
      }
    } else if (type==='love') {
      try {
        await axios.patch("http://localhost:5050/posts/" + id, {
          reactions: {
            ...reactions,
            love : reactions.love ? reactions.love + 1 : 1
          }
      }).then(res => {
    
          disPatch(fetchPosts())
      
      });
      } catch (error) {
        console.log(error);
      }
    }else{
      try {
        await axios.patch("http://localhost:5050/posts/" + id, {
          reactions: {
            ...reactions,
            dislike : reactions.dislike ? reactions.dislike + 1 : 1
          }
      }).then(res => {
    
          disPatch(fetchPosts())
      
      });
      } catch (error) {
        console.log(error);
      }
    }
  
    

  }


  return (
    <>

      <div className="cards-wrapper">
        <div className="cards-user-info">
          <img src={auth_photo} alt="" />
        <div className="info">
          <h4>{auth_name}</h4>
          {
            
            post_time && <span>{formatDistanceToNow(post_time)=== 'less than a minute' ? 'Just Now' : formatDistanceToNow(post_time) + " " + "ago" } </span>
          }
        </div>
        </div>
        <div className="post-description">
            <p>{content}</p>
        </div>
        <div className="post-image">
          <img src={photo} alt="" />
        </div>
        <div className="react-share-bar">
          <div className="like reacts" onClick={(e)=>handleLike(id, 'like')}>

            <i className='bx bx-heart' ></i>
            <span >{reactions?reactions.like:0}</span>
            </div>
          <div className="commnet reacts" onClick={(e)=>handleLike(id, 'love')}>
          <i className='bx bx-message-square-dots' ></i>      <span>{reactions?reactions.love:0}</span>
          </div>
          <div className="dislike reacts" onClick={(e)=>handleLike(id, 'dislike')}>
            <i className='bx bx-dislike' ></i>
            <span>{reactions?reactions.dislike:0}</span>
          </div>
        </div>
      </div>
    
    
    
    </>
  )
}

export default Cards