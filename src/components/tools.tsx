import { FaReact, FaVuejs } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
const tools = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold my-4">Tools I use</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <SiVisualstudiocode className="w-5 h-5" />
          <div className="ml-4">
            <h3 className="text-lg font-bold">Visual Studio Code</h3>
          </div>
        </div>

        <div className="flex items-center">
          <FaReact className="w-5 h-5" />
          <div className="ml-4">
            <h3 className="text-lg font-bold">React</h3>
          </div>
        </div>

        <div className="flex items-center text-white hover:text-blue-400 cursor-pointer">
          <SiTailwindcss className="w-5 h-5" />
          <div className="ml-4">
            <h3 className="text-lg font-bold">Tailwind</h3>
          </div>
        </div>

        <div className="flex items-center">
          <SiTypescript className="w-5 h-5" />
          <div className="ml-4">
            <h3 className="text-lg font-bold">Typescript</h3>
          </div>
        </div>

        <div className="flex items-center">
          <SiNextdotjs className="w-5 h-5" />
          <div className="ml-4">
            <h3 className="text-lg font-bold">Next.Js</h3>
          </div>
        </div>

        <div className="flex items-center">
          <FaVuejs className="w-5 h-5" />
          <div className="ml-4">
            <h3 className="text-lg font-bold">Vue</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default tools;
