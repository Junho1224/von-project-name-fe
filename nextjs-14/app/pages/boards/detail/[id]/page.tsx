'use client'

import UsersColumns from "@/app/components/users/module/columns";

import { findAllUsers } from "@/app/components/users/service/user.service";
import { getAllUsers } from "@/app/components/users/service/user.slice";
import { Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";




export default function BoardDetailPage (props:any)  {

    // useEffect(() => {  //즉시 실행 함수
    //     dispatch(findBoardByID(props.params.id))
    // }, []);


    return (<>
    
    
    {props.params.id}번 게시판 상세
    {/* <span> ID :</span> <Typography textAlign="center" sx={{fontSize:"3rm"}}> {props.params.id}</Typography>
    <span> 게시판 이름 :</span> <Typography textAlign="center" sx={{fontSize:"3rm"}}> {props.params.boardName}</Typography>
    <span> 게시판 타입 :</span> <Typography textAlign="center" sx={{fontSize:"3rm"}}> {props.params.boardType}</Typography>
    <span> 등록일 :</span> <Typography textAlign="center" sx={{fontSize:"3rm"}}>{props.params.regDate}</Typography>
    <span> 수정일 :</span> <Typography textAlign="center" sx={{fontSize:"3rm"}}> {props.params.modDate}</Typography>
    
     */}
    
    
    
    </>)

}