import "./sidebarlist.css";
import { MdOutlineViewTimeline } from "react-icons/md";
import { HiViewBoards } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { MdFormatListBulleted } from "react-icons/md";
import { FaRegCircleDot } from "react-icons/fa6";
import { AiOutlineIssuesClose } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { GoProjectRoadmap } from "react-icons/go";
import { MdAddchart } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";

export default function SidebarList() {
  return (
    <div className="sidebar-list">
      <h5
        style={{
          paddingLeft: "10px",
          color: "#44546f",
          fontWeight: "400",
          marginBottom: "0px",
        }}
      >
        PLANNING
      </h5>
      <div className="sidebar-list-container">
        <ul style={{ listStyle: "none", padding: "0px" }}>
          <li>
            <button className="sidebar-list-item">
              <MdOutlineViewTimeline className="sidebar-list-item-icon" />
              <span className="sidebar-list-item-text">Time Line</span>
            </button>
          </li>
          <li>
            <button className="sidebar-list-item">
              <HiViewBoards className="sidebar-list-item-icon" />
              <span className="sidebar-list-item-text">Board</span>
            </button>
          </li>
          <li>
            <button className="sidebar-list-item">
              <SlCalender className="sidebar-list-item-icon" />
              <span className="sidebar-list-item-text">Calender</span>
            </button>
          </li>
          <li>
            <button className="sidebar-list-item">
              <MdFormatListBulleted className="sidebar-list-item-icon" />
              <span className="sidebar-list-item-text">List</span>
            </button>
          </li>
          <li>
            <button className="sidebar-list-item">
              <FaRegCircleDot className="sidebar-list-item-icon" />
              <span className="sidebar-list-item-text">Goals</span>
            </button>
          </li>
          <li>
            <button className="sidebar-list-item">
              <AiOutlineIssuesClose className="sidebar-list-item-icon" />
              <span className="sidebar-list-item-text">Issues</span>
            </button>
          </li>
          <li>
            <button className="sidebar-list-item">
              <IoMdAdd className="sidebar-list-item-icon" />
              <span className="sidebar-list-item-text">Add view</span>
            </button>
          </li>
        </ul>
        <div
          style={{
            borderBottom: "1px solid lightGrey",
            paddingBottom: "4px",
          }}
        >
          <h5
            style={{
              color: "#44546f",
              fontWeight: "400",
              marginBottom: "0px",
            }}
          >
            DEVELOPMENT
          </h5>
          <ul style={{ listStyle: "none", padding: "0px", margin: "0px" }}>
            <li>
              <button className="sidebar-list-item">
                <FaCode className="sidebar-list-item-icon" />
                <span className="sidebar-list-item-text">Code</span>
              </button>
            </li>
          </ul>
        </div>
        <ul style={{ listStyle: "none", padding: "0px" }}>
          <li>
            <button className="sidebar-list-item">
              <GoProjectRoadmap className="sidebar-list-item-icon" />
              <span className="sidebar-list-item-text">Project pages</span>
            </button>
          </li>
          <li>
            <button className="sidebar-list-item">
              <MdAddchart className="sidebar-list-item-icon" />
              <span className="sidebar-list-item-text">Add shortcut</span>
            </button>
          </li>
          <li>
            <button className="sidebar-list-item">
              <IoIosSettings className="sidebar-list-item-icon" />
              <span className="sidebar-list-item-text">Project settings</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
