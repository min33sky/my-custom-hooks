import useNotification from '../hooks/useNotification';

function Notification() {
  const onNotification = useNotification('알림창 입니다.', {
    body: '알림 내용입니다.',
  });

  return (
    <div>
      <h2>useNotification</h2>
      <button type="button" onClick={onNotification}>
        알림 버튼
      </button>
    </div>
  );
}

export default Notification;
