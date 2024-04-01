import { instance } from "@/redux/common/configs/axios-config"


export const fetchAllUsersAPI = async (page: number)=>{ //axios
    try{
        const response = await instance.get('users',{
            params: {page, limit: 10}
        })
        return response.data

    }catch(error){
        console.log("getAllUserAPI error"+error)

        return error
    }
}

