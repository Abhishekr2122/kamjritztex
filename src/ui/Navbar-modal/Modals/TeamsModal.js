import "../Modals/teamsmodal.css";
import { IoMdAdd } from "react-icons/io";
import { HiMiniUserGroup } from "react-icons/hi2";

export default function TeamsModal({ modalPosition, setCurrentNavItem }) {
  return (
    <div className="teams-modal" style={{ left: `${modalPosition}px` }}>
      <div className="teams-modal-container1">
        <button className="teams-modal-btn">
          <IoMdAdd className="teams-modal-icon" />
          <p className="teams-modal-para">Invite people to Collaboration</p>
        </button>
        <button className="teams-modal-btn">
          <HiMiniUserGroup className="teams-modal-icon" />
          <p className="teams-modal-para">Create a team</p>
        </button>
      </div>
      <div className="teams-modal-container2">
        <button className="teams-modal-btn teams-modal-container2-text">
          Search people and teams
        </button>
        <button
          className="teams-modal-cancel-btn"
          onClick={function () {
            setCurrentNavItem("");
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
