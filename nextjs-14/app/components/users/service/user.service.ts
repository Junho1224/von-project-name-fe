import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllUsersAPI } from "./user.api";

export const findAllUsers: any = createAsyncThunk(
    'user/findAllUser', //action
    async (page: number)=>{ //
        console.log('findAllUser page : '+ page)

        const data : any = await findAllUsersAPI(1);

        const {message, result}: any = data
    
        // console.log('----- API 를 사용한 경우 -----')
        // console.log('message : '+ message)
        // console.log(JSON.stringify(result))

        return data
    }
)