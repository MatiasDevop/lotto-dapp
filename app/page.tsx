import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
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
