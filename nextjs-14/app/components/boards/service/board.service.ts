import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllBoardsAPI, findBoardByIdAPI } from "./board.api";

export const findAllBoards: any = createAsyncThunk(
    'board/findAllBoards', //action
    async (page: number)=>{ //
        console.log('findAllBoard page : '+ page)

        const data : any = await findAllBoardsAPI(1);

        const {message, result}: any = data
    
        return data
    }
)

export const findBoardById: any = createAsyncThunk(
    'boards/findBoardId',
    async (id: number) => {
        return await findBoardByIdAPI(id)
    }
)