import { createSlice } from "@reduxjs/toolkit";
import { findAllUsers, findUserById } from "./user.service";
import { initialState } from "./user.init";

const status = {
    pending: 'pending',
    fulfilled: 'fullfilld',
    rejected: 'rejected'
}

const handleFulfilledarr = (state: any, {payload}: any) => { // payload는 action객체, 요구한것만 담는다. 여기서는 array
    state.array = payload 
}
const handleFulfilledjson = (state: any, {payload}: any) => {  
    state.json = payload 
    
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{}, //내부 연산
        extraReducers: builder => { //자바연동
            const { pending, rejected } = status; // 진행중, 거부
    
            builder
                .addCase(findAllUsers.fulfilled, handleFulfilledarr)
                .addCase(findUserById.fulfilled, handleFulfilledjson)
                //자바로 해석하자면 swich case() findUserById.fulfilled면 handleFulfilled 실행

    }
})

export const getAllUsers = (state: any) => {
    console.log('------------------ Before useSelector ---------------')
    console.log(JSON.stringify(state.user.array)) //array로 받기 때문에 .result 뺌.
    return state.user.array;
}
export const getUserById = (state: any) => (state.user.json) // 

export const {}= userSlice.actions
// export const getSlice = (state: any)=> state.user.value
export default userSlice.reducer  //합쳐서 내보냄
    
