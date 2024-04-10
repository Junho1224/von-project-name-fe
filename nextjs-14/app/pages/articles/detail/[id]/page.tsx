'use client'


import { findArticleById } from "@/app/components/articles/service/article.service";
import { getArticleById } from "@/app/components/articles/service/article.slice";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



export default function ArticleDetailPage (props:any)  {
    const dispatch = useDispatch();
    const article = useSelector(getArticleById)

    useEffect(() => {  //즉시 실행 함수
        dispatch(findArticleById(props.params.id))
    }, []);

    return (<>
    
    
        {props.params.id}번 게시판 상세
        <span> ID :</span> <Typography textAlign="center" sx={{fontSize:"3rm"}}> {article.id}</Typography>
        <span> Title :</span> <Typography textAlign="center" sx={{fontSize:"3rm"}}> {article.title}</Typography>
        <span> Content :</span> <Typography textAlign="center" sx={{fontSize:"3rm"}}> {article.content}</Typography>


        </>)


}