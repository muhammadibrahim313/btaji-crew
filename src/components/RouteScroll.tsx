import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RouteScroll() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const title = pathname.includes("/competitions/storm-cost/certificates/")
      ? "StormCost Certificate"
      : pathname === "/competitions/storm-cost"
        ? "StormCost — Results & Certificates"
        : pathname === "/competitions" ? "Competitions"
        : pathname === "/research-lab" ? "Research Lab"
        : pathname === "/sessions" ? "Recorded Sessions"
        : "Data Science & AI Community";
    document.title = `${title} | BTAJI Crew`;
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) target.scrollIntoView({ behavior: "instant" });
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}
