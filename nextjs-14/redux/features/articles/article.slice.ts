import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './article.init';
import { fetchAllArticles } from './article.service';


const articleThunks = [fetchAllArticles]

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
            .addCase(fetchAllArticles.fulfilled, handleFulfilled) //조건에 맞는 하나 실행 //스위치 fetchAllArticles.fulfilled가 성공했으면 handleFulfilled실행
            
         
    }
})

export const getAllArticles = (state: any) => {
    console.log('------------------ Before useSelector ---------------')
    console.log(JSON.stringify(state.article.array.result))
    return state.article.array.result;
}

export const { } = articleSlice.actions

export default articleSlice.reducer;