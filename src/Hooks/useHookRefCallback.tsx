import React, { useCallback, useRef } from "react";

type RefCallback<T> = (node: T | null) => void;

const useHookRefCallback = <T extends HTMLElement>(): [RefCallback<T>] => {
  const ref = useRef<T | null>(null);

  const setRef = useCallback((node: T | null) => {
    if (ref.current) {
      // Make sure to cleanup any events/references added to the last instance
    }

    if (node) {
      // Check if a node is actually passed. Otherwise node would be null.
      // You can now do what you need to, addEventListeners, measure, etc.
    }

    // Save a reference to the node
    ref.current = node;
  }, []);

  return [setRef];
};

export default useHookRefCallback;
