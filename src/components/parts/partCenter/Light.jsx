import { useEffect } from "react";
import gsap from "gsap";

export function useLightFlicker() {
  useEffect(() => {
    const elements = document.querySelectorAll(".circle-1, .circle-2");

    elements.forEach((el) => {
      const flicker = () => {
        gsap.to(el, {
          opacity: 0.3 + Math.random() * 0.7,
          duration: 0.2 + Math.random() * 0.4,
          onComplete: flicker,
        });

        if (Math.random() > 0.7) {
          el.classList.toggle("circle-1");
          el.classList.toggle("circle-2");
        }
      };

      flicker();
    });
  }, []);

}