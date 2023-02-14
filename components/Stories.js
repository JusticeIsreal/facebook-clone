import StoryCard from "../components/StoryCard";
const stories = [
  {
    name: "Justice Isreal",
    src: "https://res.cloudinary.com/isreal/image/upload/v1676404036/Facebook%20clone/1671744344371_aty5w5.jpg",
    profile:
      "https://res.cloudinary.com/isreal/image/upload/v1665146585/IMG_4593_qmo1kq.jpg",
  },
  {
    name: "Jennifer Iyabor",
    src: "https://res.cloudinary.com/isreal/image/upload/v1676404004/Facebook%20clone/IMG_1449_2_e4m0zq.jpg",
    profile:
      "https://res.cloudinary.com/isreal/image/upload/v1665121683/IMG_7686_1_tq8mav.jpg",
  },
  {
    name: "Micheal Adebayo",
    src: "https://res.cloudinary.com/isreal/image/upload/v1676404014/Facebook%20clone/IMG_5504_2_bcpyt6.jpg",
    profile:
      "https://res.cloudinary.com/isreal/image/upload/v1676404040/Facebook%20clone/1655630846604_jibplr.jpg",
  },
  {
    name: "Kenneth Aladi",
    src: "https://res.cloudinary.com/isreal/image/upload/v1676403975/Facebook%20clone/cfcb3477-6307-4da9-a39f-43687c20e0f7_2_xs9inh.jpg",
    profile:
      "https://res.cloudinary.com/isreal/image/upload/v1676404032/Facebook%20clone/1672219806706_cf9p4y.jpg",
  },
  {
    name: "Lucky William",
    src: "https://res.cloudinary.com/isreal/image/upload/v1676404854/Facebook%20clone/302144959_1702253443482707_8027895717905184442_n_eebod7.jpg",
    profile:
      "https://res.cloudinary.com/isreal/image/upload/v1676404044/Facebook%20clone/1673085637566_fxxw0v.jpg",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
      ))}
    </div>
  );
}

export default Stories;
