import "../Modals/teamsmodal.css";
import { IoMdAdd } from "react-icons/io";
import { HiMiniUserGroup } from "react-icons/hi2";
import { useState } from "react";
import InviteModal from "./InviteModal";

export default function TeamsModal({ modalPosition, setCurrentNavItem }) {
  const [isInvited, setIsInvited] = useState(false);

  function handleInvite() {
    setIsInvited(true);
  }

  if (isInvited) {
    return (
      <InviteModal
        setIsInvited={setIsInvited}
        setCurrentNavItem={setCurrentNavItem}
      />
    );
  }

  return (
    <div className="teams-modal" style={{ left: `${modalPosition}px` }}>
      <div className="teams-modal-container1">
        <button className="teams-modal-btn" onClick={handleInvite}>
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
          Cancel
        </button>
      </div>
    </div>
  );
}
