import { SiCss3, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiPostgresql, SiPostman, SiReact, SiRedux, SiTailwindcss, SiTypescript, SiNodedotjs, SiExpress, SiSpring, SiSpringboot, SiGit, SiGithub, SiHibernate, SiRedis, SiDocker } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import TitleHeader from "../components/TitleHeader";


const techStack = [
  {
    category: "Programming Languages",
    items: [
      { name: "Java"},
      {
        name: "HTML/CSS",
        icon: (
          <span className="flex items-center gap-1">
            <SiHtml5 color="yellow"/>
            <SiCss3 color="yellow"/>
          </span>
        ),
      },
      { name: "JavaScript", icon: <SiJavascript color="yellow"/> },
      { name: "TypeScript", icon: <SiTypescript color="yellow"/> },
    ],
  },
  {
    category: "Databases",
    items: [
        { name: "MongoDB", icon: <SiMongodb color="green" size={25} /> },
      { name: "MySQL", icon: <SiMysql size={30}/> },
      { name: "Postgres", icon: <SiPostgresql size={25}/> },
    ],
  },
  {
    category: "Developer Tools",
    items: [
      { name: "VS Code", icon: <VscCode/>},
      { name: "Postman", icon: <SiPostman/>},
    ],
  },
  {
    category: "Libraries & Frameworks",
    items: [
      { name: "ReactJS", icon: <SiReact/> },
      { name: "NextJS", icon: <SiNextdotjs/> },
      { name: "Redux", icon: <SiRedux/> },
      { name: "Zustand", icon: <SiReact/> }, // Zustand doesn't have an icon, using React
      { name: "Tailwind", icon: <SiTailwindcss/> },
      { name: "Material UI"},
      { name: "Mantine"}, // Mantine fallback
      { name: "NodeJS", icon: <SiNodedotjs color="green"/> },
      { name: "Express", icon: <SiExpress color="yellow"/> },
      { name: "Spring", icon: <SiSpring color="green"/> },
      { name: "Spring Boot", icon: <SiSpringboot color="green"/> },
      { name: "Hibernate", icon: <SiHibernate  color="yellow"/> },
      { name: "Git", icon: <SiGit /> },
      { name: "Github", icon: <SiGithub /> },
    ],
  },
  {
    category: "Additional Skills",
    items: [
      { name: "DSA" },
      { name: "OOPS" },
      { name: "Microservices" },
      { name: "Redis", icon: <SiRedis /> },
      { name: "Docker", icon: <SiDocker /> },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="section-padding" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        <div className="grid gap-10 md:grid-cols-2 mt-16 lg:grid-cols-3">
                  {techStack.map((category, idx) => (
    
            <div
              key={idx}
              className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl shadow-lg 
                         hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">
                {category.category}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {category.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 px-3 py-1 text-sm bg-indigo-600/20 border border-indigo-500/40 
                               rounded-lg hover:bg-indigo-600/40 transition-all duration-200"
                  >
                    {item.icon && <span className="text-xl">{item.icon}</span>}
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
