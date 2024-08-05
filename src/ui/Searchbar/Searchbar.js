import "./searchbar.css";

import { IoSearch } from "react-icons/io5";

export default function Searchbar() {
  return (
    <div className="searchbar">
      <div
        style={{
          border: "1px solid #8590a2",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "4px",
          borderRadius: "4px",
        }}
      >
        <span>
          <IoSearch style={{ color: "#626f86" }} />
        </span>
        <input placeholder="Search" className="search" />
      </div>
    </div>
  );
}
