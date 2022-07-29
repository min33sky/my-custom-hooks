import { useCallback, useEffect, useRef } from 'react';

/**
 * ## 현재 컴포넌트가 mount된 상태인지 확인하는 Hook
 * unmount된 컴포넌트의 상태를 변경할 때 발생하는 오류를 방지한다.
 *
 * @example
 * Warning: Can't perform a React state update on an unmounted component.
 * This is a no-op, but it indicates a memory leak in your application.
 * To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
 *
 * @returns function
 */
export function useIsMounted(): () => boolean {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return useCallback(() => isMounted.current, []);
}
