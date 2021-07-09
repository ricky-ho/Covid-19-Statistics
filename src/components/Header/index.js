import { useState } from "react";
import BarsMenu from "./BarsMenu";
import { AiOutlineGithub } from "react-icons/ai";

import "./header.scss";

const Header = () => {
  const [showBarsMenu, setShowBarsMenu] = useState(false);

  const toggleBarsMenu = () => setShowBarsMenu(!showBarsMenu);

  return (
    <header>
      <div className="container">
        <a href="/">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="homepage" />
        </a>
        {/* <div>
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
        </a> */}
        <BarsMenu showBarsMenu={showBarsMenu} toggle={toggleBarsMenu} />
      </div>
    </header>
  );
};

export default Header;
