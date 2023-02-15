import Stories from "../components/Stories";
import InputBox from "../components/InputBox";

function feed() {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
      <div className="mx-auto max-wmd md:max-w-lg lg:max-w-2xl">
        {/* storys */}

        <Stories />
        {/* input box */}
        <InputBox />
        {/* post */}
      </div>
    </div>
  );
}

export default feed;
