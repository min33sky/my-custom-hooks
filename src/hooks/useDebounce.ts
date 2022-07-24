import { useEffect, useState } from 'react';

/**
 * ## Debounce Hook
 * **delay** 이전에 들어온 값은 무시한다.
 * @param value `delay` 이후에 반환될 값
 * @param delay delay 값. (default: 500ms)
 * @returns value after delay
 */
export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  /**
   *? delay 내에 입력값이 들어오면 component가 unmount되면서
   *? 이전 setTimeout의 콜백 호출이 취소된다.
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [delay, value]);

  return debouncedValue;
}
