import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, sendPost } from "./timelineAPI";



const postSlice = createSlice({
    name : 'timeline',
    initialState : {
        posts : [],
        status : 'idle', /* loading, succeed, failed */
        error : '',
        message : ''
    },
    reducers : {


    },
    extraReducers : (builder)=> {
        builder.addCase(fetchPosts.pending, (state, {type, payload})=>{
            state.status = 'loading'
        })
        builder.addCase(fetchPosts.fulfilled, (state, {type, payload})=>{
            state.status = 'succeed'
            state.posts = payload
             state.message = 'Posts loaded'
        })
        builder.addCase(fetchPosts.rejected, (state, {type, payload})=>{
            state.status = 'failed'
            state.message = 'data loading failed'

        })
        // create Posts
        builder.addCase(sendPost.pending, (state, {type, payload})=>{
            state.status = 'loading'
        })
        builder.addCase(sendPost.fulfilled, (state, {type, payload})=>{
            state.posts.push(payload)
            state.status = 'succeed'
            state.message = 'New Post Created'

        })
        builder.addCase(sendPost.rejected, (state, {type, payload})=>{
            state.status = 'failed'
            state.message = 'Post create failed'
            
        })
    }

})


export const getAllPosts = (state) => state.post.posts


export const {} = postSlice.actions;

export default  postSlice.reducer