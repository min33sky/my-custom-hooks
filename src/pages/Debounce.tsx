import React, { useEffect, useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';

function Debounce() {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce(value, 1000);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  /** Fetch API (optional) */
  useEffect(() => {
    //* Do fetch here...
    //* Triggers when "deboundedValue" changes
  }, [debouncedValue]);

  return (
    <div className="container">
      <p>실제 입력값: {value}</p>
      <p>디바운스된 값: {debouncedValue}</p>
      <p>Delay: 1초</p>

      <input
        type="text"
        value={value}
        onChange={handleChange}
        maxLength={27}
        placeholder="글자를 입력하세요."
      />
    </div>
  );
}

export default Debounce;
