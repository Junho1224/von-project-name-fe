"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { NextPage } from "next";
import { API } from "@/app/components/common/enums/API";
import AxiosConfig from "@/app/components/common/configs/axios-config";


const Join: NextPage = () => {
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
        const data = { username, password, name, phone, job }; // 키,밸류가 같으면 생략 가능

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

            <div className="h-[77vh] items-center flex justify-center px-5 lg:px-0">
                <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="flex-1 bg-blue-900 text-center hidden md:flex">
                        <div
                            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url(https://www.tailwindtap.com/assets/common/marketing.svg)`,
                            }}
                        ></div>
                    </div>
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div className=" flex flex-col items-center">
                            <div className="text-center">
                                <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                                    Student Sign up
                                </h1>
                                <p className="text-[12px] text-gray-500">
                                    Enter your details to create your account
                                </p>
                            </div>
                            <div className="w-full flex-1 mt-8">
                                <div className="mx-auto max-w-xs flex flex-col gap-4">
                                    <input
                                        className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="text"
                                        placeholder="Enter username"
                                        onChange={handleUserName}
                                    />
                                    <input
                                        className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="password"
                                        placeholder="Enter password"
                                        onChange={handlePw} 
                                    />
                                    <input
                                        className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="text"
                                        placeholder="Enter your name"
                                        onChange={handleName}
                                    />
                                    <input
                                        className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="tel"
                                        placeholder="Enter your phone"
                                        onChange={handlePhone}
                                    />
                                    
                                    <input
                                        className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="job"
                                        placeholder="Enter your job"
                                        onChange={handleJob}
                                    />
                                    <button className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                        <svg
                                            className="w-6 h-6 -ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            strokeLinecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="8.5" cy="7" r="4" />
                                            <path d="M20 8v6M23 11h-6" />
                                        </svg>
                                        <span className="ml-3" onClick={handleClick}>Sign Up</span>
                                        <Link href={"/"}></Link>
                                    </button>
                                    <p className="mt-6 text-xs text-gray-600 text-center">
                                        Already have an account?{" "}
                                        <Link href="/">
                                            <span className="text-blue-900 font-semibold">Sign in</span>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )

}


export default Join



