const theme = (mode) => {
  const primaryPalette = {
    main: "#804dee",
  };

  const secondaryPalette = {
    main: "#FFFFFF",
  };

  const staticColorPalette = {
    primary: "#FFFFFF",
    secondary: "#804dee",
  };

  return {
    breakpoints: {
      values: {
        xs: 0, // Extra small devices (portrait phones)
        sm: 600, // Small devices (landscape phones)
        md: 960, // Medium devices (tablets)
        lg: 1280, // Large devices (desktops)
        xl: 1920, // Extra large devices (large desktops)
      },
    },

    typography: {
      fontFamily: "inherit",
    },
    palette: {
      primary: primaryPalette,
      secondary: secondaryPalette,
      text: {
        primary: staticColorPalette.primary,
        secondary: staticColorPalette.secondary,
      },
    },
  };
};

export default theme;
