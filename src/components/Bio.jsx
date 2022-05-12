import Contact from "./Contact";
const Bio = () => {
  return (
    <section className="bio">
      <Contact />
      <aside className="bio-block"></aside>
      <aside className="bio-description">
        <h1 className="title">Hello, My name is Fransiskus Aldo.</h1>
        <p className="p-developer">I am a web developer</p>
        <p className="p-welcome">Welcome to my website</p>
      </aside>
    </section>
  );
};

export default Bio;
