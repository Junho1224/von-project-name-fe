import { createAsyncThunk } from "@reduxjs/toolkit";
import { countUserAPI, deleteUserByIdAPI, findAllUsersAPI, findUserByIdAPI, modifyUserByIdAPI } from "./user.api";
import { IUser } from "../model/user";

export const findAllUsers: any = createAsyncThunk(
    'user/findAllUser', //action
    async (page: number)=>{ //
        // console.log('findAllUser page : '+ page)
        const data : any = await findAllUsersAPI(page);

        const {message, result}: any = data
    
        // console.log('----- API 를 사용한 경우 -----')
        // console.log('message : '+ message)
        // console.log(JSON.stringify(result))

        return data
    }
)

export const findUserById: any = createAsyncThunk(
    'user/findUserId',
    async (id: number) => {
        return await findUserByIdAPI(id)
    }
)
export const deleteUserById: any = createAsyncThunk(
    'user/deleteUserById',
    async (id: number) => {
        return await deleteUserByIdAPI(id)
    }
)
export const countUser: any = createAsyncThunk(
    'user/countUser',
    async () => {
        return await countUserAPI()
    }
)

export const modifyUserById: any = createAsyncThunk(
    'user/modifyUserById',
    async (all: IUser) => {
        return await modifyUserByIdAPI(all)
    }
)