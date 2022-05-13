import Contact from "./Contact";
const Bio = () => {
  return (
    <section className="bio">
      <Contact />
      <aside className="bio-block"></aside>
      <aside className="bio-description">
        <h1 className="title">Hello, My name is Fransiskus Aldo</h1>
        <h1 className="p-developer">I am a web developer</h1>
        <h1 className="p-welcome">Welcome to my website</h1>
      </aside>
    </section>
  );
};

export default Bio;
