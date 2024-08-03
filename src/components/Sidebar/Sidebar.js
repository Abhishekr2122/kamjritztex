import SidebarHeader from "../../ui/Logo/Sidebar-components/SidebarHeader";
import SidebarList from "../../ui/Logo/Sidebar-components/SidebarList";
import "../Sidebar/sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarHeader />
      <SidebarList />
    </div>
  );
}
