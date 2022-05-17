import CarouselContainer from "./components/CarouselContainer";
import "./App.css";
import Bio from "./components/Bio";
import CardList from "./components/CardList";
import data from "./data";

function App() {
  return (
    <main className="App">
      <section className="background"></section>
      <Bio />
      <CardList data={data} />
    </main>
  );
}

export default App;
