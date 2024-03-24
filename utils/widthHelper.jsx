// sm: "640px", md: "768px", lg: "992px", xl: "1200px",
import { useState, useEffect } from "react";

const WidthHelper = () => {
  const [size, setSize] = useState("");

  const calculateSize = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 640) {
      setSize("xs");
    } else if (windowWidth >= 641 && windowWidth <= 768) {
      setSize("sm");
    } else if (windowWidth >= 769 && windowWidth <= 992) {
      setSize("md");
    } else if (windowWidth >= 993 && windowWidth <= 1200) {
      setSize("lg");
    } else if (windowWidth >= 1201) {
      setSize("xl");
    }
  };
  useEffect(() => {
    // Calculate initial size
    calculateSize();

    // Add event listener for window resize
    window.addEventListener("resize", calculateSize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", calculateSize);
    };
  }, []);

  return size;
};

export default WidthHelper;
