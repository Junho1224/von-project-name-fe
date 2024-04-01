import { instance } from "@/redux/common/configs/axios-config"


export const fetchAllArticlesAPI = async (page: number)=>{ //axios
    try{
        const response = await instance.get('all-articles',{
            params: {page, limit: 10}
        })
        return response.data

    }catch(error){
        console.log("getAllArticleAPI error"+error)

        return error
    }
}
