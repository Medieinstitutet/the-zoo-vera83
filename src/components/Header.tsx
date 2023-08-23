import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <nav>
        <div className="nav-container">
          <h1>The Zoo</h1>
          <div className="nav-button-container">
            <Link to="/">
              <span className="fa-solid fa-house fa-2xl color"></span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
