import CarouselContainer from "./CarouselContainer";

const CardList = ({ data }) => {
  const carouselItems = data.map((project) => {
    console.log("this is project", project);
    return <CarouselContainer {...project} key={project.id} />;
  });
  return <h1>{carouselItems}</h1>;
};

export default CardList;
