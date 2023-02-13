import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {/* header */}
        <Header />
        {/* sidebar */}
        {/* feed */}
        {/* widget */}
      </div>
    </div>
  );
};

export default Home;
