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
          href="https://github.com/ricky-ho/covid-statistics"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          View Source Code
        </a>
      </div>
    </footer>
  );
};

export default Footer;
