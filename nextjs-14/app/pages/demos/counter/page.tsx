"use client";

import { useState } from "react";

const buttonStyle = {
    backgroundColor: '#f44336', // 배경색
    color: 'white', // 글자색
    border: 'none', // 테두리 없음
    padding: '10px 20px', // 패딩
    margin: '10px', // 마진
    borderRadius: '5px', // 모서리 둥글게
    cursor: 'pointer', // 마우스 오버 시 커서 변경
    fontSize: '16px' // 글자 크기
};


export default function Counter(){

    const [count, setCount] = useState(0);

    const handlePlus = () => {
        setCount(count + 1);
    }

    const handleMin = () => {
        setCount(count - 1);
    }


    
    



    return (
        <>
        <h1>카운트</h1>
        <h1>Counter : {count}</h1><br />

        <button onClick={handlePlus} style={buttonStyle}>+</button>
            <button onClick={handleMin} style={buttonStyle}>-</button>



        
        </>
    )
}