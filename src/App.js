import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "../src/components/Sidebar/Sidebar";
import CreateTeamModal from "./ui/Navbar-modal/Modals/CreateTeamModal";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <CreateTeamModal />
    </div>
  );
}

export default App;
