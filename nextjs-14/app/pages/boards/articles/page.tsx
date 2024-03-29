"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Button, Input } from "@mui/material";
import AxiosConfig from "@/redux/common/configs/axios-config";
import { NextPage } from "next/types";
import { getAllArticles } from "@/redux/features/articles/article.service";
import { useDispatch } from "react-redux";
const SERVER = "http://localhost:8080";


// TypeScript syntax
interface IArticle {
    id: number,
    title: string,
    content: string,
    writer: string,
    registerDate: string
}

const ArticlesPage: NextPage = ()=>{
    const dispatch = useDispatch()
    const [articles,setArticles] = useState([])

    useEffect(() => {
        dispatch(getAllArticles())
        
    }, []);
    return (
        <>
            <h2>게시글 목록 </h2>

            <table>
                <thead>
                    <tr>
                        <th>제목</th>
                        <th>내용</th>
                        <th>작성자</th>
                        <th>등록일</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map((article: IArticle) => (
                        <tr key={article.id}>
                            <td>{article.title}</td>
                            <td>{article.content}</td>
                            <td>{article.writer}</td>
                            <td>{article.registerDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </>
    );
}

export default ArticlesPage
