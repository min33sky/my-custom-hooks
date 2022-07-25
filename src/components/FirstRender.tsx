import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useIsFirstRender } from '../hooks/useIsFirstRender';

function FirstRender() {
  const isFirst = useIsFirstRender();
  const [data, setData] = useState(1557);

  useEffect(() => {
    console.log(`Normal useEffect: ${data}`);
  }, [data]);

  return (
    <>
      <Helmet>
        <title>useIsFirstRender Hook</title>
      </Helmet>

      <div className="container">
        <h1>useIsFirstRender Hook</h1>
        <p>개발자 모드 콘솔창을 여세요 🚀</p>
        <p>
          첫 번째 랜더입니까?{' '}
          <span style={{ color: isFirst ? 'indigo' : 'tomato' }}>
            {isFirst ? '예' : '아니오'}
          </span>
        </p>
        <button onClick={() => setData(Date.now())}>Update Data</button>
      </div>
    </>
  );
}

export default FirstRender;
