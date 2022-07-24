import { useCallback, useEffect, useState } from 'react';

/**
 * ## MediaQuery Hook
 * 뷰포트의 크기에 따라 반응하는 Hook
 * @param query 미디어쿼리 문자열. ex: (min-width: 768px)
 * @returns boolean
 */
export function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {
    // Prevents SSR Issue
    if (typeof window !== 'undefined') {
      // ? 해당 미디어쿼리 문자열의 분석 결과를 반환한다.
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  const handleChange = useCallback(() => {
    setMatches(getMatches(query));
  }, [query]);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    //* Triggered at the first client-side load and if query changes
    handleChange();

    //* Listen matchMedia
    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [handleChange, query]);

  return matches;
}
