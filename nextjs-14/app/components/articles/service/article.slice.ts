import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './article.init';
import { findAllArticles, findArticleById } from './article.service';


const articleThunks = [findAllArticles]

const status = {
    pending: 'pending',
    fulfilled: 'fullfilld',
    rejected: 'rejected'
}

const handlePending = (state: any) => {

}
const handleFulfilled = (state: any, {payload}: any) => { // payload는 action객체
    console.log('-----conclusion-----')
    state.array = payload 
    console.log(state.array)
    // console.log(JSON.stringify(payload))
    // state.articles = payload

}
const handleRejected = (state: any) => {

}

export const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {}, 
    extraReducers: builder => { //내부 연산
        const { pending, rejected } = status; // 진행중, 거부

        builder
            .addCase(findAllArticles.fulfilled, handleFulfilled) //조건에 맞는 하나 실행 //스위치 fetchAllArticles.fulfilled가 성공했으면 handleFulfilled실행
            .addCase(findArticleById.fulfilled, (state:any,{payload} : any) => {state.array = payload})



            //소스가 늘어날수록 여기가 두꺼워져야함.
            
         
    }
})

export const getAllArticles = (state: any) => (state.article.array)

export const getArticleById = (state: any) => (state.article.array)
export const { } = articleSlice.actions

export default articleSlice.reducer;