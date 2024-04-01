"use client";

import { useState } from "react"
import axios from 'axios';
import Link from "next/link";
import { PG } from "../redux/common/enums/PG";
import { API } from "../redux/common/enums/API";
import AxiosConfig from "@/redux/common/configs/axios-config";



export default function Home() {
  const [name, setName] = useState("");
  const handleChange = (e: any) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    alert("리퀘스트가 가져가는 이름 : " + name);
    const url = `${API.SERVER}`;
    const data = { name: name };
    

    axios.post(url, data, AxiosConfig()).then((res) => {  //리퀘스트의 속성값은 3개 url, data, config
      alert("리스핀스가 가져온 이름 : " + JSON.stringify(res.data));
    });
  };

  return (
  <div className='text-center'>
    <>
      <div>Welcome to</div>
      <h1 className='text-red-500'>Team Von</h1><br />
      <br />
    </>
    </div>
  );
}

