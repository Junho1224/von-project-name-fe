"use client";


import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const SERVER = "http://localhost:8080";

export default function Login() {
    const [username, setuserName] = useState("");
    const [password, setuserPassword] = useState("");

    const handleuserName = (e: any) => {
        setuserName(e.target.value);
    }
    const handlepw = (e: any) => {
        setuserPassword(e.target.value);
    }

    const router = useRouter();
    
    const handlesubmit = () => {
        const url = `${SERVER}/api/login`;
    const data = { username, password }; // 키,밸류가 같으면 생략 가능
    const config = {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        Authorization: `Bearer blah ~`,
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios.post(url, data, config).then((res) => {        
        // alert("리스핀스가 가져온 이름 : " + JSON.stringify(res.data)); //JSON.stringify는 자바에서 tostring
        const message = res.data.message;
        alert((message)) //map의 key값인 message
        if(message === 'SUCCESS'){
            router.push("/articles/new_article");
        }else if (message === 'FAIL'){
            alert("FAIL");
        }else if (message === 'WRONG_PASSWORD'){
            alert("WRONG_PASSWORD");
        }else{
            alert("지정되지 않은 값");
        }


        
      });
    };

    return (
        <>
            <h2>login page</h2>
            <div>username</div>
            <input type="text" onChange={handleuserName} />
            <div />
            <div>password</div>
            <input type="password" onChange={handlepw} />
            <div />
            
            <button onClick={handlesubmit}>전송</button><br />
            <Link href={"/"}>홈</Link>
        </>
    );
}
