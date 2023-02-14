import Image from "next/image";
function StoryCard({ name, src, profile }) {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-2 left-1"
        src={profile}
        alt="profile pic"
        width={40}
        height={40}
        style={{ height: "50px", width: "50px", border: "5px solid #2d65f4" }}
      ></Image>
      <Image
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        src={src}
        alt="profile pic"
        layout="fill"
      ></Image>
    </div>
  );
}

export default StoryCard;
