import Head from "next/head";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { FC, ReactNode } from "react";
import UserContextProvider from "../context/UserContextProvider";
import { WalletBalanceProvider } from "../context/WalletBalanceProvider";
import Layout from "../components/layout/Layout";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "next-themes";

import "react-toastify/dist/ReactToastify.css";
// Use require instead of import, and order matters
require("../public/styles/globals.css");
require("../public/styles/main.css");
require("@solana/wallet-adapter-react-ui/styles.css");

const WalletConnectionProvider = dynamic<{ children: ReactNode }>(
  () =>
    import("../context/WalletConnectionProvider").then(
      ({ WalletConnectionProvider }) => WalletConnectionProvider
    ),
  {
    ssr: false,
  }
);

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>COCKADOODLES</title>
        <meta name="description" content="Candy Machine V2 Demo with Next.js" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/seo.png" />
      </Head>
      <ThemeProvider enableSystem={false} disableTransitionOnChange>
        <WalletConnectionProvider>
          <WalletModalProvider>
            <WalletBalanceProvider>
              <UserContextProvider>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
                <ToastContainer />
              </UserContextProvider>
            </WalletBalanceProvider>
          </WalletModalProvider>
        </WalletConnectionProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
