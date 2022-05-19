import CarouselContainer from "./CarouselContainer";
import { FaGithub } from "react-icons/fa";

const CardList = ({ data }) => {
  const carouselItems = data.map((project) => {
    return (
      <article className="cardContainer">
        <h1 className="project-title">{project.name}</h1>
        <CarouselContainer {...project} key={project.id} />
        <aside className="project-link">
          <a href={project.github} target="_blank" rel="noreferrer">
            <FaGithub className="github"> </FaGithub>
          </a>
          <a
            href={project.live ? project.live : ""}
            target="_blank"
            rel="noreferrer"
            className={project.live ? "live-site" : "disabled-site"}
          >
            Live site
          </a>
        </aside>
        <aside>
          <p className="project-description">{project.description}</p>
        </aside>
      </article>
    );
  });
  return <section className="cards">{carouselItems}</section>;
};

export default CardList;
