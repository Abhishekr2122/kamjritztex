import "../Modals/createteammodal.css";

export default function CreateTeamModal() {
  return (
    <div className="create-team-modal">
      <h2 className="create-team-modal-header">Create a team</h2>
      <div className="create-team-modal-content-container">
        <div style={{ width: "50%" }}>
          <img
            src="teams.jpg"
            alt="not-found"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div style={{ width: "50%", padding: "20px" }}>
          <p className="create-team-modal-para">
            Bring everyone together with one team you can <br></br>{" "}
            @mention,filter, and assign work to.
          </p>
          <div>
            <h5 style={{ marginBottom: "4px", color: "#44546f" }}>
              Team name <span style={{ color: "red" }}>*</span>
            </h5>
            <input
              type="tex"
              placeholder="e.g. HR Team redesign Project, Team Mango "
              style={{ padding: "6px" }}
            />
            <h6
              style={{ marginTop: "6px", color: "#8690a2", fontWeight: "500" }}
            >
              Who can see your team name?{" "}
            </h6>
          </div>
          <div>
            <h5 style={{ marginBottom: "4px", color: "#44546f" }}>
              Who should be in this team?{" "}
              <span style={{ color: "red" }}>*</span>
            </h5>
            <div>
              <button>Collaborate</button>
              <input type="text" placeholder="Choose people" />
              <h6
                style={{
                  marginTop: "6px",
                  color: "#8690a2",
                  fontWeight: "500",
                }}
              >
                You can invite 50 people at once.
              </h6>
            </div>
            <div>
              <h5 style={{ marginBottom: "4px", color: "#44546f" }}>
                Membership controls
              </h5>
              <div style={{ display: "flex" }}>
                <input type="checkBox" />
                <h5
                  style={{ margin: "0px", fontWeight: "500", color: "#8690a2" }}
                >
                  Any one can join this team without approval
                </h5>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                padding: "20px",
                // border: "1px solid green",
                gap: "10px",
              }}
            >
              <button
                style={{
                  padding: "6px 8px",
                  backgroundColor: "#e2e5e8",
                  borderStyle: "none",
                }}
              >
                Cancel
              </button>
              <button
                style={{
                  padding: "6px 8px",
                  backgroundColor: "#0c66e4",
                  borderStyle: "none",
                  color: "white",
                }}
              >
                Create a team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
