// create async post

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPosts = createAsyncThunk('timeline/fetchPosts', async ()=> {
        const response = await axios.get('http://localhost:5050/posts')

        return response.data
})


export const sendPost = createAsyncThunk('timeline/sendPost', async (data) => {
        const response = await axios.post('http://localhost:5050/posts', data)
        return response.data
})
