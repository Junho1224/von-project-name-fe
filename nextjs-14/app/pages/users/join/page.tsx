"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { NextPage } from "next";
import { API } from "@/app/components/common/enums/API";
import AxiosConfig from "@/app/components/common/configs/axios-config";


const Join: NextPage = ()=>{
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setname] = useState('');
    const [phone, setphone] = useState('');
    const [addressId, setaddressId] = useState('');
    const [job, setjob] = useState('');

    const handleUserName = (e: any) => {
        setusername(e.target.value);
    };

    const handlePw = (e: any) => {
        setPassword(e.target.value);
    };

    const handleName = (e: any) => {
        setname(e.target.value);
    };

    const handlePhone = (e: any) => {
        setphone(e.target.value);
    };

    const handleJob = (e: any) => {
        setjob(e.target.value);
    };


    const router = useRouter();


    const handleClick = () => { // 속성을 가진 함수는 객체
        
        const url = `${API.SERVER}/api/users/join`;
        const data = { username, password, name, phone, job}; // 키,밸류가 같으면 생략 가능
        
        axios.post(url, data, AxiosConfig()).then((res) => {
            alert("리스핀스가 가져온 이름 : " + JSON.stringify(res.data))
            router.push("login");
        });
    };


    return (
        <>

            <div className="container">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />

                <label htmlFor="username">username</label>
                <input type="text" placeholder="Enter username" onChange={handleUserName} required />
                <br />
                <br />

                <label htmlFor="pw">Password</label>
                <input type="password" placeholder="Enter Password" onChange={handlePw} required />
                <br />
                <br />

                <label htmlFor="name">name</label>
                <input type="text" placeholder="Enter name" onChange={handleName} required />
                <br />
                <br />

                <label htmlFor="phone">phone</label>
                <input type="text" placeholder="Enter phone" onChange={handlePhone} required />
                <br />
                <br />

                <label htmlFor="job">job</label>
                <input type="text" placeholder="Enter job" onChange={handleJob} required />
                <br />
                <br />

            

                {/* <label>
                        <input type="checkbox" checked={true} name="remember" style={{ marginBottom: '15px' }} /> Remember me
                    </label> */}
                <br />

                {/* <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms & Privacy</a>.</p> */}

                <button onClick={handleClick}>Sign Up</button><br />
                <Link href={"/"}>홈</Link>
            </div>


        </>
    )

}


export default Join