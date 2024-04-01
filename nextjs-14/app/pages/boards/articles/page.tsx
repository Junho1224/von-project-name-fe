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

const ArticlesPage: NextPage = () => {
    const dispatch = useDispatch()
    const [articles, setArticles] = useState([])

    useEffect(() => {
        dispatch(getAllArticles(1))

    }, []);
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
                    {articles.map((props: IArticle) => (
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
