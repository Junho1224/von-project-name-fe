import { publicDecrypt } from "crypto";
import { useState } from "react";

export default function Join(){
    const [name, setName] = useState("");
    const [UserName, setUserName] = useState("");
    const [Password, setPWuserName] = useState("");
    const [Pwc, setPwc] = useState("");
    const [Phone, setPhone] = useState("");
    const [Adress, setAdress] = useState("");


    const handlename = (e: any) => {
        setName(e.target.value);
    }
    const handleUserName = (e: any) => {
        setUserName(e.target.value);
    }
    const handlenPw = (e: any) => {
        setPWuserName(e.target.value);
    }
    const handlenPwc = (e: any) => {
        setPwc(e.target.value);
    }
    const handlePhone = (e: any) => {
        setPhone(e.target.value);
    }
    const handleAdress = (e: any) => {
        setAdress(e.target.value);
    }

    
    return(
        <>
        <h2>회원가입</h2>
        <h3>이름</h3>
        <input onChange={handlename}/>
        <div />
        <h3>아이디</h3>
        <input onChange={handleUserName}/>
        <div />
        <h3>비밀번호</h3>
        <input onChange={handlenPw}/>
        <div />
        <h3>비밀번호 확인</h3>
        <input onChange={handlenPwc}/>
        <div />
        <h3>전화번호</h3>
        <input onChange={handlePhone}/>
        <div />
        <h3>주소</h3>
        <input onChange={handleAdress}/>
        
        </>
    )

}
