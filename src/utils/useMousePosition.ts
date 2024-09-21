import React, { useEffect, useState } from "react";

const useMousePosition = (targetRef?: React.RefObject<HTMLElement>) => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      let originX = window.innerWidth / 2;
      let originY = window.innerHeight / 2;

      if (targetRef?.current) {
        const rect = targetRef.current.getBoundingClientRect();
        originX = rect.left + rect.width / 2;
        originY = rect.top + rect.height / 2;
      }

      setMousePosition({ x: ev.clientX - originX, y: ev.clientY - originY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [targetRef]);

  return mousePosition;
};

export default useMousePosition;
