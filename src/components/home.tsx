import Tools from "./tools";
import Projects from "./projects";
import Contact from "./contact";
import Img from "../assets/me.jpg";
import { GoLocation } from "react-icons/go";
import { HiOutlineDocumentDownload } from "react-icons/hi";
// import Spotify from "react-spotify-embed";
const main = () => {
  return (
    <main className="mx-auto mt-16 max-w-[65rem] px-6">
      <img
        className="w-20 lg:w-24 aspect-square object-cover rounded-lg"
        src={Img}
        alt="Philip's Avatar"
      />
      <p className="text-xs text-neutral-600 mt-3 flex">
        <GoLocation className="text-emerald-500 mr-1" />
        Nigeria, Asaba
      </p>
      <h1 className="text-3xl lg:text-3xl font-bold my-4 font-Dancing ">
        Hi, I'm Philip 👋
      </h1>
      <p className="text-lg text-[#737373]">
        I'm a <span className="text-[#10b981]">Front-End Developer</span> in
        Nigeria. I enjoy <span className="text-[#10b981]">building</span> things
        that run on computers (for fun and/or to use) and exploring a lot (or a
        bit) of other tools, languages etc while doing that.
        <br />
      </p>

      <section className="mt-8 flex justify-center items-center">
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1llzmwlB1BURspcaSGzheHIYxJUZJEgbR/view?usp=drive_link"
        >
          <div className="flex items-center px-10 py-4 rounded-r-3xl rounded-l-3xl border-solid border-white border-[3px] hover:bg-white hover:text-black">
            <p className="font-bold">My Resume</p>
            <HiOutlineDocumentDownload className="ml-2 text-3xl" />
          </div>
        </a>
      </section>

      {/* <section className="mt-8">
        <h2 className="text-2xl font-bold my-4">Recent Playlist</h2>
        <Spotify
          className="w-full"
          link="https://open.spotify.com/playlist/0tlvJ6X2wEPpLD8zNqpk8t?si=CZvWKVjlRa-T1JgSAl3OUw"
        />
      </section> */}

      <Tools />
      <Projects />
      <Contact />
    </main>
  );
};

export default main;
