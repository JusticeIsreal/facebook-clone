// import type { NextPage } from "next";
import Head from "next/head";
import Login from "../components/Login";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Feed from "../components/Feed";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>Facebook Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {session ? (
        <div>
          {/* header */}
          <Header />

          <main className="flex" style={{ background: "#f5f3f3" }}>
            {" "}
            {/* sidebar */}
            <SideBar />
            {/* feed */}
            <Feed />
            {/* widget */}
          </main>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}
