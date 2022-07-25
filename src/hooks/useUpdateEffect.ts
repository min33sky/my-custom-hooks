import { DependencyList, EffectCallback, useEffect } from 'react';
import { useIsFirstRender } from './useIsFirstRender';

/**
 * ## useUpdateEffect Hook
 * 첫 랜더링때는 호출되지 않는 useEffect
 * @param effect Effect Callback
 * @param deps Dependency Array
 */
export function useUpdateEffect(effect: EffectCallback, deps?: DependencyList) {
  const isFirst = useIsFirstRender();

  useEffect(() => {
    if (!isFirst) {
      return effect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
