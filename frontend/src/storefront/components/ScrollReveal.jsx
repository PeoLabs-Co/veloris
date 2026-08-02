import { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal component that triggers a subtle, premium fade and slide-up animation
 * when elements enter the viewport.
 * Uses IntersectionObserver for performant scroll detection.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {number} [props.delay=0] - Delay in milliseconds before reveal begins.
 * @param {number} [props.duration=800] - Duration of the transition in milliseconds.
 */
export function ScrollReveal({ children, delay = 0, duration = 800 }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05, // trigger when even a tiny bit of element is in viewport
        rootMargin: '0px 0px -40px 0px', // slightly offset trigger line for natural flow
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        opacity: isIntersecting ? 1 : 0,
        transform: isIntersecting ? 'translateY(0)' : 'translateY(16px)',
      }}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
