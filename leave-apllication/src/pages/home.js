import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import "./home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        {/* Heading */}
        <h2 className="home-title">Welcome to Hostel Leave Application</h2>

        {/* Sub-text */}
        <p className="home-description">
          This system allows parents and wardens to manage hostel leave requests
          easily and efficiently. Please choose your login below:
        </p>

        {/* Buttons */}
        <div className="home-buttons">
          <Link to="/parent-login" className="home-button parent-btn">
            Parent Login
          </Link>
          <Link to="/warden-login" className="home-button warden-btn">
            Warden Login
          </Link>
          <Link to="/aboutus" className="home-button about-btn">
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
