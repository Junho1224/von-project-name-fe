"use client";

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Link from "next/link";
import { handlePlus,handleMinus, getCount } from "./counter.slice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


export default function ReduxCounter(){
    const count = useSelector(getCount);
    const dispath = useDispatch()



    return (
        <>
        <h1>카운트</h1>
        <h1>Redux Counter : {count}</h1><br />
        
    
        <AddIcon style={{ cursor: 'pointer' }} onClick={()=>dispath(handlePlus())} /> 
        <RemoveIcon style={{ cursor: 'pointer' }} onClick={()=>dispath(handleMinus())} /> 
        {/* 람다가 핵심 */}
        
        
        <br />
        <br />
        <Link href={"/"}>홈</Link>

        </>
    )
}