import { NextPage } from "next";

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
    <div className="section">
		<h1>why are they so angry?!!</h1>

		<div className="story-section">
			<div className="story-section">
				<p>Sometime ag0, an nft creator (kukuruku) and an  artist made plans to  create a collection together</p>
				<img
					width='100%'
					height='auto'         
					alt='logo'
					src='/images/placeholder-image.png'
				/>
			</div>
			<div className="story-section">
				<p>but the artist backstabbed kukuruku aand released the art with someone else</p>
				<img
					width='100%'
					height='auto'         
					alt='logo'
					src='/images/placeholder-image.png'
				/>
			</div>
			<div className="story-section">
				<p>angry and pained, kukuruku created a  set of  angry cocks to get his revenge  on the bitch that betrayed him</p>
				<img
					width='100%'
					height='auto'         
					alt='logo'
					src='/images/placeholder-image.png'
				/>
			</div>
			<div className="story-section">
				<p>and sent them into the blockchains to cause havoc and find  the bitch !! who double-crossed him!</p>
				<img
					width='100%'
					height='auto'         
					alt='logo'
					src='/images/placeholder-image.png'
				/>
			</div>
		</div>
		<h1>The motherfucking end!!</h1>
		<h2>The motherfucking end!!</h2>
    </div>
  );

};

export default Inspiration;