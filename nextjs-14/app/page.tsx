"use client";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const SERVER = "http://localhost:8080";

export default function Home() {
  const [name, setName] = useState("");
  const handleChange = (e: any) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    alert("리퀘스트가 가져가는 이름 : " + name);
    const url = `${SERVER}`;
    const data = { name: name };
    const config = {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        Authorization: `Bearer blah ~`,
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios.post(url, data, config).then((res) => {  //리퀘스트의 속성값은 3개 url, data, config
      alert("리스핀스가 가져온 이름 : " + JSON.stringify(res.data));
    });
  };

  return (
    <>
      <div>Welcome</div>
      <h3>당신의 이름은</h3>
      <input type="text" onChange={handleChange} />
      <br />
      <button onClick={handleClick}>전송</button><br />
      <Link href={"/login"}>로그인</Link><br />
      <Link href={"/join"}>회원가입</Link>
    </>
  );
}