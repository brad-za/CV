import { useEffect, useState, RefObject } from "react";

interface UseInViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

const useInView = (
  ref: RefObject<HTMLElement>,
  options: UseInViewOptions = {}
): boolean => {
  const { threshold = 0.75, triggerOnce = true } = options;
  const [isInView, setIsInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If triggerOnce and already seen, don't observe
    if (triggerOnce && hasBeenInView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (triggerOnce) {
              setHasBeenInView(true);
            }
          } else if (!triggerOnce) {
            setIsInView(false);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, triggerOnce, hasBeenInView]);

  return triggerOnce ? hasBeenInView || isInView : isInView;
};

export default useInView;
