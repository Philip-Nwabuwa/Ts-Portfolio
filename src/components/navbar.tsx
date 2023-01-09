import { AiOutlineTwitter, AiFillGithub, AiOutlineMail } from "react-icons/ai";

const navbar = () => {
  return (
    <nav className="w-screen fixed top-0 left-0 bg-black bg-opacity-70 backdrop-blur-lg border-b border-b-neutral-900 flex items-center justify-center gap-4 py-2 px-4 z-[99999]">
      <a href="#" target="_blank" className="text-lg font-medium">
        <AiOutlineTwitter />
      </a>
      <a href="#" target="_blank">
        <AiFillGithub />
      </a>
      <a href="#" target="_blank">
        <AiOutlineMail />
      </a>
    </nav>
  );
};

export default navbar;
