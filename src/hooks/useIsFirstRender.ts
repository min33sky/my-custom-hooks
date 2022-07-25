import { useRef } from 'react';

/**
 * ## useIsFirstRender Hook
 * 첫 랜더링인지 아닌지 판별
 * @returns 처음 랜더링일 경우 true, 아니면 false
 */
export function useIsFirstRender(): boolean {
  const isFirst = useRef(true);

  if (isFirst.current) {
    // ? 첫 랜더링일 경우 첫 랜더링 여부 변수 값을 false로 바꿔준다.
    isFirst.current = false;
    return true;
  }

  return isFirst.current;
}
