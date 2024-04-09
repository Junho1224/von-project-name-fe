import { instance } from "@/app/components/common/configs/axios-config"


export const findAllBoardsAPI = async (page: number)=>{ //axios
    try{
        const response = await instance.get('/boards/list',{
            params: {page, limit: 10}
        })
        return response.data

    }catch(error){
        console.log("getAllBoardsAPI error"+error)

        return error
    }
}

