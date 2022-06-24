import { useCallback, useState } from 'react';

/**
 * 클립보드로 텍스트를 복사하는 훅
 * @returns
 */
function useCopyToClipboard(): [
  string | null,
  (text: string) => Promise<boolean>
] {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copy = useCallback(async (text: string) => {
    if (!navigator.clipboard) {
      console.warn('Clipboard not supported....');
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn('Copy Failed...', error);
      setCopiedText(null);
      return false;
    }
  }, []);

  return [copiedText, copy];
}

export default useCopyToClipboard;
