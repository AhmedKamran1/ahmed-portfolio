import React from "react";

// Styles
import { PageContainer } from "../UI";

// Components
import Navbar from "../navbar/navbar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <PageContainer>{children}</PageContainer>
    </React.Fragment>
  );
};

export default Layout;
