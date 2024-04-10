import { instance } from "@/app/components/common/configs/axios-config"


export const findAllArticlesAPI = async (page: number)=>{ //axios
    try{
        const response = await instance.get('articles/list',{
            params: {page, limit: 10}
        })
        return response.data

    }catch(error){
        console.log("getAllArticleAPI error"+error)

        return error
    }
}
export const findArticleByIdAPI = async (id: number)=>{ //axios
    try{
        const response = await instance.get('/articles/detail',{
            params: {id}
        })
        return response.data

    }catch(error){

        return error
    }
}

