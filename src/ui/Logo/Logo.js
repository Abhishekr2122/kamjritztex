import { IoMdApps } from "react-icons/io";
import "../Logo/logo.css";
export default function Logo() {
  return (
    <div className="logo">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IoMdApps style={{ height: "30px", width: "30px", color: "#44546f" }} />
      </div>

      <span className="logo-text">Collaborate</span>
    </div>
  );
}
