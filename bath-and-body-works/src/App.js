import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import MainRoutes from "./Pages/MainRoutes";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <MainRoutes />
    </div>
  );
}

export default App;
