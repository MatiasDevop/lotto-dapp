"use client";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import {
  useContract,
  useMetamask,
  useDisconnect,
  useContractMetadata,
  useAddress,
  useChainId,
} from "@thirdweb-dev/react";
import Login from "@/components/Login";

export default function Home() {
  const address = useAddress();
  const chainId = useChainId();

  if (!address) return <Login />;
  console.log("adddddd", address, chainId);
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
