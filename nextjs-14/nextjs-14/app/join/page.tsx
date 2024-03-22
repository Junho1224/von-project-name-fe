"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SERVER = "http://localhost:8080";

export default function Join() {
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setname] = useState('');
    const [phone, setphone] = useState('');
    const [addressId, setaddressId] = useState('');
    const [job, setjob] = useState('');
    const [height, setpheight] = useState('');
    const [weight, setpweight] = useState('');
    const [id, setid] = useState('');

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

    const handleAddressId = (e: any) => {
        setaddressId(e.target.value);
    };

    const handleJob = (e: any) => {
        setjob(e.target.value);
    };

    const handleHeight = (e: any) => {
        setpheight(e.target.value);
    };

    const handleWeight = (e: any) => {
        setpweight(e.target.value);
    };

    const handleId = (e: any) => {
        setid(e.target.value);
    };

    const router = useRouter();


    const handleClick = () => {
        alert("회원가입 성공 : " + username);
        const url = `${SERVER}/api/users`;
        const data = { username, password, name, phone, addressId, job, height, weight, id }; // 키,밸류가 같으면 생략 가능
        const config = {
            headers: {
                "Cache-Control": "no-cache",
                "Content-Type": "application/json",
                Authorization: `Bearer blah ~`,
                "Access-Control-Allow-Origin": "*",
            },
        };
        axios.post(url, data, config).then((res) => {
            alert("리스핀스가 가져온 이름 : " + JSON.stringify(res.data))
            router.push("/login");
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

                <label htmlFor="addressId">addressId</label>
                <input type="text" placeholder="Enter addressId" onChange={handleAddressId} required />
                <br />
                <br />

                <label htmlFor="job">job</label>
                <input type="text" placeholder="Enter job" onChange={handleJob} required />
                <br />
                <br />

                <label htmlFor="height">height</label>
                <input type="text" placeholder="Enter height" onChange={handleHeight} required />
                <br />
                <br />

                <label htmlFor="weight">weight</label>
                <input type="text" placeholder="Enter weight" onChange={handleWeight} required />
                <br />
                <br />

                <label htmlFor="id">id</label>
                <input type="text" placeholder="Enter id" onChange={handleId} required />
                <br />
                <br />

                {/* <label>
                        <input type="checkbox" checked={true} name="remember" style={{ marginBottom: '15px' }} /> Remember me
                    </label> */}
                <br />

                {/* <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms & Privacy</a>.</p> */}

                <button onClick={handleClick}>Sign Up</button><br />
                <button type="button" className="cancelbtn">Cancel</button>
            </div>


        </>
    )

}
