import CarouselContainer from "./CarouselContainer";
import { FaGithub } from "react-icons/fa";

const CardList = ({ data }) => {
  const carouselItems = data.map((project) => {
    return (
      <article className="cardContainer">
        <CarouselContainer {...project} key={project.id} />
        <aside className="project-link">
          <a href={project.github} target="_blank" rel="noreferrer">
            <FaGithub className="github"> </FaGithub>
          </a>
        </aside>
      </article>
    );
  });
  return <article className="cards">{carouselItems}\</article>;
};

export default CardList;
