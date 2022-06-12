/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { NextPage } from "next";
import Image from "next/image";

import * as anchor from "@project-serum/anchor";
import useWalletBalance from "../context/WalletBalanceProvider";
import { useEffect, useState } from "react";


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

const Inspiration: NextPage = () => {

  const { walletAddress } = useWalletBalance();
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    // Update the document title using the browser API
  });

  return (
    <div className="px-30" style={{background:'white'}}>
      <div className="flex items-center justify-center py-16" style={{ fontFamily: 'Bangers', fontStyle: 'normal', fontWeight: '400', fontSize: '96px', lineHeight: '102px', color: '#FFD700', WebkitTextStrokeWidth: '5px', WebkitTextStrokeColor: '#000000' }}>
        why are they so angry?!!
      </div>
      <div className="min-h-[20vh] flex items-center justify-center" style={{ fontFamily: 'Bangers', fontStyle: 'normal', fontWeight: '400', fontSize: '53px', lineHeight: '53px', color: '#000000'}}>
        Sometime ag0, an nft creator (kukuruku) and an  artist made plans to  create a collection together
      </div>
      <div className="mr-10" style={{ textAlign: "center" }}>
        <img
          width='100%'
          height='auto'         
          alt='logo'
          src='/images/placeholder-image.png'
        />
      </div>

      <div className="min-h-[20vh] flex items-center justify-center py-16" style={{ fontFamily: 'Bangers', fontStyle: 'normal', fontWeight: '400', fontSize: '53px', lineHeight: '53px', color: '#000000'}}>
        but the artist backstabbed kukuruku aand released the art with someone else
      </div>
      <div className="mr-10" style={{ textAlign: "center" }}>
        <img
          width='100%'
          height='auto'         
          alt='logo'
          src='/images/placeholder-image.png'
        />
      </div>

      <div className="min-h-[20vh] flex items-center justify-center py-16" style={{ fontFamily: 'Bangers', fontStyle: 'normal', fontWeight: '400', fontSize: '53px', lineHeight: '53px', color: '#000000'}}>
        angry and pained, kukuruku created a  set of  angry cocks to get his revenge  on the bitch that betrayed him
      </div>
      <div className="mr-10" style={{ textAlign: "center" }}>
        <img
          width='100%'
          height='auto'         
          alt='logo'
          src='/images/placeholder-image.png'
        />
      </div>

      <div className="min-h-[20vh] flex items-center justify-center py-16" style={{ fontFamily: 'Bangers', fontStyle: 'normal', fontWeight: '400', fontSize: '53px', lineHeight: '53px', color: '#000000'}}>
        and sent them into the blockchains to cause havoc and find  the bitch !! who double-crossed him!
      </div>
      <div className="mr-10" style={{ textAlign: "center" }}>
        <img
          width='100%'
          height='auto'         
          alt='logo'
          src='/images/placeholder-image.png'
        />
      </div>
      <div className="flex items-center justify-center mt-20" style={{ fontFamily: 'Bangers', fontStyle: 'normal', fontWeight: '400', fontSize: '96px', lineHeight: '102px', color: '#FFD700', WebkitTextStrokeWidth: '5px', WebkitTextStrokeColor: '#000000' }}>
        The motherfucking end!!
      </div>
      <div className="flex items-center justify-center mt-5 mb-20" style={{ fontFamily: 'Bangers', fontStyle: 'normal', fontWeight: '400', fontSize: '64px', lineHeight: '68px', color: '#E90F0F', WebkitTextStrokeWidth: '5px', WebkitTextStrokeColor: '#000000' }}>
        The motherfucking end!!
      </div>
    </div>
  );

};

export default Inspiration;