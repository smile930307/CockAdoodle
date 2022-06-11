import { NextPage } from "next";

import MintMain from "../components/mint/MintMain";
import * as anchor from "@project-serum/anchor";
import useWalletBalance from "../context/WalletBalanceProvider";
import { NFTCollection } from "../components/nft/NFTCollection";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";


const getCandyMachineId = (): anchor.web3.PublicKey | undefined => {
  try {
    const candyMachineId = new anchor.web3.PublicKey(
      process.env.NEXT_PUBLIC_CANDY_MACHINE_ID!
    );

    return candyMachineId;
  } catch (e) {
    console.log("Failed to construct CandyMachineId", e);
    return undefined;
  }
};

const candyMachineId = getCandyMachineId();
const rpcHost = process.env.NEXT_PUBLIC_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const txTimeout = 30000;

const Index: NextPage = () => {
  const { walletAddress } = useWalletBalance();
  return (
    <div className="">
      <div className="min-h-[30vh] flex items-center justify-center py-16" style={{fontFamily: 'myFirstFont', fontStyle: 'normal',fontWeight: '400',fontSize: '96px',lineHeight: '102px' , color: '#FFD700', WebkitTextStrokeWidth: '5px', WebkitTextStrokeColor: '#000000'}}>
        wtf are you looking at!!
      </div>
      <div className="min-h-[35vh] flex items-center justify-center py-16">
        <div className="eth-mint mr-10" style={{ textAlign: "center" }}>
          <Image
            width='150'
            height='150'
            alt='logo'
            src='/ethereum-eth-logo.png'
          />
          <div>
            <button className="eth-mint-btn mt-5">Mint ETHEREUM edition</button>
          </div>
          
        </div>
        <div className="sol-mint ml-10" style={{ textAlign: "center" }}>
          <Image
            width='150'
            height='150'
            alt='logo'
            src='/solana-sol-logo.png'
          />
          <div>
            <button className="sol-mint-btn mt-5">Mint Solana edition</button>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <button className="bottom-btn">whats the inspiration!!??</button>
      </div>
      {/* 
      {walletAddress && (
        <div className="mt-10">
          <NFTCollection />
        </div>
      )} */}
    </div>
  );
};

export default Index;
