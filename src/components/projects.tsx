import IMG from "../assets/Github-clone.png";
import IMG2 from "../assets/random-user-24.png";
import IMG3 from "../assets/OpenAI.png";
import IMG4 from "../assets/dev-chat-24.png";

const projects = () => {
  const projectList = [
    {
      id: 1,
      name: "Dev Chat",
      image: IMG4,
      meta: "beta",
      WebsiteLink: "https://dev-chat-24.vercel.app",
      githubLink: "https://github.com/Philip-Nwabuwa/DEV-Chat",
      description:
        "A chat app built for developers, built with Next.js, TailwindCSS,Redis for the database, and Next-auth for authentication.",
    },
    {
      id: 2,
      name: "Github Clone 2.1",
      image: IMG,
      meta: "beta",
      WebsiteLink: "https://github-clone-24.web.app",
      githubLink: "https://github.com/Philip-Nwabuwa/Alt-School-Exam-Project",
      description:
        "A GitHub clone built with React, Tailwind CSS, and Firebase. It allows you to search for users and view their profiles.",
    },
    {
      id: 3,
      name: "Random User Generator",
      image: IMG2,
      meta: "beta",
      WebsiteLink: "https://random-user-24.web.app",
      githubLink: "https://github.com/Philip-Nwabuwa/User-Generator",
      description:
        "A random user generator built with React, Tailwind CSS, and Firebase. It allows you to generate random users and view their profiles.",
    },
    {
      id: 4,
      name: "Chat GPT Clone",
      image: IMG3,
      meta: "production",
      WebsiteLink: "https://open-ai-clone-philip-nwabuwa.vercel.app/",
      githubLink: "https://github.com/Philip-Nwabuwa/Open_AI_Clone",
      description:
        "My chat GPT clone is a chatbot that uses natural language processing to simulate human conversation. It can be used to provide automated customer service, answer questions, and provide personalized recommendations.",
    },
  ];
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-1">Projects</h2>
      <p className="text-[#737373]">
        During my free time, I like to hack on things that I find interesting
        and/or would use. Here are a couple of them, you can find other random
        things I build on my GitHub page.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mt-5">
        {projectList.map((option) => {
          return (
            <div className="flex flex-col gap-2">
              <div className="relative w-full border border-neutral-900 aspect-[1.6] overflow-hidden rounded-lg cursor-pointer">
                <img
                  src={option.image}
                  className="w-full h-full hover:scale-125 object-cover object-left transition-all"
                  alt=""
                />
              </div>
              <h3>{option.name}</h3>
              <p className="text-sm text-[#737373]">{option.description}</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="w-max bg-neutral-900 text-neutral-500 text-[10px] font-medium px-2.5 py-1 rounded drop-shadow-md">
                  {option.meta}
                </div>
                <div className="block w-max text-xs font-medium">
                  <a href={option.githubLink} target="_blank">
                    View Code
                  </a>
                  <a href={option.WebsiteLink} target="_blank" className="pl-2">
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default projects;
