import LinkButton from '../components/Buttons/LinkButton';
import useScroll from '../hooks/useScrollCoords';

/**
 * 스크롤 좌표
 * @returns
 */
export default function Scroll() {
  const { xPos, yPos } = useScroll();

  return (
    <div style={{ height: '250vh', width: '100vw' }}>
      <div
        className="container"
        style={{
          position: 'fixed',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <h1>useScroll Hook</h1>
        <h2>스크롤바 좌표를 알려주는 Hook</h2>
        <p>x축 스크롤바 위치: {xPos}</p>
        <p>y축 스크롤바 위치: {yPos}</p>
        <LinkButton url="useScroll" />
      </div>
    </div>
  );
}
