import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import MainRoutes from "./Pages/MainRoutes";

function App() {
  return (
    <div className="App">
      <MainRoutes />
      <Navbar/>
    </div>
  );
}

export default App;
