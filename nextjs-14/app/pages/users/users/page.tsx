"use client";

import { fetchAllUsers } from "@/redux/features/users/user.service";
import { getAllUsers } from "@/redux/features/users/user.slice";
import { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


// TypeScript syntax
interface IUser {
    id : number
    username : String
    passwordid : String
    name : String
    phone : String
    addressId : String
    job : String
    height : number
    weight : number

}

const UsersPage: NextPage = () => {
    const dispatch = useDispatch()
    const allUsers: [] = useSelector(getAllUsers)

    if(allUsers !== undefined){
        console.log('allUsers is not undefined')

        console.log('length is '+ allUsers.length)
        for(let i=0; i< allUsers.length; i++){
            console.log(JSON.stringify(allUsers[i]))
        }
    }else{
        console.log('allUsers is undefined')
    }

    useEffect(() => {  //즉시 실행 함수
        dispatch(fetchAllUsers(1))
    }, []);
    //  [dispatch]);


    return (
        <>
            <h2>유저 목록 </h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>username</th>
                        <th>name</th>
                        <th>phone</th>
                        <th>job</th>
                        <th>height</th>
                        <th>weight</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers?.map((props: IUser) => (
                        <tr key={props.id}>
                            <td>{props.username}</td>
                            <td>{props.name}</td>
                            <td>{props.job}</td>
                            <td>{props.height}</td>
                            <td>{props.weight}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
          


        </>
    );
}

export default UsersPage
