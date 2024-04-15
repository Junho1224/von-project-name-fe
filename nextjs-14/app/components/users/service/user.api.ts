import { instance } from "@/app/components/common/configs/axios-config"
import { IUser } from "../model/user"


export const findAllUsersAPI = async (page: number)=>{ //axios
    try{
        const response = await instance.get('/users/list',{
            params: {page, limit: 10}
        })
        return response.data

    }catch(error){
        console.log("getAllUserAPI error"+error)

        return error
    }
}

export const findUserByIdAPI = async (id: number)=>{ 
    try{
        const response = await instance.get('/users/detail',{
            params: {id}
        })
        return response.data

    }catch(error){
        console.log("getfindUserById error"+error)

        return error
    }
}
export const deleteUserByIdAPI = async (id: number)=>{ 
    try{
        const response = await instance.delete('/users/delete',{
            params: {id}
        })
        console.log("success");
        return response.data

    }catch(error){
        console.log("deleteUserById error"+error)

        return error
    }
}
export const countUserAPI = async ()=>{ 
    try{
        const response = await instance.get('/users/count',{
        })
        return response.data

    }catch(error){
        console.log("count error"+error)

        return error
    }
}
export const modifyUserByIdAPI = async (all: IUser)=>{ 
    try{
        const response = await instance.put('/users/modify',{
            params: {all}
        })
        return response.data

    }catch(error){
        console.log("modifyUserById error"+error)

        return error
    }
}

export const loginAPI = async(user:IUser) => {
    try{
        const response = await instance.post('/users/login',user)
        return response.data

    }catch(error){
        console.log("login error"+error)

        return error
    }
}



