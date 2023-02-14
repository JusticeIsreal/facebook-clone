import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import HeaderIcon from "../components/HeaderIcon";

import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  VievGridIcon,
} from "@heroicons/react/solid";

import {
  FlagIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

// React icons
import {
  FaPlayCircle,
  FaFacebookMessenger,
  FaChevronDown,
} from "react-icons/fa";
import { HiViewGrid } from "react-icons/hi";
import { BsPlayBtn } from "react-icons/bs";

function Header() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div
      className="sticky top-0 x-50 bg-white flex items-center p-2 lg:px5 shadow-md"
      style={{ justifyContent: "space-between" }}
    >
      {/* left */}

      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          alt="logo"
          width={40}
          height={40}
        ></Image>
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600 " />
          <input
            type="text"
            placeholder="Search facebook"
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
          />
        </div>
      </div>
      {/* center */}

      <div className="hidden lg:inline-flex  justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={BsPlayBtn} />
          <HeaderIcon Icon={UserGroupIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
        </div>
      </div>
      {/* right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <HiViewGrid className="icon " />
        <FaFacebookMessenger className="icon" />
        <BellIcon className="icon" />
        {/* <FaChevronDown className="icon inline-flex md:hidden " /> */}
        <Image
          className="rounded-full cursor-pointer"
          src={session.user.image}
          alt="logo"
          width={40}
          height={40}
          onClick={signOut}
        ></Image>
        <p className="hidden xl:inline-flex font-semibold whitespace-nowrap pr-3">
          {session.user.name}
        </p>
      </div>
    </div>
  );
}

export default Header;
