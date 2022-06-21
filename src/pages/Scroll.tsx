import useScroll from '../hooks/useScrollCoords';

/**
 * 스크롤 좌표
 * @returns
 */
export default function Scroll() {
  const { xPos, yPos } = useScroll();

  return (
    <div style={{ height: '350vh', width: '100%' }}>
      <h2>useScroll Hook</h2>

      <div style={{ width: '150vw', height: '100%' }}>
        <p
          style={{
            position: 'fixed',
            top: 300,
            left: 200,
            fontSize: '3rem',
            fontWeight: 'bold',
            color: yPos > 400 ? 'red' : 'blue',
          }}
        >
          스크롤바 좌표 {xPos}, {yPos}
        </p>
      </div>
    </div>
  );
}
