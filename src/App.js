import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ParentLogin from "./pages/parentlogin";
import WardenLogin from "./pages/wardenlogin";
import AboutUs from "./pages/aboutus";
import ParentRegister from "./pages/parentregister";  
import ParentFrontend from "./pages/parentfrontend";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parent-login" element={<ParentLogin />} />
        <Route path="/warden-login" element={<WardenLogin />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/parentregister" element={<ParentRegister />} />
        <Route path="/parentfrontend" element={<ParentFrontend />} />
      
      </Routes>
    </Router>
  );
}

export default App;
