import { createSlice } from "@reduxjs/toolkit";
import { fetchAllUsers } from "./user.service";
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
    // console.log(JSON.stringify(payload))
    // state.articles = payload

}




export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{},
        extraReducers: builder => { //내부 연산
            const { pending, rejected } = status; // 진행중, 거부
    
            builder
                .addCase(fetchAllUsers.fulfilled, handleFulfilled)

    }
})

export const getAllUsers = (state: any) => {
    console.log('------------------ Before useSelector ---------------')
    console.log(JSON.stringify(state.user.array.result))
    return state.user.array.result;
}

export const {}= userSlice.actions
// export const getSlice = (state: any)=> state.user.value
export default userSlice.reducer
    
