import { useState, useEffect } from "react";
import BarsMenu from "./BarsMenu";
// import { AiOutlineGithub } from "react-icons/ai";

import "./header.scss";

const Header = () => {
  const [showBarsMenu, setShowBarsMenu] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    if (showBarsMenu && scrollDirection === "down") {
      setShowBarsMenu(false);
    }

    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;

      if (scrollY < 50) {
        setScrollDirection(null);
        return;
      }

      setScrollDirection(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    const onScroll = () => window.requestAnimationFrame(updateScrollDirection);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDirection, showBarsMenu]);

  const toggleBarsMenu = () => setShowBarsMenu(!showBarsMenu);

  return (
    <header
      className={`header ${
        scrollDirection === "up"
          ? "scroll-up"
          : scrollDirection === "down"
          ? "scroll-down"
          : ""
      }`}
    >
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
