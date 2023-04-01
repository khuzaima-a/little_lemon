import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <ul className="navel">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <a href="/">About</a>
        </li>

        <li>
          <Link to="/booking">Reservations</Link>
        </li>

        <li>
          <a href="/">Menu</a>
        </li>

        <li>
          <a href="/">Order Online</a>
        </li>

        <li>
          <a href="/">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
