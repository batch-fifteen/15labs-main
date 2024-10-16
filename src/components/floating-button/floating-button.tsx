import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faChevronCircleUp,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

interface FloatingButtonProps {
  homeRef: React.RefObject<HTMLDivElement>;
}
const FloatingButton: React.FC<FloatingButtonProps> = ({ homeRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const buttonStyle = {
    position: "fixed" as "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#151D48",
    border: "none",
    borderRadius: "20%",
    padding: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
    transition: "background-color 0.3s",
    display: isVisible ? "block" : "none",
  };

  return (
    <div style={buttonStyle}>
      <FontAwesomeIcon icon={faChevronUp} color="white" />
    </div>
  );
};

export default FloatingButton;
