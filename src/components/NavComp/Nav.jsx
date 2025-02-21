import LoginModal from "./LoginModal";
import "./Nav.css";
import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

function Nav() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 800) {
        setScrolled(false);
        return;
      }

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-items">
        <ul>
          <li ><a href="#">Maken</a></li>
          <li>
            <FiMenu
          onClick={toggleSidebar}
          className="menu-button"
          color="#0188c2"
          size={40}
        /></li>
          <li className="hideOnMobile"><a href="#">Home</a></li>
          <li className="hideOnMobile"><a href="#">About us</a></li>
          <li className="hideOnMobile"><a href="#">Our News</a></li>
          <li className="hideOnMobile"><a href="#">Our Blogs</a></li>
          <li className="hideOnMobile"><a href="#">Contact</a></li>
          <li className="hideOnMobile"><LoginModal /></li>
        </ul>
        
      </div>

      <div className={`side-bar ${isSidebarVisible ? "visible" : ""}`}>
        <ul>
          <li>
            <IoClose
              onClick={toggleSidebar}
              className="close-button"
              size={40}
              fill="white"
              aria-label="Close sidebar"
            />
          </li>
          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Our News</a></li>
          <li><a href="#">Our Blogs</a></li>
          <li><a href="#">Contact</a></li>
          <li><LoginModal /></li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
