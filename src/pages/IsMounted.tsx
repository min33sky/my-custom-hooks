import { useEffect, useState } from 'react';
import LinkButton from '../components/Buttons/LinkButton';
import { useIsMounted } from '../hooks/useIsMounted';

// eslint-disable-next-line no-promise-executor-return
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function Child() {
  const [data, setData] = useState('Loading');
  const isMounted = useIsMounted();

  useEffect(() => {
    delay(3000).then(() => {
      if (isMounted()) setData('OK');
    });
  }, [isMounted]);

  return <p>{data}</p>;
}

function IsMounted() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVIsibility = () => setIsVisible((prev) => !prev);

  return (
    <div className="container">
      <h1>IsMounted</h1>
      <h2>unmounted component의 state를 변경할 때 에러를 방지하기 위해 사용</h2>
      <p>버튼 클릭 후 3초후에 상태값이 변경.</p>
      <button onClick={toggleVIsibility}>{isVisible ? 'Hide' : 'Show'}</button>
      <LinkButton url="useIsMounted" />
      {isVisible && <Child />}
    </div>
  );
}

export default IsMounted;
