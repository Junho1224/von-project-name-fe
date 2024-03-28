"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Box from "@mui/material/Box";
import { Button, Input } from "@mui/material";
import AxiosConfig from "@/app/organisms/configs/axios-config";
const SERVER = "http://localhost:8080";


// TypeScript syntax
interface IArticle {
    id: number,
    title: string,
    content: string,
    writer: string,
    registerDate: string
}



export default function Articles() {
    const [articles, setArticles] = useState<IArticle[]>([]);
    const router = useRouter();
    const url = `${SERVER}/api/articles`;

    useEffect(() => {
        axios.get(url, AxiosConfig())
            .then(res => {
                const message = res.data.message
                if (message === 'SUCCESS') {
                    alert("게시글이 있습니다.")
                    setArticles(res.data.result)

                } else if (message === 'FAIL') {
                    alert("게시글이 없습니다.");
                } else {
                    alert("지정되지 않은 값");
                }
            });
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
                    {articles.map((article) => (
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
