import Image from "next/image";

function Contact({ profile, name }) {
  return (
    <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
      <Image
        className=" rounded-full"
        src={profile}
        alt="profile pic"
        width={40}
        height={40}
        style={{ height: "50px", width: "50px" }}
      ></Image>
      <p>{name}</p>
      <div
        className=" bg-green-400 h-3 w-3  rounded-full"
        style={{ position: "absolute", top: "5px", left: "30px" }}
      ></div>
    </div>
  );
}

export default Contact;
