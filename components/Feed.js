import Stories from "../components/Stories";

function feed() {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
      <div className="mx-auto max-wmd md:max-w-lg lg:max-w-2xl">
        {/* storys */}

        <Stories />
        {/* input box */}
        {/* post */}
      </div>
    </div>
  );
}

export default feed;
