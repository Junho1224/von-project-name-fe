"use client";

import UsersColumns from "@/app/components/users/module/columns";
import { findAllUsers } from "@/app/components/users/service/user.service";
import { getAllUsers } from "@/app/components/users/service/user.slice";
import { DataGrid } from "@mui/x-data-grid";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UsersPage: NextPage = () => {
    const dispatch = useDispatch()
    const allUsers: [] = useSelector(getAllUsers)

    if (allUsers !== undefined) {
        console.log('allUsers is not undefined')

        console.log('length is ' + allUsers.length)
        for (let i = 0; i < allUsers.length; i++) {
            console.log(JSON.stringify(allUsers[i]))
        }
    } else {
        console.log('allUsers is undefined')
    }

    useEffect(() => {  //즉시 실행 함수
        dispatch(findAllUsers(1))
    }, []);


    return (
        <>
        <h2>사용자 목록</h2>

            <div style={{ height: "100%", width: "100%" }}>
                {allUsers && <DataGrid
                    rows={allUsers}
                    columns={UsersColumns()}
                    pageSizeOptions={[5, 10, 20]}
                    checkboxSelection
                />}
            </div>
            ;
        </>

    );
}

export default UsersPage

//🔥🔥🔥🔥🔥🔥🔥
