import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRef, useState } from "react";
import { db, storage } from "../Firebase.js";
import { addDoc, serverTimestamp } from "firebase/firestore";
// ICONS
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";

// import { initializeApp } from "firebase/app";
import { collection, doc, updateDoc } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
function InputBox() {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  // post function
  const sendPost = async (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    // push input to firebase
    const docRef = await addDoc(collection(db, "posts"), {
      message: inputRef.current.value,
      name: session.user.name,
      image: session.user.image,
      timestamp: serverTimestamp(),
    });

    if (imageToPost) {
      // upload image to firebase storage
      const imageRef = ref(storage, `post/${docRef.id}`);
      await uploadString(imageRef, imageToPost, "data_url");
      const postImageUrl = await getDownloadURL(imageRef);
      // update the post with the image url
      await updateDoc(doc(db, "posts", docRef.id), {
        postImage: postImageUrl,
      });
      removeImage();
    }

    inputRef.current.value = "";
  };

  // image upload function
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className=" rounded-full "
          src={session.user.image}
          alt="profile pic"
          width={40}
          height={40}
          layout="fixed"
        ></Image>
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            ref={inputRef}
            placeholder={`What's on your mind ${session.user.name} ?`}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img
              src={imageToPost}
              alt="image"
              className="h-10 object-contain"
            />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500 " />
          <p className="text-xs sm:text-sm xl:text-base ">Live Video</p>
        </div>
        <div
          className="inputIcon"
          onClick={() => filePickerRef.current.click()}
        >
          <CameraIcon className="h-7 text-green-500 " />
          <p className="text-xs sm:text-sm xl:text-base ">Photo/Video</p>
          <input
            type="file"
            hidden
            onChange={addImageToPost}
            ref={filePickerRef}
          />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-500 " />
          <p className="text-xs sm:text-sm xl:text-base ">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
