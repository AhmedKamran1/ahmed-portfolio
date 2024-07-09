import React from "react";

// Styles
import * as Styles from "./navbar.styles";
import { FlexContainer, SignatureText, Text } from "../UI";

// Component
import NavbarDrawer from "./drawer/drawer";

// Utils
import { navLinks } from "@/utils/constants";

const Navbar = () => {
  const handleScroll = (itemId) => {
    document.getElementById(itemId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <Styles.AppBarContainer>
        <SignatureText variant="header" onClick={() => handleScroll("Home")}>
          {"< Ahmed />"}
        </SignatureText>
        <FlexContainer>
          <Styles.NavContainer>
            {navLinks.map((item) => (
              <Styles.LinkContainer
                key={item.id}
                onClick={() => handleScroll(item.id)}
              >
                <Text variant="body">{item.id}</Text>
              </Styles.LinkContainer>
            ))}
          </Styles.NavContainer>
        </FlexContainer>
      </Styles.AppBarContainer>
      <NavbarDrawer navLinks={navLinks} handleScroll={handleScroll} />
    </React.Fragment>
  );
};

export default Navbar;
