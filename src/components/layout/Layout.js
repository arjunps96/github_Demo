import React from "react";
import MainNavigation from "./MainNavigation";
import "./Layout.css";

const Layout = (props) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <main className="main">{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
