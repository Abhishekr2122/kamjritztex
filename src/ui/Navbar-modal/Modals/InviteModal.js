import "../Modals/invitemodal.css";
import { SlOptions } from "react-icons/sl";
import { FaGoogle } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";

export default function InviteModal({ setIsInvited, setCurrentNavItem }) {
  function handleInviteModalClose() {
    setIsInvited(false);
    setCurrentNavItem("");
  }

  return (
    <div className="invite-modal-container">
      <div className="invite-modal">
        <div className="invite-modal-header">
          <h3 className="invite-modal-main-heading">
            Add people to Collaboration
          </h3>
          <button className="invite-modal-header-btn">
            <SlOptions />
          </button>
        </div>
        <div className="invite-modal-input-container">
          <h5
            style={{ margin: "0px", fontWeight: "500", color: "#667289" }}
            className="invite-modal-sub-heading"
          >
            Names or emails
          </h5>
          <input
            type="text"
            placeholder="e.g., Maria, maria@company.com "
            className="invite-modal-input"
          />
        </div>
        <div className="invite-modal-btn-container">
          <h5
            style={{ margin: "0px", fontWeight: "500", color: "#667289" }}
            className="invite-modal-sub-heading"
          >
            or add from
          </h5>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button className="invite-modal-btn">
              <FaGoogle />
              <span>Google</span>
            </button>
            <button className="invite-modal-btn">
              <FaSlack />
              <span>Slack</span>
            </button>
            <button className="invite-modal-btn">
              <FaMicrosoft />
              <span>Microsoft</span>
            </button>
          </div>
        </div>
        <div className="invite-modal-options-container">
          <button
            className="invite-modal-options-btn"
            id="invite-modal-cancel-btn"
            onClick={handleInviteModalClose}
          >
            Cancel
          </button>
          <button
            className="invite-modal-options-btn"
            id="invite-modal-add-btn"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
