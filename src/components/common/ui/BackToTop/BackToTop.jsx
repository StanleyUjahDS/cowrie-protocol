import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import "./BackToTop.css";

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return <button type="button" className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" title="Back to top"><ArrowUp size={20} aria-hidden="true" /></button>;
}

export default BackToTop;
