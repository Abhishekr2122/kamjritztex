import "../Modals/teamsmodal.css";
import { IoMdAdd } from "react-icons/io";
import { HiMiniUserGroup } from "react-icons/hi2";

export default function TeamsModal() {
  return (
    <div className="teams-modal">
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
      </div>
    </div>
  );
}
