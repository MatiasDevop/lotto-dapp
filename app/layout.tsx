"use client";
//import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { createThirdwebClient, defineChain, getContract } from "thirdweb";
import "./globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { PolygonAmoyTestnet } from "@thirdweb-dev/chains";

const inter = Inter({ subsets: ["latin"] });

// create the client with your clientId, or secretKey if in a server environment
export const client = createThirdwebClient({
  clientId: "993c0da85e17bc8cb3e4bfdce30e5717",
});

//key secret :OJZJid0HiZtsbHbnjm9P4D1J9m9A1S2GdKuFzP8B8YZaHO8RJqnedFmaokCvasGjFH_bOnDO70tGGM_Cbdj9DQ
// connect to your contract
export const contract = getContract({
  client,
  chain: defineChain(80002),
  address: "0xc1bcD1c9E865B7E573a14cfe0A3E216a9c46F9c0",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThirdwebProvider
      clientId={client.clientId}
      activeChain={PolygonAmoyTestnet}
    >
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ThirdwebProvider>
  );
}
