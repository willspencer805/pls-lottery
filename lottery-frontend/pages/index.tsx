import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import Faqs from "../components/Faqs";
import Amount from "../components/Amount";
import styles from "../styles/Home.module.css";
import SubmitButton from "../components/SubmitButton";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ConnectButton />

        <h1 className="text-3xl font-extrabold text-gray-900 justify-center sm:flex">
          Welcome to the PLS Lottery
        </h1>

        <p className={styles.description}>
          Get started by purchasing some entry tokens
        </p>
        {/* 
        <div className={styles.grid}>
          <a
            href="https://eyus.sharepoint.com/sites/BlockchainGuild2/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FBlockchainGuild2%2FShared%20Documents%2FBlockchain%20Guild%20Sessions%2FPractical%20Learning%20Series&viewid=b6525d05%2D7394%2D484d%2Db063%2Dbde3c9bc19e0"
            className={styles.card}
          >
            <h2>Practical Learning Series Site &rarr;</h2>
            <p>Find past sessions and learn how to interact!</p>
          </a>

          <a href="https://goerlifaucet.com/" className={styles.card}>
            <h2>Goerli Faucet &rarr;</h2>
            <p>Get some Goerli test Eth to participate!</p>
          </a>
        </div> */}
        <Amount />
        <Faqs />
      </main>

      <footer className={styles.footer}>
        <a href="https://rainbow.me" target="_blank" rel="noopener noreferrer">
          Made with ❤️ by your frens at 🌈
        </a>
      </footer>
    </div>
  );
};

export default Home;
