'use client'


import Columns from "@/app/components/boards/module/columns";
import { findAllBoards } from "@/app/components/boards/service/board.service";
import { getAllBoards } from "@/app/components/boards/service/board.slice";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import React from "react";


const BoardListPage: NextPage = ({data}:any) => {
    const dispatch = useDispatch()
    const allBoards: [] = useSelector(getAllBoards)

    if(allBoards !== undefined){
        console.log('allBoards is not undefined')
        
        console.log('length is '+ allBoards.length)
        for(let i=0; i< allBoards.length; i++){
            console.log(JSON.stringify(allBoards[i]))
        }
    }else{
        console.log('allBoards is undefined')
    }
    

    useEffect(() => {
        dispatch((findAllBoards(1)))
    }, [])
    
    return (<>
        <h2>게시판 목록</h2>
        <Box sx={{ height: 400, width: '100%' }}>
     {allBoards && <DataGrid
        rows={allBoards}
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

export default BoardListPage