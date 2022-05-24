import "./App.css";
import Bio from "./components/Bio";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import data from "./data";

function App() {
  return (
    <main className="App">
      <section className="background"></section>
      <Bio />
      <CardList data={data} />
      {/* <Footer /> */}
    </main>
  );
}

export default App;
