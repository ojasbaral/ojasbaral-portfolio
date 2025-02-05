import Header from "./components/header";
import content from "./data/content.json";
import Resume from "./data/resume.pdf";
import Img from "./data/IMG_8122.JPG";
import myface from "./data/myface.JPG";
import { CSSTransition } from "react-transition-group";

function App() {
  return (
    <>
      <div className="mx-auto h-screen max-w-[1560px] grid grid-rows-[auto, 1fr] sm:overflow-hidden">
        <Header></Header>

        <div className="text-center main-page m-auto">
          <h1 className="text-4xl font-bold pb-2 text-dblue">Ojas Baral</h1>
          <h1 className="text-lg pb-2">Computer Science Student</h1>
          <h1>
            <a
              className="text-[#3562ff] hover:underline cursor-pointer"
              href="https://www.linkedin.com/in/ojasbaral"
              target="_blank"
            >
              https://www.linkedin.com/in/ojasbaral
            </a>
          </h1>
          <h1>
            <a
              className="text-[#3562ff] hover:underline cursor-pointer"
              href="https://github.com/ojasbaral"
              target="_blank"
            >
              https://github.com/ojasbaral
            </a>
          </h1>
        </div>
      </div>
      <div id="about" className="h-[75px]"></div>

      <div className="max-w-[1200px] m-auto p-4">
        <h1 className="text-2xl text-dblue">About</h1>
        <div className="flex pt-4">
          <div className="hidden md:w-1/4 md:pr-8 md:flex md:items-center">
            <img
              src={`${process.env.PUBLIC_URL}/boulder.png`}
              alt="University of Colorado Boulder Logo"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-3/4">
            <h1 className="pt-4">{content.about.content}</h1>

            <h1 className="pt-8">GPA: {content.about.GPA}</h1>
            <h1>Dean's List: {content.about.DL}</h1>
            <h1>Relevant Coursework: {content.about.RC} </h1>
          </div>
        </div>
      </div>

      <div id="experience" className="h-[75px]"></div>

      <div className="max-w-[1200px] m-auto p-4">
        <h1 className="text-2xl text-dblue">Experience</h1>
        {content.exp.map((work, index) => (
          <div key={index} className="flex pt-4">
            {/* Image container */}
            <div className="hidden md:w-1/4 md:pr-8 md:flex md:items-center">
              <img
                src={`${process.env.PUBLIC_URL}/${work.image}`}
                alt={`${work.company} logo`}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Experience details */}
            <div className="md:w-3/4">
              <h1 className="text-lg">{work.company}</h1>
              <div className="flex justify-between text-base">
                <h1 className="italic">{work.title}</h1>
                <h1>{work.time}</h1>
              </div>
              <ul className="pt-2 pl-4">
                {work.tasks?.map((task, taskIndex) => (
                  <li key={taskIndex} className="list-disc list-outside pb-1">
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div id="projects" className="h-[75px]"></div>

      <div className="max-w-[1200px] m-auto p-4">
        <h1 className="text-2xl text-dblue">Projects</h1>
        {content.projects.map((project, index) => (
          <div>
            <div id={index} className="pt-4 flex justify-between">
              <div>
                <h1 className="text-lg">{project.name}</h1>
                <h1 className="italic pr-8">{project.tech}</h1>
              </div>
              <div>
                <h1>{project.time}</h1>
              </div>
            </div>
            <h1 className="">
              {project.website ? (
                <>
                  <a
                    className="text-[#3562ff] hover:underline cursor-pointer"
                    href={project.website}
                    target="_blank"
                  >
                    Website
                  </a>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <a
                    className="text-[#3562ff] hover:underline"
                    href={project.github}
                    target="_blank"
                  >
                    Github
                  </a>
                </>
              ) : (
                <a
                  className="text-[#3562ff] hover:underline"
                  href={project.github}
                  target="_blank"
                >
                  Github
                </a>
              )}
            </h1>

            <ul className="pt-2 pl-4">
              {project.desc?.map((x, index) => (
                <li id={index} className="list-disc list-outside pb-1">
                  {x}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div id="additional" className="h-[75px]"></div>

      <div className="max-w-[1200px] m-auto p-4">
        <h1 className="text-2xl text-dblue">Additional</h1>
        <h1 className="text-lg pt-4">Technical Skills</h1>
        <h1 className="pt-2">
          Programming Languages:{" "}
          <span className="italic">{content.additional.PL}</span>
        </h1>
        <h1 className="pt-1">
          Frameworks:{" "}
          <span className="italic ">{content.additional.libraries}</span>
        </h1>
        <h1 className="pt-1">
          Developer Tools:{" "}
          <span className="italic">{content.additional.tools}</span>
        </h1>

        <h1 className="text-lg pt-4">Contact Me</h1>
        <h1>Email: ojas.baral@gmail.com</h1>
        <h1 className="pt-1">
          <a
            className="text-[#3562ff] hover:underline cursor-pointer pt-1"
            href={content.additional.linkedin}
            target="_blank"
          >
            Linkedin
          </a>
        </h1>
        <h1 className="pt-1">
          <a
            className="text-[#3562ff] hover:underline cursor-pointer pt-1"
            href={content.additional.github}
            target="_blank"
          >
            Github
          </a>
        </h1>

        <h1 className="pt-4">
          <a
            className="text-[#3562ff] hover:underline cursor-pointer"
            href={Resume}
            download="Ojas-Baral-Resume"
            target="_blank"
            rel="norefferer"
          >
            Resume
          </a>
        </h1>
      </div>

      {
        <div className="max-w-[1200px] m-auto pb-8 pt-20">
          <div className="bottom flex justify-around gap-4 items-center">
            <img
              className="md:w-[500px] w-[300px] rounded-lg"
              src={Img}
              alt="Ojas Baral"
            ></img>

            <h1 className="md:text-4xl text-2xl font-bold text-center w-[300px] md:w-[500px]">
              Thank you for checking out my portfolio, I have more coming!
            </h1>
          </div>
        </div>
      }
    </>
  );
}

export default App;
