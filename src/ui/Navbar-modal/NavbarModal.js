import { createPortal } from "react-dom";
import "../Navbar-modal/navbarmodal.css";
import TeamsModal from "./Modals/TeamsModal";

export default function NavbarModal({
  currentNavItem,
  modalPosition,
  setCurrentNavItem,
}) {
  if (currentNavItem === "") {
    return null;
  }

  // if (currentNavItem === "work") {
  //   return <div>hello there</div>;
  // }

  if (currentNavItem === "teams") {
    return createPortal(
      <TeamsModal
        modalPosition={modalPosition}
        setCurrentNavItem={setCurrentNavItem}
      />,
      document.body
    );
  }
}
