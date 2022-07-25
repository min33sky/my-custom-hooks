import { useEffect, useState } from 'react';
import { useEffectOnce } from '../hooks/useEffectOnce';

function EffectOnce() {
  const [data, setData] = useState<number>(1557);

  useEffect(() => {
    console.log(`Normal useEffct....${data}`);
  }, [data]);

  useEffectOnce(() => {
    console.log(`Triggered Only Once, on Mount....${data}`);
  });

  return (
    <div className="container">
      <p>개발자 모드 콘솔창을 여세요. 🚀</p>
      <button onClick={() => setData(Date.now())}>Update Data</button>
    </div>
  );
}

export default EffectOnce;
