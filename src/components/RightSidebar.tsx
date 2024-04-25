import { BsSearch } from "react-icons/bs";

export function RightSidebar() {
  return (
    <section className="sticky  top-4 flex flex-col items-stretch w-[27%] h-screen px-6 mt-2">
      <div>
        <div className="relative w-full h-full">
          <input
            id="searchBox"
            type="text"
            placeholder="Search"
            className="outline-none peer focus:border focus:border-primary focus:bg-white bg-slate-200/50 w-full h-full rounded-3xl p-3 pl-10"
          />
          <label
            htmlFor="searchBox"
            className="absolute flex items-center justify-center peer-focus:text-primary text-gray-500 top-0 left-0 h-full p-4"
          >
            <BsSearch className="w-5 h-5" />
          </label>
        </div>
      </div>
      <div className="flex flex-col rounded-xl bg-slate-200/30 my-4">
        <h3 className="font-bold text-2xl px-4 my-4">{"What's happening"}</h3>
        <div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="p-4 hover:bg-slate-200/50 last:rounded-b-xl transition duration-200"
            >
              <div className="font-bold text-lg">{`#trending ${i + 1}`}</div>
              <div className="text-xs text-gray-500">34.5k posts</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col rounded-xl bg-slate-200/30 my-4">
        <h3 className="font-bold text-2xl px-4 my-4">{"Who to follow"}</h3>
        <div>
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center place-content-between p-4 hover:bg-slate-200/50 last:rounded-b-xl transition duration-200"
            >
              <div className="flex items-center">
                <div className="10 w-10 h-10 bg-slate-400 rounded-full"></div>
                <div className="text-sm ml-2">
                  <div className="font-bold">Other User</div>
                  <div className="text-gray-500">@otheruser1232</div>
                </div>
              </div>
              <div>
                <button className="rounded-full px-5 py-2 bg-black text-sm font-bold text-white text-center hover:bg-opacity-80 transition duration-200">
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
