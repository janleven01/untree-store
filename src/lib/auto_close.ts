import { set } from "lodash";
import { useEffect, RefObject } from "react";

export const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  scroll: boolean,
  setMenuActive: (menuActive: boolean) => void
) => {

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setMenuActive(false);
      }
    };

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuActive(false);
      }
    };

    const handleScroll = () => {
      setMenuActive(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    if (scroll) window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
      if (scroll) window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, scroll, setMenuActive]);
};
