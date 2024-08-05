import SidebarHeader from "../../ui/Sidebar-components/SidebarHeader";
import SidebarList from "../../ui/Sidebar-components/SidebarList";
import "../Sidebar/sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarHeader />
      <SidebarList />
    </div>
  );
}
