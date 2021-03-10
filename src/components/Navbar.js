import { BiMoon } from "react-icons/bi";

const Navbar = ({ toggleTheme }) => {
  return (
    <header className="header">
      <h3>Where in the world</h3>
      <button onClick={toggleTheme} className="theme-switch">
        <BiMoon />
        <span>Dark Mode</span>
      </button>
    </header>
  );
};

export default Navbar;
