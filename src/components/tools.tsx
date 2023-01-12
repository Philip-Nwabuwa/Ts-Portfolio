import { FaReact, FaVuejs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";
import { TbBrandFirebase } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
const tools = () => {
  return (
    <section className="mt-[2rem]">
      <h2 className="text-2xl font-bold my-4">Tools I use</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <FaGitAlt className="w-8 h-8 hover:text-[#F1502F]" />
          <div className="ml-4">
            <h3 className="text-lg font-bold">Git</h3>
          </div>
        </div>

        <div className="flex items-center">
          <FaReact className="w-8 h-8 hover:text-[#61DBFB]" />
          <div className="ml-4">
            <h3 className="text-lg font-bold">React</h3>
          </div>
        </div>

        <div className="flex items-center cursor-pointer">
          <SiTailwindcss className="w-8 h-8 hover:text-blue-400" />
          <div className="ml-4">
            <h3 className="text-lg font-bold">Tailwind</h3>
          </div>
        </div>

        <div className="flex items-center">
          <SiTypescript className="w-8 h-8 hover:text-[#202088]" />
          <div className="ml-4">
            <h3 className="text-lg font-bold">Typescript</h3>
          </div>
        </div>

        <div className="flex items-center">
          <SiNextdotjs className="w-8 h-8 hover:text-gray-100" />
          <div className="ml-4">
            <h3 className="text-lg font-bold">Next.Js</h3>
          </div>
        </div>

        <div className="flex items-center">
          <FaVuejs className="w-8 h-8 hover:text-[#41B883]" />
          <div className="ml-4">
            <h3 className="text-lg font-bold">Vue</h3>
          </div>
        </div>

        <div className="flex items-center">
          <TbBrandFirebase className="w-8 h-8 hover:text-[#FFA611]" />
          <div className="ml-4">
            <h3 className="text-lg font-bold">Firebase</h3>
          </div>
        </div>

        <div className="flex items-center">
          <SiRedux className="w-8 h-8 hover:text-[#764abc]" />
          <div className="ml-4">
            <h3 className="text-lg font-bold">Redux</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default tools;
