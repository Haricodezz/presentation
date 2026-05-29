"use client";
import { useState, useEffect, useCallback, useRef } from "react";

const TOTAL_SLIDES = 14;
const COOLDOWN_MS = 800;

export function useSlideNavigation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const cooldown = useRef(false);
  const touchStartY = useRef<number | null>(null);

  const goToSlide = useCallback((index: number) => {
    if (index < 0 || index >= TOTAL_SLIDES) return;
    setDirection(index > currentSlide ? "down" : "up");
    setCurrentSlide(index);
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    if (cooldown.current) return;
    if (currentSlide >= TOTAL_SLIDES - 1) return;
    cooldown.current = true;
    setDirection("down");
    setCurrentSlide((s) => s + 1);
    setTimeout(() => { cooldown.current = false; }, COOLDOWN_MS);
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (cooldown.current) return;
    if (currentSlide <= 0) return;
    cooldown.current = true;
    setDirection("up");
    setCurrentSlide((s) => s - 1);
    setTimeout(() => { cooldown.current = false; }, COOLDOWN_MS);
  }, [currentSlide]);

  // Wheel navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) < 30) return;
      if (e.deltaY > 0) nextSlide();
      else prevSlide();
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [nextSlide, prevSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      }
      if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        prevSlide();
      }
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "Home") goToSlide(0);
      if (e.key === "End") goToSlide(TOTAL_SLIDES - 1);
      // Number keys 1-9
      const num = parseInt(e.key);
      if (!isNaN(num) && num >= 1 && num <= 9) goToSlide(num - 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [nextSlide, prevSlide, goToSlide]);

  // Touch navigation
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartY.current === null) return;
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextSlide();
        else prevSlide();
      }
      touchStartY.current = null;
    };
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [nextSlide, prevSlide]);

  return { currentSlide, direction, nextSlide, prevSlide, goToSlide, total: TOTAL_SLIDES };
}
