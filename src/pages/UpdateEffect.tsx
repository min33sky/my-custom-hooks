import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import LinkButton from '../components/Buttons/LinkButton';
import { useUpdateEffect } from '../hooks/useUpdateEffect';

function UpdateEffect() {
  const [data, setData] = useState(1557);

  useEffect(() => {
    console.log(`Normal useEffect... ${data}`);
  }, [data]);

  useUpdateEffect(() => {
    console.log(`Update useEffect only: ${data}`);
  }, [data]);

  return (
    <>
      <Helmet>
        <title>useUpdateEffect Hook</title>
      </Helmet>

      <div className="container">
        <h1>useUpdateEffect Hook</h1>
        <h2>컴포넌트의 첫 mount될 때는 useEffect Hook을 호출하지 않는 Hook </h2>
        <p>개발자 모드 콘솔을 켜세요 🚀</p>
        <button onClick={() => setData(Date.now())}>Update Data</button>
        <LinkButton url="useUpdateEffect" />
      </div>
    </>
  );
}

export default UpdateEffect;
