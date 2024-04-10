import { createSlice } from "@reduxjs/toolkit";
import { findAllBoards, findBoardById } from "./board.service";
import { initialState } from "./board.init";

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

export const boardSlice = createSlice({
    name:"board",
    initialState,
    reducers:{}, //내부 연산
        extraReducers: builder => { //자바연동
            const { pending, rejected } = status; // 진행중, 거부
    
            builder
                .addCase(findAllBoards.fulfilled, handleFulfilled)
                .addCase(findBoardById.fulfilled, (state:any,{payload} : any) => {state.array = payload})

    }
})

export const getAllBoards = (state: any) => {
    return state.board.array;
}
export const getBoardById = (state: any) => state.board.array

export const {}= boardSlice.actions
// export const getSlice = (state: any)=> state.board.value
export default boardSlice.reducer  //합쳐서 내보냄
    
