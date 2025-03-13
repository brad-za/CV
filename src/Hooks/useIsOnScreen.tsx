import { useEffect, useState, useRef, RefObject } from "react";

const useIsOnScreen = (ref: RefObject<HTMLElement>): string | undefined => {
  const [isOnScreen, setIsOnScreen] = useState<string | undefined>();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsOnScreen(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    const children = ref.current.children;
    for (let i = 0; i < children.length; i++) {
      const element = children[i] as HTMLElement;
      observerRef.current?.observe(element);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [ref]);

  return isOnScreen;
};

export default useIsOnScreen;
