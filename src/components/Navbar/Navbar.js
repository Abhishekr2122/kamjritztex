import { useState } from "react";
import "../Navbar/navbar.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import NavbarModal from "../../ui/Navbar-modal/NavbarModal";

export default function Navbar() {
  const [currentNavItem, setCurrentNavItem] = useState("");

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
            }}
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
            }}
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
            }}
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
            }}
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
            }}
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
            }}
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
            }}
          >
            <span>Apps</span>{" "}
            <div>
              <RiArrowDropDownLine className="btn-icon" />
            </div>
          </button>
        </li>
        <li className="list-item-create">Create</li>
      </ul>

      <NavbarModal currentNavItem={currentNavItem} />
    </div>
  );
}
