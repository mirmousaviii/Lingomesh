import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo(0, 0);

    // Also scroll the main content area to top
    const mainContent = document.querySelector("main");
    if (mainContent) {
      mainContent.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
