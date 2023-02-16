import { Skeleton } from "@mantine/core";
import SinglePost from "../components/SinglePost";
import { useState, useEffect } from "react";
import {
  onSnapshot,
  collection,
  getFirestore,
  query,
  where,
  orderBy,
} from "firebase/firestore";

function Posts() {
  const [postData, setPostData] = useState([]);
  const db = getFirestore();
  const colRef = collection(db, "posts");

  const postDisplay = query(colRef, orderBy("timestamp", "desc"));

  useEffect(() => {
    onSnapshot(postDisplay, (snapshot) => {
      let allPosts = [];
      snapshot.docs.forEach((doc) => {
        allPosts.push({ ...doc.data(), id: doc.id });
      });
      setPostData(allPosts);
    });
  }, []);

  return (
    <div>
      {postData &&
        postData.map((post) => {
          return (
            <SinglePost
              key={post.id}
              name={post.name}
              message={post.message}
              email={post.email}
              timestamp={post.timestamp}
              image={post.image}
              postImage={post.postImage}
            />
          );
        })}
    </div>
  );
}

export default Posts;
