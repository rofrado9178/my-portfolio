import CarouselContainer from "./components/CarouselContainer";
import "./App.css";
import Bio from "./components/Bio";
import data from "./data";

function App() {
  const projects = data;
  return (
    <main className="App">
      <section className="background"></section>
      <Bio />
      <CarouselContainer />
    </main>
  );
}

export default App;
