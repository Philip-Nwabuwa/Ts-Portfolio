import Tools from "./tools";
import Projects from "./projects";
import Img from "../assets/react.svg";
import { GoLocation } from "react-icons/go";
import Spotify from "react-spotify-embed";
const hero = () => {
  return (
    <main className="mx-auto mt-16 max-w-[65rem] px-6">
      <img
        className="w-20 lg:w-24 aspect-square object-cover rounded-lg"
        src={Img}
        alt=""
      />
      <p className="text-xs text-neutral-600 mt-3 flex">
        <GoLocation className="text-emerald-500 mr-1" />
        Nigeria, Asaba
      </p>
      <h1 className="text-3xl lg:text-3xl font-bold my-4 font-HachiMaruPop ">
        Hi, I'm Philip 👋
      </h1>
      <p className="text-lg text-[#737373]">
        I'm a <span className="text-[#10b981]">Front-End Developer</span> in
        Nigeria. I enjoy <span className="text-[#10b981]">building</span> things
        that run on computers (for fun and/or to use) and exploring a lot (or a
        bit) of other tools, languages etc while doing that.
        <br />
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-bold my-4">Recent Playlist</h2>
        <Spotify
          className="w-full"
          link="https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS"
        />
      </section>

      <Tools />
      <Projects />
    </main>
  );
};

export default hero;
