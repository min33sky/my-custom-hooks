import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import LinkButton from '../components/Buttons/LinkButton';
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
    <>
      <Helmet>
        <title>useEffectOnce Hook</title>
      </Helmet>

      <div className="container">
        <h1>useEffectOnce Hook</h1>
        <h2>첫 번째 랜더링시에만 useEffect Hook을 호출하는 Hook</h2>
        <p>개발자 모드 콘솔창을 여세요. 🐨</p>
        <button onClick={() => setData(Date.now())}>Update Data</button>
        <LinkButton url="useEffectOnce" />
      </div>
    </>
  );
}

export default EffectOnce;
