/* eslint-disable @next/next/link-passhref */
import { useEffect } from "react";
import Link from "next/link";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useUserContext } from "../../context/UserContextProvider";
import { FaWallet } from "react-icons/fa";
import useWalletBalance from "../../context/WalletBalanceProvider";
import siteData from "../../data/siteData";
import Image from "next/image";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

export default function Header() {
  const { menuOpen, setMenuOpen } = useUserContext();
  const { walletAddress } = useWalletBalance();

  const shortWalletAddress =
    walletAddress.slice(0, 4) + ".." + walletAddress.slice(-4);

  return (
    <header className="header">
      {/* <div className="menu">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="space-y-1.5 block"
        >
          <div className="w-8 sm:w-10 h-1 sm:h-1.5 bg-pageText"></div>
          <div className="w-8 sm:w-10 h-1 sm:h-1.5 bg-pageText"></div>
          <div className="w-8 sm:w-10 h-1 sm:h-1.5 bg-pageText"></div>
        </button>
      </div> */}
      <div className="logo">
        <Link href="/">
          <Image
            width='314'
            height='74'
            alt='logo'
            src='/logo.svg'
          />
        </Link>
      </div>
      <div className="logo-right">
        <div className="twitter mr-5">
          <Link href="/">
            <Image
              width='50'
              height='50'
              alt='twitter'
              src='/twitter.png'
            />
          </Link>
        </div>
        <div className="discord mr-5">
          <Link href="/">
            <Image
              width='50'
              height='50'
              alt='discord'
              src='/discord.png'
            />
          </Link>
        </div>
        <div className="wallet">
          {/* <WalletMultiButton startIcon={null} className="btn-wallet">
            <div className="relative btn-wallet-connect">
              {walletAddress ? (
                <span >
                  Connected
                </span>
              ) : (
                <span >
                  Connect
                </span>
              )}
            </div>
          </WalletMultiButton> */}
          <WalletMultiButton className="btn-connect btn-reverse m-auto">
              Connect Wallet
            </WalletMultiButton>
        </div>
      </div>
    </header>
  );
}
