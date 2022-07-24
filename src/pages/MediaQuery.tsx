import { useMediaQuery } from '../hooks/useMediaQuery';

function MediaQuery() {
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <div
      className="container"
      style={{ backgroundColor: matches ? 'lavender' : 'palegoldenrod' }}
    >
      <p>뷰포트의 크기가 768 pixels보다 {matches ? '넓어요.' : '좁아요.'}</p>
    </div>
  );
}

export default MediaQuery;
