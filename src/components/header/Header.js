import "../Header/header.css";
import Logo from "../../ui/Logo/Logo";
import Navbar from "../Navbar/Navbar";
import Searchbar from "../../ui/Logo/Searchbar/Searchbar";
import Options from "../../ui/Logo/Options-container/Options";

export default function Header() {
  return (
    <div className="header">
      <div className="header-section1">
        <Logo />
        <Navbar />
      </div>

      <div className="header-section2">
        <Searchbar />
        <Options />
      </div>
    </div>
  );
}
