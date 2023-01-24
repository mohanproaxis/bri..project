import React from "react";
import "./Header.css";
import { IoBookSharp } from "react-icons/io5";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div className="nav">
      <div>
        <p className="logo">
          <h1 className="first">Bri</h1>
          <h1 className="second">
            B
            <span className="second">
              <IoBookSharp />
            </span>
            ks
          </h1>
        </p>
      </div>
      <div className="right">
        <div className="theme">
          <button className="changebtn">
            <img src="./images/downloadfd.jpg" />
            Change Theme
          </button>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              style={{ borderRadius: "20px" }}
            >
              <img src="./images/download.jpg" className="admin" />
              Bribooks Web
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Download</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Reading</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
