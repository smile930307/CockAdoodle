/* eslint-disable react-hooks/exhaustive-deps */
import { NextPage } from "next"

import Image from "next/image"
import * as anchor from "@project-serum/anchor"
import useWalletBalance from "../context/WalletBalanceProvider"
import React from "react"
import { useRouter } from 'next/router'
import Modal from "../components/Modal"

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

interface IndexStatus {
	isModalOpened:			boolean
	modalContent:			string
	token:					string
	bar:					number
}

const candyMachineId = getCandyMachineId();
const rpcHost = process.env.NEXT_PUBLIC_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const Index: NextPage = () => {
	const router = useRouter()
	const { walletAddress } = useWalletBalance();

	const [status, setStatus] = React.useState<IndexStatus>({
		isModalOpened:		false,
		modalContent:		"first",
		token:				"ether",
		bar:				0
	})

	React.useEffect(() => {
		if(status.modalContent === "second") {
			const interval = setInterval(() => {
				setStatus({...status, bar: (status.bar+1)%3})
			}, 700);
			return () => clearInterval(interval);
		}
	}, [status]);

	const onClose = () => {
		setStatus({...status, isModalOpened: !status.isModalOpened, modalContent: "first"})
	}

	return (
		<>
			<div className="home">
				<div className="home-container">
					<img 
						className="bg-img" 
						width="80%"
						height="80%" 
						alt="BG" 
						src="/images/background.jpg" 
					/>
					<h1>Wft are you looking at!!</h1>
					<div className="edition-container">
						<div>
							<img alt='ethereum-logo' src='/images/ethereum-eth-logo.png' />
							<button 
								className="btn btn-black"
								onClick={()=>setStatus({...status, isModalOpened:true, token: "ether"})}
							>
								Mint ETHEREUM edition
							</button>
						</div>
						<div>
							<img alt='solana-logo' src='/images/solana-sol-logo.png' />
							<button 
								className="btn btn-primary"
								onClick={()=>setStatus({...status, isModalOpened:true, token: "solana"})}
							>Mint Solana edition</button>
						</div>
						<div>
							<button className="btn btn-white-opacity" onClick={() => { router.push('/inspiration'); }}>whats the inspiration!!??</button>
						</div>
					</div>
				</div>
			</div>
			<Modal isOpened={status.isModalOpened} onClose={onClose}>
				{status.modalContent==="first"&&(
					<div className="mint-box">
						<img src="" alt="NFT" width={170} height={160} />
						<p>You can only mint a maximum of <strong>{1}cock</strong></p>
						{status.token==="ether" && (
							<div className="mint-price">
								<span>Mint for <span className="warning">${0}</span> {"ETH"}</span>
								<img src="/images/ethereum-eth-logo.png" alt="ether" width={50} height={100} />
							</div>
						)}
						{status.token==="solana" && (
							<div className="mint-price">
								<span>Mint for <span className="warning">${0}</span> {""}</span>
								<img src="/images/solana-sol-logo.png" alt="solana" width={50} height={100} />
							</div>
						)}
						<p className="mint-cnt"><span className="warning">{1500}</span>/<span className="danger">{6000}</span> Minted</p>
						<button className="btn btn-graorange round btn-block" onClick={()=>setStatus({...status, modalContent:"second"})}>Mint now</button>
					</div>
				)}
				{status.modalContent==="second"&&(
					<div className="mint-box">
						<h2 className="warning">Mint Successful!</h2>
						<p>Share on twitter and get another free min</p>
						<button className="btn btn-info round btn-block middle" onClick={()=>setStatus({...status, modalContent:"third"})}>Share<img width="30" alt='twitter' src='/images/twitter.png' /></button>
						<button className="btn btn-info round btn-block">View on opensea</button>
						<button className="btn btn-mintnow round btn-block" style={{position: "relative"}}>
							Mint now
							<div className="bar">
								<span className={status.bar===0 ? `active`:''}></span>
								<span className={status.bar===1 ? `active`:''}></span>
								<span className={status.bar===2 ? `active`:''}></span>
							</div>
						</button>
					</div>
				)}
				{status.modalContent==="third"&&(
					<div className="mint-box">
						<h2 className="warning">Alright..</h2>
						<p>You can mint another cock :)</p>
						<button className="btn btn-info round btn-block middle">Share<img width="30" alt="twitter" src="/images/twitter.png" /></button>
						<button className="btn btn-graorange round btn-block" onClick={()=>setStatus({...status, modalContent:"fourth"})}>Mint Again</button>
					</div>
				)}
				{status.modalContent==="fourth"&&(
					<div className="mint-box">
						<h2 className="warning">You're through!</h2>
						<p>Mint successful btw, now get tf out and cause chaos!!</p>
						<button className="btn btn-info round btn-block middle">Share<img width="30" alt='twitter' src='/images/twitter.png' /></button>
						<button className="btn btn-info round btn-block">View on opensea</button>
					</div>
				)}
			</Modal>
		</>
	);

};

export default Index;