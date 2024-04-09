import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllBoardsAPI } from "./board.api";

export const findAllBoards: any = createAsyncThunk(
    'board/findAllBoards', //action
    async (page: number)=>{ //
        console.log('findAllBoard page : '+ page)

        const data : any = await findAllBoardsAPI(1);

        const {message, result}: any = data
    
        // console.log('----- API 를 사용한 경우 -----')
        // console.log('message : '+ message)
        // console.log(JSON.stringify(result))

        return data
    }
)