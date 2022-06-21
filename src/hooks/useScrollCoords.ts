import { useEffect, useState } from 'react';

/**
 * 스크롤바 좌표를 반환하는 훅
 * @returns scroll offset
 */
export default function useScrollCoords() {
  const [offset, setOffset] = useState({ xPos: 0, yPos: 0 });

  const handler = () => {
    setOffset({
      xPos: window.scrollX,
      yPos: window.scrollY,
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return offset;
}
