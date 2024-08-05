import "../Sidebar-components/sidebarheader.css";

import { GrTasks } from "react-icons/gr";

export default function SidebarHeader() {
  return (
    <div className="sidebar-header">
      <GrTasks
        style={{
          height: "25px",
          width: "25px",
          color: "orangered",
        }}
      />

      <div className="sidebar-header-heading-container">
        <h5 className="sidebar-main-heading">My Collaborate Project</h5>

        <h6 className="sidebar-sub-heading">Software Project</h6>
      </div>
    </div>
  );
}
