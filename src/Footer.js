import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import { faF } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="bold-footer">
        <b>
          For listings in Lagos specifically, click the link to be redirected to a portfolio
        </b>
      </div>

      <hr></hr>

      <div className="fifth-grid sixth-grid">
        <div className="">
          <FontAwesomeIcon icon={faEnvelope} />:
          vapropertiesandhomesuyo@gmail.com
        </div>
        <div className="">
          <FontAwesomeIcon icon={faPhotoFilm} />: vapropertiesandhomesuyo
        </div>
        <div className="">
          <FontAwesomeIcon icon={faF} />: vapropertiesandhomesuyo@gmail.com
        </div>
        <div className="">
          <FontAwesomeIcon icon={faPhone} />: vapropertiesandhomesuyo@gmail.com
        </div>
      </div>
    </footer>
  );
}

export default Footer;
