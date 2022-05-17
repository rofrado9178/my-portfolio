import CarouselContainer from "./CarouselContainer";

const CardList = ({ data }) => {
  const carouselItems = data.map((project) => {
    return <CarouselContainer {...project} key={project.id} />;
  });
  return <article className="cards">{carouselItems}</article>;
};

export default CardList;
