import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const navbar = () => {
  return (
    <nav className="w-screen fixed top-0 left-0 bg-black bg-opacity-70 backdrop-blur-lg border-b border-b-neutral-900 flex items-center justify-center gap-5 py-2 px-4 z-[99999]">
      <a
        href="#"
        target="_blank"
        className="text-3xl font-medium hover:text-[#1DA1F2] "
      >
        <AiOutlineTwitter className="hover:scale-125 transition-all" />
      </a>
      <a
        href="https://github.com/Philip-Nwabuwa"
        target="_blank"
        className="text-3xl font-medium"
      >
        <AiFillGithub className="hover:scale-125 transition-all" />
      </a>
      <a
        href="mailto:philipnwabuwa@gmail.com"
        target="_blank"
        className="text-3xl font-medium"
      >
        <MdEmail className="hover:scale-125 transition-all" />
      </a>
      <a
        href="#"
        target="_blank"
        className="text-3xl font-medium hover:text-[#0e76a8] "
      >
        <FaLinkedin className="hover:scale-125 transition-all" />
      </a>
    </nav>
  );
};

export default navbar;
