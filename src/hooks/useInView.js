import { useEffect, useRef, useState } from "react";

/*
 * useInView
 * Small reusable hook that tells a component whether it's currently
 * visible in the browser viewport. Used to trigger the "fade up"
 * scroll animation (see the .reveal / .in-view classes in index.css).
 */
export default function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect(); // only animate in once
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, isInView];
}
