import "./App.css";
import Header from "./components/Header/Header";
import TeamsModal from "../src/ui/Navbar-modal/Modals/TeamsModal";

function App() {
  return (
    <div className="App">
      <Header />
      <TeamsModal />
      {/* <Sidebar /> */}
    </div>
  );
}

export default App;
