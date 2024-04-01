import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './article.init';
import { getAllArticles } from './article.service';
import { getAllArticleAPI } from './article.api';

const articleThunks = [getAllArticles]

const status = {
    pending: 'pending',
    fulfilled: 'fullfilld',
    rejected: 'rejected'
}

const handlePending = (state: any) => {

}
const handleFulfilled = (state: any, {payload}: any) => {
    console.log('-----conclusion-----')
    console.log(JSON.stringify(payload))
    state.articles = payload

}
const handleRejected = (state: any) => {

}

export const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const { pending, rejected } = status;

        builder
            .addCase(getAllArticles.fulfilled, handleFulfilled)
            
         
    }
})

export const { } = articleSlice.actions

export default articleSlice.reducer;