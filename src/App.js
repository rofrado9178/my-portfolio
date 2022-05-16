import "./App.css";
import Bio from "./components/Bio";
import data from "./data";

function App() {
  const projects = data;
  return (
    <main className="App">
      <section className="background"></section>
      <Bio />
      <img src={projects[0].image[0]} />
    </main>
  );
}

export default App;
