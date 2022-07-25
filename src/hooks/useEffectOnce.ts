import { EffectCallback, useEffect } from 'react';

/**
 * ## useEffectOnce Hook
 * 오직 **한번**만 실행되는 Hook (컴포넌트가 마운트 될 때)
 * @param effect Callback
 */
export function useEffectOnce(effect: EffectCallback) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, []);
}
