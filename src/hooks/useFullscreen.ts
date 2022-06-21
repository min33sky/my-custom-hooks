import { useCallback, useRef, useState } from 'react';

/**
 * Fullscreen Hook
 * @returns Object
 */
export default function useFullscreen<T extends HTMLElement>() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const elementRef = useRef<T>(null);

  const triggerFull = useCallback(() => {
    if (elementRef.current) {
      elementRef.current.requestFullscreen();
      setIsFullScreen(true);
    }
  }, []);

  const exitFull = useCallback(() => {
    if (elementRef.current && isFullScreen) {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  }, [isFullScreen]);

  const toggleScreen = useCallback(() => {
    return isFullScreen ? exitFull() : triggerFull();
  }, [exitFull, isFullScreen, triggerFull]);

  return { elementRef, triggerFull, exitFull, toggleScreen };
}
