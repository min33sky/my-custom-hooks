import React, { useCallback, useState } from 'react';

type CustomType<T> = {
  value: T;
  name?: string;
};

type FieldEvent<T> = React.ChangeEvent<
  CustomType<T> & (HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)
>;

type ReturnType<T> = [
  T,
  (event: FieldEvent<T>) => void,
  React.Dispatch<React.SetStateAction<T>>
];

/**
 * Custom Input Hook
 * @param initialValue 기본값
 * @param validator 검증 함수
 * @returns Array
 */
export default function useInput<T>(
  initialValue: T,
  validator?: (value: T) => boolean
): ReturnType<T> {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(
    (event: FieldEvent<T>) => {
      const currentValue = event.target.value;

      // 검증 함수 존재 시 입력 값 검증하기
      if (
        validator &&
        typeof validator === 'function' &&
        !validator(currentValue)
      ) {
        // eslint-disable-next-line no-console
        console.log('유효하지 않은 값!!!');
        return;
      }

      setValue(currentValue);
    },
    [validator]
  );

  return [value, onChange, setValue];
}
