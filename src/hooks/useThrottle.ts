import { useRef } from 'react';

/**
 * ## useThrottle Hook
 * limit 시간동안 callback의 재호출을 막아주는 Hook
 * @param callback 콜백 함수
 * @param limit 제한 시간
 * @returns 함수
 */
export function useThrottle(callback: () => void, limit: number) {
  const lastRun = useRef(Date.now());

  return () => {
    if (Date.now() - lastRun.current >= limit) {
      callback();
      lastRun.current = Date.now();
    }
  };
}
