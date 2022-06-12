/* eslint-disable react-hooks/exhaustive-deps */
import { NextPage } from "next";

import Image from "next/image";
import * as anchor from "@project-serum/anchor";
import useWalletBalance from "../context/WalletBalanceProvider";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import Modal from 'react-modal';


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

const customStyles = {
	content: {
	  top: '50%',
	  left: '50%',
	  right: 'auto',
	  bottom: 'auto',
	  marginRight: '-50%',
	  transform: 'translate(-50%, -50%)',
	},
  };

const Index: NextPage = () => {
	const router = useRouter()
	const { walletAddress } = useWalletBalance();

	const [modalIsOpen, setIsOpen] = useState(false);


	useEffect(() => {
		// Update the document title using the browser API
	});

	return (
		<>
			<div className="h-full">
				<div className="min-h-[30vh] flex items-center justify-center py-16" style={{ fontFamily: 'Bangers', fontStyle: 'normal', fontWeight: '400', fontSize: '96px', lineHeight: '102px', color: '#FFD700', WebkitTextStrokeWidth: '5px', WebkitTextStrokeColor: '#000000' }}>
					wtf are you looking at!!
				</div>
				<div className="min-h-[35vh] flex items-center justify-center py-16">
					<div className="eth-mint mr-10" style={{ textAlign: "center" }}>
						<Image
							width='150'
							height='150'
							alt='logo'
							src='/ethereum-eth-logo.png' />
						<div>
							<button className="eth-mint-btn mt-5" onClick={() => { setIsOpen(true); }}>Mint ETHEREUM edition</button>
						</div>

					</div>
					<div className="sol-mint ml-10" style={{ textAlign: "center" }}>
						<Image
							width='150'
							height='150'
							alt='logo'
							src='/solana-sol-logo.png' />
						<div>
							<button className="sol-mint-btn mt-5">Mint Solana edition</button>
						</div>
					</div>
				</div>
				<div style={{ textAlign: "center" }}>
					<button className="bottom-btn" onClick={() => { router.push('/inspiration'); }}>whats the inspiration!!??</button>
				</div>
				{/*
        {walletAddress && (
          <div className="mt-10">
            <NFTCollection />
          </div>
        )} */}

			</div>
			<Modal
				isOpen={modalIsOpen}
				// onAfterOpen={afterOpenModal}
				// onRequestClose={closeModal}
				style={customStyles}  
				contentLabel="Example Modal"
			>
				<h2>Hello</h2>
				<button onClick={() => { setIsOpen(false); }}>close</button>
				<div>I am a modal</div>
				<form>
					<input />
					<button>tab navigation</button>
					<button>stays</button>
					<button>inside</button>
					<button>the modal</button>
				</form>
			</Modal>
		</>
	);

};

export default Index;