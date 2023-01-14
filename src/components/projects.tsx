import IMG from "../assets/Github-clone.png";
import IMG2 from "../assets/random-user-24.png";
import IMG3 from "../assets/calculator-app.png";
const projects = () => {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-1">Projects</h2>
      <p className="text-[#737373]">
        During my free time, I like to hack on things that I find interesting
        and/or would use. Here are a couple of them, you can find other random
        things I build on my GitHub page.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mt-5">
        <div className="flex flex-col gap-2">
          <div className="relative w-full border border-neutral-900 aspect-[1.6] overflow-hidden rounded-lg cursor-pointer">
            <img
              src={IMG}
              className="w-full h-full hover:scale-125 object-cover object-left transition-all"
              alt=""
            />
          </div>
          <h3>Github Clone 2.1</h3>
          <p className="text-sm text-[#737373]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            quod quidem odio, aliquam tempora voluptatibus ipsam quis illo
            repellat numquam.
          </p>
          <div className="flex items-center justify-between mt-auto">
            <div className="w-max bg-neutral-900 text-neutral-500 text-[10px] font-medium px-2.5 py-1 rounded drop-shadow-md">
              Beta
            </div>
            <a
              href="https://github-clone-24.web.app"
              target="_blank"
              className="block w-max text-xs font-medium"
            >
              Visit Website
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="relative w-full border border-neutral-900 aspect-[1.6] overflow-hidden rounded-lg cursor-pointer">
            <img
              src={IMG2}
              className="w-full h-full hover:scale-125 object-cover object-left transition-all"
              alt=""
            />
          </div>
          <h3>Random User Generator</h3>
          <p className="text-sm text-[#737373]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            quod quidem odio, aliquam tempora voluptatibus ipsam quis illo
            repellat numquam.
          </p>
          <div className="flex items-center justify-between mt-auto">
            <div className="w-max bg-neutral-900 text-neutral-500 text-[10px] font-medium px-2.5 py-1 rounded drop-shadow-md">
              Beta
            </div>
            <a
              href="https://random-user-24.web.app"
              target="_blank"
              className="block w-max text-xs font-medium"
            >
              Visit Website
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="relative w-full border border-neutral-900 aspect-[1.6] overflow-hidden rounded-lg cursor-pointer">
            <img
              src={IMG3}
              className="w-full h-full hover:scale-125 object-cover object-left transition-all"
              alt=""
            />
          </div>
          <h3>Calculator App</h3>
          <p className="text-sm text-[#737373]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            quod quidem odio, aliquam tempora voluptatibus ipsam quis illo
            repellat numquam.
          </p>
          <div className="flex items-center justify-between mt-auto">
            <div className="w-max bg-neutral-900 text-neutral-500 text-[10px] font-medium px-2.5 py-1 rounded drop-shadow-md">
              prodution
            </div>
            <a
              href="https://calculator-app.philipnwabuwa.repl.co"
              target="_blank"
              className="block w-max text-xs font-medium"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default projects;
