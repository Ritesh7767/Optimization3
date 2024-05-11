import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'
const dataProvider = createSlice({
    name : 'dataProvider',
    initialState : [],
    reducers : {
        ADD_POST(state, action){
            return [...state, action.payload]
        },
        UPDATE_POST(state, action){
            state.forEach(post => {
                if(post.id == action.payload)
                    post.verify = !post.verify
            })
        }
    }
})

export const {ADD_POST, UPDATE_POST} = dataProvider.actions
export default dataProvider.reducer