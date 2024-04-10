'use client'


import { findUserById } from "@/app/components/users/service/user.service";
import { getUserById } from "@/app/components/users/service/user.slice";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";




export default function UserDetailPage (props:any)  {

    const dispatch = useDispatch();
    const user = useSelector(getUserById)

    useEffect(() => {  //즉시 실행 함수
        dispatch(findUserById(props.params.id))
    }, []);


    return (<>
    
    
    {props.params.id}번 게시판 상세
    <span> ID :</span> <Typography textAlign="center" sx={{fontSize:"3rm"}}> {props.params.id}</Typography>
    <span> 유저이름 :</span> <Typography textAlign="center" sx={{fontSize:"3rm"}}> {user.username}</Typography>
    <span> 비밀번호 :</span> <Typography textAlign="center" sx={{fontSize:"3rm"}}> {user.password}</Typography>
    <span> 이름 :</span> <Typography textAlign="center" sx={{fontSize:"3rm"}}>{user.name}</Typography>
    <span> 전화번호 :</span> <Typography textAlign="center" sx={{fontSize:"3rm"}}> {user.phone}</Typography>
    <span> 직업 :</span> <Typography textAlign="center" sx={{fontSize:"3rm"}}> {user.job}</Typography>
    
    
    
    </>)

}