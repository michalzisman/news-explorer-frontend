import icon from "../../images/mobile_menu_icon.png";
import iconBlack from "../../images/mobile_menu_icon_black.png";
import closeIcone from "../../images/close_menu.svg";

function MobileMenuIcon(props) {
  const page = window.location.pathname;

  return (
    <div className="MobileMenuIcon" onClick={props.setOpenMenu}>
      {props.mobileMenuIsOpen ? (
        <img src={closeIcone} alt="Close menu" />
      ) : page === "/" ? (
        <img src={icon} alt="Mobile menu" />
      ) : (
        <img src={iconBlack} alt="Mobile menu" />
      )}
    </div>
  );
}

export default MobileMenuIcon;
