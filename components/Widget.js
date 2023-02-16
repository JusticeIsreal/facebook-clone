import Contact from "../components/Contact";
const contacts = [
  {
    name: "Justice Isreal",
    profile:
      "https://res.cloudinary.com/isreal/image/upload/v1665146585/IMG_4593_qmo1kq.jpg",
  },
  {
    name: "Jennifer Iyabor",
    profile:
      "https://res.cloudinary.com/isreal/image/upload/v1665121683/IMG_7686_1_tq8mav.jpg",
  },
  {
    name: "Mike Adebayo",
    profile:
      "https://res.cloudinary.com/isreal/image/upload/v1676404040/Facebook%20clone/1655630846604_jibplr.jpg",
  },
  {
    name: "Kenneth Aladi",
    profile:
      "https://res.cloudinary.com/isreal/image/upload/v1676404032/Facebook%20clone/1672219806706_cf9p4y.jpg",
  },
  {
    name: "Lucky William",
    profile:
      "https://res.cloudinary.com/isreal/image/upload/v1676404044/Facebook%20clone/1673085637566_fxxw0v.jpg",
  },
];
import Image from "next/image";
import { useSession } from "next-auth/react";
// icons
import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
function Widget() {
  const { data: session } = useSession();
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
        <Image
          className=" rounded-full"
          src={session.user.image}
          alt="profile pic"
          width={40}
          height={40}
          style={{ height: "50px", width: "50px" }}
        ></Image>
        <p>{session.user.name}</p>
        <div
          className=" bg-green-400 h-3 w-3  rounded-full"
          style={{ position: "absolute", top: "5px", left: "30px" }}
        ></div>
      </div>
      {contacts.map((item) => {
        return <Contact key={item.profile} {...item} />;
      })}
    </div>
  );
}

export default Widget;
