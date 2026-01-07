import type { AnimatableParams } from "animejs";
import React, { useRef } from "react";
import { useAnimateOnView } from "~/hooks/useFadeInAnimations";
interface Props {
  children?: React.ReactNode;
  className?: string;
}
export default function AnimatedDiv({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useAnimateOnView(ref, {
    animeOptions: {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
    } as AnimatableParams,
  });
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
export function AnimatedSection({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useAnimateOnView(ref, {
    animeOptions: {
      opacity: [0.4, 1],
      translateY: [40, 0],
      duration: 800,
    } as AnimatableParams,
  });
  return (
    <section ref={ref} className={className}>
      {children}
    </section>
  );
}
