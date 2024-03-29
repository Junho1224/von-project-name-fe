"use client";

import ReduxCounter from "@/redux/features/counter";
import { NextPage } from "next";

const Counter: NextPage = ()=>{
    return (
        <>
        <ReduxCounter/>
        </>
    )
}


export default Counter