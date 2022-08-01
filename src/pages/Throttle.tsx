import { useState } from 'react';
import LinkButton from '../components/Buttons/LinkButton';
import { useThrottle } from '../hooks/useThrottle';

function Throttle() {
  const [value, setValue] = useState(1557);

  const handleMinus = () => {
    setValue((prev) => prev - 1);
  };
  const handlePlus = () => {
    setValue((prev) => prev + 1);
  };

  return (
    <div className="container">
      <h1>Throttle</h1>
      <h2>업데이트 함수를 호출 후 주어진 시간동안에는 같은 요청을 무시한다.</h2>
      <p>업데이트 함수는 2초동안 한 번만 호출 가능</p>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <button onClick={useThrottle(handleMinus, 2000)}>-</button>
        <p>{value}</p>
        <button onClick={useThrottle(handlePlus, 2000)}>+</button>
      </div>
      <LinkButton url="useThrottle" />
    </div>
  );
}

export default Throttle;
