import { NextPage } from "next";

import MintMain from "../components/mint/MintMain";
import * as anchor from "@project-serum/anchor";
import useWalletBalance from "../context/WalletBalanceProvider";
import { NFTCollection } from "../components/nft/NFTCollection";
import { BsGithub } from "react-icons/bs";

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
      <div className="min-h-[37vh] flex items-center justify-center py-16">
        <div className="inline-block w-full">
        </div>
      </div>
      <div className="min-h-[35vh] flex items-center justify-center py-16">
        <div className="inline-block w-full">
          <MintMain
            candyMachineId={candyMachineId}
            connection={connection}
            txTimeout={txTimeout}
            rpcHost={rpcHost}
          />
        </div>
      </div>
      {walletAddress && (
        <div className="mt-10">
          <NFTCollection />
        </div>
      )}
    </div>
  );
};

export default Index;
