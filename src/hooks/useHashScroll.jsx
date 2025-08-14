// src/hooks/useHashScroll.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useHashScroll(offsetPx = 80) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");
    const target = document.getElementById(id);
    if (!target) return;

    // 레이아웃이 준비된 후 스크롤 (한 프레임 뒤)
    requestAnimationFrame(() => {
      const rect = target.getBoundingClientRect();
      const targetY = window.scrollY + rect.top - offsetPx;

      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    });
  }, [pathname, hash, offsetPx]);
}
