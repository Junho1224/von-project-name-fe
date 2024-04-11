'use client'


import { IUser } from "@/app/components/users/model/user";
import { findUserById } from "@/app/components/users/service/user.service";
import { getUserById } from "@/app/components/users/service/user.slice";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";




export default function UserDetailPage (props:any)  {

    const dispatch = useDispatch();  
    const user:IUser = useSelector(getUserById)

    useEffect(() => {  //즉시 실행 함수
        dispatch(findUserById(props.params.id))
    }, []);



    //@DeleteMapping("/delete")로 삭제 추가 





    return (<>
    

    
    
    {props.params.id}번 유저 상세<br /><br />
    <span> 유저이름 : <Typography textAlign="center" sx={{fontSize:"3rm"}}> {user.username}</Typography></span>
    <span> 비밀번호 : <Typography textAlign="center" sx={{fontSize:"3rm"}}> *******</Typography></span>
    <span> 이름 : <Typography textAlign="center" sx={{fontSize:"3rm"}}>{user.name}</Typography></span>
    <span> 전화번호 : <Typography textAlign="center" sx={{fontSize:"3rm"}}> {user.phone}</Typography></span>
    <span> 직업 : <Typography textAlign="center" sx={{fontSize:"3rm"}}> {user.job}</Typography></span>




    
    
    
    </>)

}