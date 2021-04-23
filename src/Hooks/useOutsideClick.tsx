import { useEffect } from "react";

/**
 * Hook for detecting when a click occurs outside a component
 * Example:
 * 
 * useOutsideClick(ref, () => {
    doStuff();
  });
 * @param ref 
 * @param callback 
 */
export const useOutsideClick = (ref: any, callback: () => void) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClick;