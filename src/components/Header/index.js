import "./header.scss";

const Header = () => {
  return (
    <header>
      <a href="/">
        <img
          src={`${process.env.PUBLIC_URL}/logo.png`}
          className="logo"
          alt="homepage"
        />
      </a>
    </header>
  );
};

export default Header;
