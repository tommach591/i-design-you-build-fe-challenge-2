import "./App.css";
import Header from "../Header";
import Home from "../Home";
import { useCheckMobileScreen } from "../../utils/useCheckMobileScreen";
import Dashboard from "../../utils/dashboard.svg";

function App() {
  const isMobile = useCheckMobileScreen();

  return (
    <div className="App">
      <div className="Ellipse" />
      <Header isMobile={isMobile} />
      <Home isMobile={isMobile} />
      <div className="DashboardDemo">
        <img src={Dashboard} alt="dashboard.svg" />
      </div>
    </div>
  );
}

export default App;
