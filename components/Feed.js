import Stories from "../components/Stories";
import InputBox from "../components/InputBox";
import Posts from "../components/Posts";

function feed() {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
      <div className="mx-auto max-wmd md:max-w-lg lg:max-w-2xl">
        {/* storys */}

        <Stories />
        {/* input box */}
        <InputBox />
        {/* post */}
        <Posts />
      </div>
    </div>
  );
}

export default feed;
