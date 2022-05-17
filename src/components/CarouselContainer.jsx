import { Carousel } from "react-bootstrap";
const CarouselContainer = ({ image, description, github, name }) => {
  const images = image.map((img) => {
    console.log(img);
    return (
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100 carousel-img"
          src={img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{name}</h3>
          <p>{github}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
  return (
    <section className="container-carousel">
      <Carousel>{images}</Carousel>
    </section>
  );
};
export default CarouselContainer;
