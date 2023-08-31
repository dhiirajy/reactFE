import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
          <nav>
          <p className="text-center m-1">
              @ {new Date().getFullYear()} by DHIRAJ
            </p>
          </nav>
      </footer>
    );
  }
}

export default Footer;
