import React, { Component } from "react";
import bank from "../logo.png";
import lo from "../components/bank.svg";

class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-dark fixed-top shadow p-0"
        style={{ backgroundColor: "white", height: "60px", color: "black" }}
      >
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          style={{ color: "black", fontWeight: "700", fontFamily: "monospace" }}
        >
          <img
            src={bank}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="bank"
          />
          &nbsp; LIQUIFY &nbsp;
          {/* <img
            src={lo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="bank"
          /> */}
        </a>

        <ul className="navbar-nav px-3">
          <li className="text-nowrap d-none nav-item d-sm-none d-sm-block">
            User:
            <small
              className=""
              style={{
                color: "dodgerblue",
                fontSize: "small",
                fontWeight: "600",
              }}
            >
              {this.props.account}
            </small>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
