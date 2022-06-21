import { useState } from 'react';
import useInterval from '../hooks/useInterval';

/**
 * 인터벌 관련 페이지
 * @returns
 */
function Interval() {
  const [delay, setDelay] = useState(1000);
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);

  useInterval(
    () => setCount((prev) => prev + delay / 1000),
    flag ? delay : null
  );

  const toggleDelay = () => {
    setFlag((prev) => !prev);
  };

  return (
    <div>
      <div>{count}</div>;
      <label htmlFor="check">
        <input type="checkbox" id="check" onClick={toggleDelay} />
        <p>ㅋㅋㅋㅋ</p>
      </label>
    </div>
  );
}

export default Interval;
