import { instance } from "@/app/components/common/configs/axios-config"


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

export const findUserByIdAPI = async (id: number)=>{ //axios
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
// export const deleteUserById = async (id: number)=>{ //axios
//     try{
//         const response = await instance.delete('/users/detail',{
//             params: {id}
//         })
//         return response.data

//     }catch(error){
//         console.log("deleteUserById error"+error)

//         return error
//     }
// }

