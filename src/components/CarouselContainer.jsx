import { Carousel } from "react-bootstrap";

const CarouselContainer = ({ image, description, github, name }) => {
  const images = image.map((img) => {
    return (
      <Carousel.Item interval={5000}>
        <div className="carousel-img">
          <img
            className="d-block w-100 h-150 img"
            src={img}
            alt="First slide"
          />
        </div>
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
