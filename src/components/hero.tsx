import Tools from "./tools";
import Projects from "./projects";
import Img from "../assets/react.svg";
import { GoLocation } from "react-icons/go";
import Spotify from "react-spotify-embed";
const hero = () => {
  return (
    <main className="mx-auto mt-16 max-w-4xl px-6">
      <img
        className="w-20 lg:w-24 aspect-square object-cover rounded-lg"
        src={Img}
        alt=""
      />
      <p className="text-xs text-neutral-600 mt-3 flex">
        <GoLocation className="text-emerald-500" />
        Nigeria
      </p>
      <h1 className="text-3xl lg:text-3xl font-bold my-4">Hi, I'm Philip 👋</h1>
      <p className="text-sm">
        I'm a <span className="text-[#10b981]">Software Engineering</span>{" "}
        student somewhere in England and a software developer. I enjoy{" "}
        <span className="text-[#10b981]">building</span> things that run on
        computers (for fun and/or to use) and exploring a lot (or a bit) of
        other tools, languages etc while doing that.
        <br />
      </p>

      <section>
        <h2 className="text-2xl font-bold my-4">What I'm listening to</h2>
        <Spotify link="https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS" />
      </section>

      <Tools />
      <Projects />
    </main>
  );
};

export default hero;