"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Button, Input } from "@mui/material";
import AxiosConfig from "@/redux/common/configs/axios-config";
import { NextPage } from "next/types";
import { fetchAllArticles } from "@/redux/features/articles/article.service";
import { useDispatch, useSelector } from "react-redux";
import { getAllArticles } from "@/redux/features/articles/article.slice";



// TypeScript syntax
interface IArticle {
    id: number
    title: string
    content: string
    writer: string
    registerDate: string
}

const ArticlesPage: NextPage = () => {
    const dispatch = useDispatch()
    const allArticles: [] = useSelector(getAllArticles)

    if(allArticles !== undefined){
        console.log('allArticles is not undefined')

        console.log('length is '+ allArticles.length)
        for(let i=0; i< allArticles.length; i++){
            console.log(JSON.stringify(allArticles[i]))
        }
    }else{
        console.log('allArticles is undefined')
    }

    useEffect(() => {  //즉시 실행 함수
        dispatch(fetchAllArticles(1))
    }, []);
    //  [dispatch]);


    return (
        <>
            <h2>게시글 목록 </h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>content</th>
                        <th>writer</th>
                        <th>registerDate</th>
                    </tr>
                </thead>
                <tbody>
                    {allArticles?.map((props: IArticle) => (
                        <tr key={props.id}>
                            <td>{props.title}</td>
                            <td>{props.content}</td>
                            <td>{props.writer}</td>
                            <td>{props.registerDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </>
    );
}

export default ArticlesPage
