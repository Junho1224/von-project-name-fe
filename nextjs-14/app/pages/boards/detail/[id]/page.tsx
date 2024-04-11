'use client'


import { IBoard } from "@/app/components/boards/model/board";
import { findBoardById } from "@/app/components/boards/service/board.service";
import { getBoardById } from "@/app/components/boards/service/board.slice";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";




export default function BoardDetailpage(props:any){
    const dispatch = useDispatch(); //setter
    const board:IBoard = useSelector(getBoardById) //getter


    useEffect(() =>{
        dispatch(findBoardById(props.params.id)) //
    },[])

    return(<>
    {props.params.id}번 게시판 상세
    <span> ID :</span> <Typography textAlign="center" sx={{fontSize:"3rm"}}> {props.params.id}</Typography>
    <span> 게시판 이름 :</span> <Typography textAlign="center" sx={{fontSize:"3rm"}}> {board.boardName}</Typography>
    <span> 게시판 타입 :</span> <Typography textAlign="center" sx={{fontSize:"3rm"}}> {board.boardType}</Typography>
    <span> 등록일 :</span> <Typography textAlign="center" sx={{fontSize:"3rm"}}>{board.regDate}</Typography>
    <span> 수정일 :</span> <Typography textAlign="center" sx={{fontSize:"3rm"}}> {board.modDate}</Typography>
   
    
    
    
    
    
    </>)
}