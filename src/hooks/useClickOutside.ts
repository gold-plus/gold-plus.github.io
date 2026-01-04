import { useEffect, useRef } from "react";

export const useClickOutside = (callback: Function, isActive: boolean = true) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    if (!isActive) return;

    const handleClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick, true);

    return () => {
      document.removeEventListener("mousedown", handleClick, true);
    };
  }, [ref, callback, isActive]);

  return ref;
};
