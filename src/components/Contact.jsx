import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <article>
      <img src="./images/my-pict.JPG" alt="mypict" className="bio-photo" />
      <aside className="bio-contact">
        <a
          href="https://github.com/rofrado9178"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="github"></FaGithub>
        </a>
        <a
          href="https://www.linkedin.com/in/fransiskus-aldo/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="linkedin"></FaLinkedin>
        </a>

        <a href="https://aldzaidea@gmail.com">
          <MdEmail className="email"></MdEmail>
        </a>
      </aside>
    </article>
  );
};

export default Contact;
