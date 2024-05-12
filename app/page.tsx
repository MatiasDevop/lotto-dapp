"use client";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import { useAddress } from "@thirdweb-dev/react";

export default function Home() {
  const address = useAddress();

  console.log("adddddd", address);
  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col">
      <Head>
        <title>Lotterry</title>
      </Head>
      <Header />
      <h1>let's build an awesome lotter</h1>
    </div>
  );
}
