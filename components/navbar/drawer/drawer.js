import React, { useState } from "react";

// Styles
import * as Styles from "./drawer.styles";

// Icons
import MenuIcon from "@mui/icons-material/Menu";

// Components
import DrawerLinks from "./drawer-links";

const NavbarDrawer = ({ navLinks, handleScroll }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const handleNavDrawer = () => {
    setShowDrawer((prevState) => !prevState);
  };

  const variants = {
    show: {
      clipPath: "circle(100vh at calc(100% - 50px) 50px)",
      transition: {
        type: "tween",
        stiffness: 120,
        duration: 0.5,
      },
    },
    hidden: {
      clipPath: "circle(20px at calc(100% - 50px) 50px)",
      transition: {
        type: "tween",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <Styles.DrawerWrapper
      initial="hidden"
      animate={showDrawer ? "show" : "hidden"}
    >
      <Styles.LinksContainer variants={variants}>
        <DrawerLinks
          navLinks={navLinks}
          handleNavDrawer={handleNavDrawer}
          handleScroll={handleScroll}
        />
      </Styles.LinksContainer>
      <Styles.HamburgerIcon onClick={handleNavDrawer}>
        <MenuIcon color="primary" sx={{ fontSize: 25 }} />
      </Styles.HamburgerIcon>
    </Styles.DrawerWrapper>
  );
};

export default NavbarDrawer;
