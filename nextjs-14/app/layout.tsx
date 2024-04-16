"use client";


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Header from "./components/common/header";
import { useEffect, useState } from "react";
import { getAuth } from "./components/users/service/user.slice";
import { useSelector } from "react-redux";

const ReduxProvider = dynamic(() => import("@/redux/redux-provider"), {
  ssr: false
});

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const [showHeader, setShowHeader] = useState<boolean>(false);
  // const auth = useSelector(getAuth)

  // useEffect(()=>{
  //   if(auth.token !== ""){
  //     setShowHeader(true)
  //   }else{
  //     console.log('토큰에 값이 없는 상태')
  //   }
  // },[auth])

// Header 뮤터블 처리, 조건절 추가
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
        <div className="mt-100">
        <ReduxProvider > {children}</ReduxProvider>
        </div>
      </body>
    </html>
  );
}