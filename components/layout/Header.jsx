/* eslint-disable @next/next/link-passhref */
import { useEffect, useState } from "react";
import Link from "next/link";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useUserContext } from "../../context/UserContextProvider";
import { FaWallet } from "react-icons/fa";
import useWalletBalance from "../../context/WalletBalanceProvider";
import siteData from "../../data/siteData";
import Image from "next/image";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import Modal from "../Modal";

export default function Header() {
	const { menuOpen, setMenuOpen } = useUserContext();
	const { walletAddress } = useWalletBalance();

	const [status, setStatus] = useState({
		openMenu:   false,
		isModal:    false
	});

	const shortWalletAddress = walletAddress.slice(0, 4) + ".." + walletAddress.slice(-4);

	const onClose = () => {
		setStatus({...status, isModal: !status.isModal})
	}

	useEffect(()=>{
		setStatus({openMenu: false});
	}, []);

	return (
		<header className={`header ${status.openMenu?"open-menu":""}`}>
			<Link href="/">
				<img className="logo" alt='logo' src='/images/logo.svg' />
			</Link>
			<span className="hamburger" onClick={()=>setStatus({...status, openMenu: !status.openMenu})}>
				<span></span>
			</span>
			<ul className="menu">
				<li>
					<button onClick={()=>setStatus({...status, isModal:true})}>
						<img alt='discord' src='/images/discord.png' />
					</button>
				</li>
				<li>
					<Link href="/">
						<img alt='twitter' src='/images/twitter.png' />
					</Link>
				</li>
				<button className="btn btn-white">{walletAddress ? 'Connected' : 'Connect Wallet'}</button>
			</ul>
			<Modal isOpened={status.isModal} onClose={onClose}>
				<div className="mint-box">
					<h2 className="warning">We don't have a fucking discord!</h2>
					<p>You can follow our twitter btw :)</p>
					<button className="btn btn-info round btn-block middle">Follow<img width="30" alt='twitter' src='/images/twitter.png' /></button>
				</div>
			</Modal>
		</header>
	);
}
