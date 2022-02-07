import { useNavigate } from "react-router-dom";
import Facebook from "../../images/facebook.png";
import Github from "../../images/github.png";

function Footer() {
  const history = useNavigate();

  function handleMenuClick() {
    history("/");
  }

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <p className="footer__copyright">
          &copy; 2021 Supersite, Powered by News API
        </p>
        <nav className="footer__rightNav">
          <div className="footer__rightNav-text">
            <p onClick={handleMenuClick} className="footer__button">
              Home
            </p>
            <a
              href={"http://practicum.yandex.com"}
              rel="noopener noreferrer"
              target="_blank"
              className="footer__link"
            >
              Practicum by Yandex
            </a>
          </div>
          <div className="footer__rightNav-img">
            <a
              href={"http://github.com"}
              rel="noopener noreferrer"
              target="_blank"
              className="footer__link"
            >
              <img src={Github} alt="Github" />
            </a>
            <a
              href={"http://facebook.com"}
              rel="noopener noreferrer"
              target="_blank"
              className="footer__link"
            >
              <img src={Facebook} alt="Facebook" />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
