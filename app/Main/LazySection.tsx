"use client";

import {
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type LazySectionProps = {
  children: ReactNode;
  rootMargin?: string;
  className?: string;
};

export function LazySection({
  children,
  rootMargin = "700px",
  className = "",
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    // Fallback for older browsers
    if (!("IntersectionObserver" in window)) {
      setLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold: 0,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin]);

  return (
    <div
      ref={ref}
      className={`lazy-section ${className}`}
    >
      {loaded ? children : null}
    </div>
  );
}