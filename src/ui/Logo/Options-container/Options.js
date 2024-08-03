import "../Options-container/options.css";
import { FaBell } from "react-icons/fa";
import { BiSolidHelpCircle } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

export default function Options() {
  return (
    <div className="options">
      <FaBell className="options-item" id="notifications" />
      <BiSolidHelpCircle className="options-item" id="help" />
      <IoIosSettings className="options-item" id="settings" />
      <CgProfile className="options-item" id="profile" />
    </div>
  );
}
