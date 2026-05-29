"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useSlideNavigation } from "@/hooks/useSlideNavigation";
import Slide01Opening from "./slides/Slide01Opening";
import Slide02Problem from "./slides/Slide02Problem";
import Slide03Solution from "./slides/Slide03Solution";
import Slide04Lifecycle from "./slides/Slide04Lifecycle";
import Slide05DataToAsset from "./slides/Slide05DataToAsset";
import Slide06Roles from "./slides/Slide06Roles";
import Slide07Impact from "./slides/Slide07Impact";
import Slide08AIEngine from "./slides/Slide08AIEngine";
import Slide09SystemArchitecture from "./slides/Slide09SystemArchitecture";
import Slide10Demo from "./slides/Slide10Demo";
import Slide11Security from "./slides/Slide11Security";
import Slide12Closing from "./slides/Slide12Closing";
import Slide13LiveDemo from "./slides/Slide13LiveDemo";
import Slide14Closing from "./slides/Slide14Closing";

const SLIDES = [
  Slide01Opening,
  Slide02Problem,
  Slide03Solution,
  Slide04Lifecycle,
  Slide05DataToAsset,
  Slide06Roles,
  Slide07Impact,
  Slide08AIEngine,
  Slide09SystemArchitecture,
  Slide10Demo,
  Slide11Security,
  Slide12Closing,
  Slide13LiveDemo,
  Slide14Closing,
];

// Motion principles:
// - Transitions: cross-dissolve only
// - Entrance: subtle upward drift + fade
const slideVariants = {
  enter: { opacity: 0, scale: 0.98 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.02 },
};

export default function SlideManager() {
  const { currentSlide, direction, nextSlide, prevSlide, goToSlide, total } =
    useSlideNavigation();

  const SlideComponent = SLIDES[currentSlide];

  const isCleanSlide = currentSlide === 0;
  const displayNumber = currentSlide > 0 && currentSlide <= 13
    ? String(currentSlide + 1).padStart(2, "0")
    : null;

  return (
    <div className="slides-container bg-background">
      {/* Slide number — top-right */}
      <AnimatePresence mode="wait">
        {!isCleanSlide && displayNumber && (
          <motion.div
            key={displayNumber}
            className="fixed top-[20px] right-[24px] z-50 flex flex-col items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <span 
              className="uppercase mb-0.5"
              style={{ fontSize: "9px", letterSpacing: "3px", color: "rgba(255,255,255,0.35)", wordSpacing: "-2px" }}
            >
              SLIDE
            </span>
            <span 
              style={{ fontSize: "28px", fontWeight: "700", color: "#00C896", lineHeight: "1" }}
            >
              {displayNumber}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Brand watermark — top-left */}
      <AnimatePresence>
        {!isCleanSlide && (
          <motion.div
            className="fixed top-12 left-12 z-50 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-white/60 text-[10px] tracking-[0.3em] uppercase font-medium">
              Carbon MRV Platform
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Side dot navigation */}
      <AnimatePresence>
        {!isCleanSlide && (
          <motion.div
            className="fixed right-12 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`nav-dot ${i === currentSlide ? "active bg-primary" : "bg-muted/30"}`}
                title={`Slide ${i + 1}`}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide transition */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          className="slide flex items-center justify-center w-full h-full"
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <SlideComponent
            isActive={true}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
