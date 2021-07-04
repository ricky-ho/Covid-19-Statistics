import { AiOutlineGithub } from "react-icons/ai";

import "./header.scss";

const Header = () => {
  return (
    <header>
      <a href="/">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="homepage" />
      </a>
      <div>
        <a className="page-link" href="#global">
          Global
        </a>
        <a className="page-link" href="#countries">
          Country
        </a>
      </div>
      <a
        className="github-link"
        href="https://github.com/ricky-ho/covid-statistics"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="github project repository"
      >
        <AiOutlineGithub size={30} />
      </a>
    </header>
  );
};

export default Header;
