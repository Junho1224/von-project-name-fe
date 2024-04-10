import { createSlice } from "@reduxjs/toolkit";
import { findAllUsers, findUserById } from "./user.service";
import { initialState } from "./user.init";

const status = {
    pending: 'pending',
    fulfilled: 'fullfilld',
    rejected: 'rejected'
}

const handleFulfilled = (state: any, {payload}: any) => { // payload는 action객체
    console.log('-----conclusion-----')
    state.array = payload 
    console.log(state.array)


}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{}, //내부 연산
        extraReducers: builder => { //자바연동
            const { pending, rejected } = status; // 진행중, 거부
    
            builder
                .addCase(findAllUsers.fulfilled, handleFulfilled)
                .addCase(findUserById.fulfilled, handleFulfilled)

    }
})

export const getAllUsers = (state: any) => {
    console.log('------------------ Before useSelector ---------------')
    console.log(JSON.stringify(state.user.array)) //array로 받기 때문에 .result 뺌.
    return state.user.array;
}
export const getUserById = (state: any) => state.user.array

export const {}= userSlice.actions
// export const getSlice = (state: any)=> state.user.value
export default userSlice.reducer  //합쳐서 내보냄
    
