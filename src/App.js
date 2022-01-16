import "./styles.css";
import { Routes, Route } from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

//pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Gethelp from "./pages/Gethelp";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="mainContent">
          <Routes>
            <Route path="/" element={<Home title="Hello World!" />} />
            <Route path="/contact" element={<Contact title="Contact Page" />} />
            <Route
              path="/get-help"
              element={<Gethelp title="Get Help Page" />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
