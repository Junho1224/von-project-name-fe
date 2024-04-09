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

