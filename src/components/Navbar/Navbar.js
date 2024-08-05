import { useRef, useState } from "react";
import "../Navbar/navbar.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import NavbarModal from "../../ui/Navbar-modal/NavbarModal";

export default function Navbar() {
  const [currentNavItem, setCurrentNavItem] = useState("");
  const workRef = useRef("");
  const projectRef = useRef("");
  const filterRef = useRef("");
  const dashboardRef = useRef("");
  const teamRef = useRef("");
  const planRef = useRef("");
  const appRef = useRef("");

  const [modalPosition, setModalPosition] = useState(null);

  function handleNavItem(navItem) {
    setCurrentNavItem(navItem);
  }

  console.log("This is the navitem", currentNavItem);

  return (
    <div className="navbar">
      <ul className="list">
        <li className="list-item">
          <button
            className="list-item-btn"
            onClick={function () {
              handleNavItem("work");
              setModalPosition(workRef.current.offsetLeft);
            }}
            ref={workRef}
          >
            <span>Your work</span>{" "}
            <div>
              <RiArrowDropDownLine className="btn-icon" />
            </div>
          </button>
        </li>
        <li className="list-item">
          <button
            className="list-item-btn"
            onClick={function () {
              handleNavItem("projects");
              setModalPosition(projectRef.current.offsetLeft);
            }}
            ref={projectRef}
          >
            <span>Projects</span>
            <div>
              <RiArrowDropDownLine className="btn-icon" />
            </div>
          </button>
        </li>
        <li className="list-item">
          <button
            className="list-item-btn"
            onClick={function () {
              handleNavItem("filters");
              setModalPosition(filterRef.current.offsetLeft);
            }}
            ref={filterRef}
          >
            <span>Filters</span>
            <div>
              {" "}
              <RiArrowDropDownLine className="btn-icon" />
            </div>
          </button>
        </li>
        <li className="list-item">
          <button
            className="list-item-btn"
            onClick={function () {
              handleNavItem("dashboards");
              setModalPosition(dashboardRef.current.offsetLeft);
            }}
            ref={dashboardRef}
          >
            <span>Dashboards</span>
            <div>
              <RiArrowDropDownLine className="btn-icon" />
            </div>
          </button>
        </li>
        <li className="list-item">
          <button
            className="list-item-btn"
            onClick={function () {
              handleNavItem("teams");
              setModalPosition(teamRef.current.offsetLeft);
            }}
            ref={teamRef}
          >
            <span>Teams</span>{" "}
            <div>
              <RiArrowDropDownLine className="btn-icon" />
            </div>
          </button>
        </li>
        <li className="list-item">
          <button
            className="list-item-btn"
            onClick={function () {
              handleNavItem("plans");
              setModalPosition(planRef.current.offsetLeft);
            }}
            ref={planRef}
          >
            <span>Plans</span>{" "}
            <div>
              <RiArrowDropDownLine className="btn-icon" />
            </div>
          </button>
        </li>
        <li className="list-item">
          <button
            className="list-item-btn"
            onClick={function () {
              handleNavItem("apps");
              setModalPosition(appRef.current.offsetLeft);
            }}
            ref={appRef}
          >
            <span>Apps</span>{" "}
            <div>
              <RiArrowDropDownLine className="btn-icon" />
            </div>
          </button>
        </li>
        <li className="list-item-create">Create</li>
      </ul>

      <NavbarModal
        currentNavItem={currentNavItem}
        modalPosition={modalPosition}
        setCurrentNavItem={setCurrentNavItem}
      />
    </div>
  );
}
