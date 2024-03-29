import {createAction,handleAction} from 'redux-actions'

export const articleConstans ={
    ARTICLES_REQUEST : 'ARTICLES_REQUEST',
    ARTICLES_SUCCESS : 'ARTICLES_SUCCESS',
    ARTICLES_FAILUER : 'ARTICLES_FAILUER',

}

export const getArticlesSuccess = createAction(articleConstans.ARTICLES_SUCCESS)