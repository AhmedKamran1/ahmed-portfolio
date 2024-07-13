import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <ArrowForwardIosIcon
      className={className}
      sx={{
        top: { xs: "60% !important", md: "50% !important" },
        right: "15px !important",
        color: "#804dee !important",
        zIndex: 2,
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIosIcon
      className={className}
      sx={{
        top: { xs: "60% !important", md: "50% !important" },
        left: "15px !important",
        color: "#804dee !important",
        zIndex: 2,
      }}
      onClick={onClick}
    />
  );
};

export const activitySettings = {
  autoplay: true,
  autoplaySpeed: 6000,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  dots: true,
};
