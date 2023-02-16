// import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import Login from "../components/Login";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Feed from "../components/Feed";
import Widget from "../components/Widget";

import { useSession, signIn, signOut } from "next-auth/react";

import { db, storage } from "/Firebase";
import {
  addDoc,
  serverTimestamp,
  collection,
  doc,
  updateDoc,
  getFirestore,
  query,
  where,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
export default function Home() {
  const { data: session } = useSession();
  const [isSessionSaved, setIsSessionSaved] = useState(false);

  console.log(session);
  const saveSession = async () => {
    if (session && !isSessionSaved) {
      const usersRef = collection(db, "signedInUsers");
      const q = query(usersRef, where("name", "==", session.user.name));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        await addDoc(usersRef, {
          name: session.user.name,
          time: serverTimestamp(),
        });
        console.log("User added to signedInUsers collection");
        setIsSessionSaved(true);
      } else {
        console.log("User already exists in signedInUsers collection");
        setIsSessionSaved(true);
      }
    }
  };

  useEffect(() => {
    saveSession();
  }, [session]);

  return (
    <div>
      <Head>
        <meta
          property="og:image"
          content="https://links.papareact.com/5me"
        ></meta>
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
            <Widget />
          </main>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}
