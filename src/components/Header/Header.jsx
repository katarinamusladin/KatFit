import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./Header.scss";

function Header() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
            KatFit
            {/* <i class='fas fa-typo3' /> */}
          </Link>
          <div className="navbar__menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul
            className={
              click ? "navbar__menu navbar__menu--active" : "navbar__menu"
            }
          >
            <li className="navbar__item">
              <Link to="/" className="navbar__links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="/" className="navbar__links" onClick={closeMobileMenu}>
                DAYS
              </Link>
            </li>
            <li className="navbar__item">
              <Link
                to="/sign-up"
                className="navbar__links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Header;
