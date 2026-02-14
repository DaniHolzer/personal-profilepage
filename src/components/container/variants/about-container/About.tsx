import { Container } from "components/container/base/Container";
import { aboutStyles } from "./About.styles";
import type { AboutProps } from "./About.types";
import { Heading } from "components/typography/headings/Heading";
import profilefoto from "src/assets/profilefoto.jpg";

//-------------------------------------------------------------------------------------------------
// About Container - Component

export function AboutContainer({ className, debug}: AboutProps) {

  return(
    <Container
      as="section"
      id="aboutContainer"
      className={aboutStyles({className, debug})}
      debug
    >
      <Heading.H1
        id="aboutContainer__h1"
        text="About me"
        className="uppercase text-center mb-[2rem]"
        debug
      />
      <Container
        as="article"
        id="aboutContainer__article"
        className=""
      >
        <img
          id="aboutContainer__article__profilefoto"
          src={ profilefoto }
          alt="Profile foto of me"
          className="w-[10rem] h-[10rem] rounded-full mb-[2rem] self-center"
        />
        <Heading.H2
          id="aboutContainer__article__subheading"
          text="Hi, I'm Daniel"
          className="mb-[0.5rem]"
        />
        <p id="aboutContainer__article__info" className="font-bold text-xl mb-[2rem]">
          a self-taught software engineering student from South Tyrol.
        </p>
        <p id="aboutContainer__article__study" className="mb-[1rem]">
          I started learning software development from home two years ago,
          following a structured but independent path. My main learning resources
          have been Udemy courses and CompTIA certifications,
          which helped me build a strong technical foundation.
        </p>
        <p id="aboutContainer__article__worked" className="">
          So far, I’ve worked with HTML, CSS, JavaScript, TypeScript, React,
          and Tailwind CSS. I enjoy turning ideas into clean, functional
          interfaces and continuously improving my skills one step at a time.
        </p>
      </Container>
    </Container>
  );
}
