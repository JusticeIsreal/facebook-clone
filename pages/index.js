// import type { NextPage } from "next";
import Head from "next/head";
import Login from "../components/Login";
import Header from "../components/Header";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {session ? (
        <div>
          {/* header */}
          <Header />
          <button onClick={signOut}>logout</button>
          {/* sidebar */}
          {/* feed */}
          {/* widget */}
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}
