import { use, useEffect, useRef, type RefObject } from "react";
import { animate, type AnimatableParams } from "animejs";

export const useFadeIn = (htmlObject: string, delay = 0) => {
  animate(htmlObject, {
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 600,
    delay,
    easing: "easeOutCubic",
  });
};

interface UseAnimateOnViewOptions {
  animeOptions: AnimatableParams;
  threshold?: number;
  once?: boolean;
}

export const useAnimateOnView = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  { animeOptions, threshold = 0.1, once = true }: UseAnimateOnViewOptions
) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("hidden");

          animate(element, {
            ...animeOptions,
          });

          if (once) {
            observer.unobserve(element);
          }
        }
      },
      { threshold, rootMargin: "0px 0px 20px 0px" }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, animeOptions, threshold, once]);
};
