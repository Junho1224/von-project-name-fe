'use client'


import { PG } from "@/app/components/common/enums/PG";
import { IUser } from "@/app/components/users/model/user";
import { deleteUserById, findUserById } from "@/app/components/users/service/user.service";
import { getUserById } from "@/app/components/users/service/user.slice";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";




export default function UserDetailPage (props:any)  {
    const router = useRouter();

    const dispatch = useDispatch();  
    const user:IUser = useSelector(getUserById)
    const onDeleted = () => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            dispatch(deleteUserById(props.params.id));
            router.push(`${PG.USER}/list`);
        }
    };

    useEffect(() => {  //즉시 실행 함수
        dispatch(findUserById(props.params.id))
    }, []);






    return (<>
    

    
    
    {props.params.id}번 유저 상세<br /><br />
    <span> 유저이름 : <Typography textAlign="center" sx={{fontSize:"3rm"}}> {user.username}</Typography></span>
    <span> 비밀번호 : <Typography textAlign="center" sx={{fontSize:"3rm"}}> *******</Typography></span>
    <span> 이름 : <Typography textAlign="center" sx={{fontSize:"3rm"}}>{user.name}</Typography></span>
    <span> 전화번호 : <Typography textAlign="center" sx={{fontSize:"3rm"}}> {user.phone}</Typography></span>
    <span> 직업 : <Typography textAlign="center" sx={{fontSize:"3rm"}}> {user.job}</Typography></span>

    <Button onClick={onDeleted} style={{ background: 'red', color: 'white' }}>삭제하기</Button>
    



    
    
    
    </>)

}