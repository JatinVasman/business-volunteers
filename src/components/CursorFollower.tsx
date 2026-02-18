"use client";

import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      // Dot follows instantly
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";

      // Primary grid follows instantly
      document.documentElement.style.setProperty("--mouse-x", e.clientX + "px");
      document.documentElement.style.setProperty("--mouse-y", e.clientY + "px");
    };

    const onMouseEnterInteractive = () => cursor.classList.add("hovering");
    const onMouseLeaveInteractive = () => cursor.classList.remove("hovering");

    // Animation loop for smooth cursor circle + trailing grid
    let raf: number;
    const animate = () => {
      // Circle follows with lag
      const dx = mousePos.current.x - cursorPos.current.x;
      const dy = mousePos.current.y - cursorPos.current.y;
      cursorPos.current.x += dx * 0.15;
      cursorPos.current.y += dy * 0.15;
      cursor.style.left = cursorPos.current.x + "px";
      cursor.style.top = cursorPos.current.y + "px";

      // Trail follows with more lag (creates fading effect)
      const tdx = mousePos.current.x - trailPos.current.x;
      const tdy = mousePos.current.y - trailPos.current.y;
      trailPos.current.x += tdx * 0.05;
      trailPos.current.y += tdy * 0.05;
      document.documentElement.style.setProperty(
        "--trail-x",
        trailPos.current.x + "px",
      );
      document.documentElement.style.setProperty(
        "--trail-y",
        trailPos.current.y + "px",
      );

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    window.addEventListener("mousemove", onMouseMove);

    const interactives = document.querySelectorAll(
      "a, button, [data-cursor-hover]",
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    const observer = new MutationObserver(() => {
      const newInteractives = document.querySelectorAll(
        "a, button, [data-cursor-hover]",
      );
      newInteractives.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterInteractive);
        el.addEventListener("mouseleave", onMouseLeaveInteractive);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden md:block" />
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div className="cursor-glow-trail" />
      <div className="cursor-glow-bg" />
    </>
  );
}
