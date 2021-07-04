import { AiOutlineGithub } from "react-icons/ai";

import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer__inner">
        <p>
          {`Source: `}
          <a
            href="https://ourworldindata.org/coronavirus"
            target="_blank"
            rel="noopener noreferrer"
          >
            Our World in Data
          </a>
        </p>
        <a
          className="github-link"
          href="https://github.com/ricky-ho/covid-statistics"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineGithub size={30} />
          <span>Source Code</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
