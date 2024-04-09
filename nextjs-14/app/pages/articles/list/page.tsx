"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Box, Button, Input } from "@mui/material";
import AxiosConfig from "@/app/components/common/configs/axios-config";
import { NextPage } from "next/types";
import { findAllArticles } from "@/app/components/articles/service/article.service";
import { useDispatch, useSelector } from "react-redux";
import { getAllArticles } from "@/app/components/articles/service/article.slice";
import { DataGrid } from "@mui/x-data-grid";
import Columns from "@/app/components/articles/module/columns";



const ArticlesPage: NextPage = ({ data }: any) => {
    const dispatch = useDispatch()
    const allArticles: [] = useSelector(getAllArticles)

    if (allArticles !== undefined) {
        console.log('allArticles is not undefined')

        console.log('length is ' + allArticles.length)
        for (let i = 0; i < allArticles.length; i++) {
            console.log(JSON.stringify(allArticles[i]))
        }
    } else {
        console.log('allArticles is undefined')
    }

    useEffect(() => {  //즉시 실행 함수
        dispatch(findAllArticles(1))
    }, []);
    //  [dispatch]);


    return (<>
        <h2>게시판 목록</h2>
        <Box sx={{ height: 400, width: '100%' }}>
     {allArticles && <DataGrid
        rows={allArticles}
        columns={Columns()}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />}
    </Box>
    </>)
}

export default ArticlesPage
