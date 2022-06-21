import useFullscreen from '../hooks/useFullscreen';

/**
 * 풀스크린으로 보여주는 페이지
 * @returns
 */
function FullScreen() {
  const { elementRef, toggleScreen } = useFullscreen<HTMLImageElement>();

  return (
    <div>
      <h2>useFullScreen - 사진을 클릭</h2>
      <img
        ref={elementRef}
        alt="fullScreen_Image"
        src="https://images.unsplash.com/photo-1616628950295-d3288bd7a96d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        onClick={toggleScreen}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
}

export default FullScreen;
