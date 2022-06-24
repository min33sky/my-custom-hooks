import toast from 'react-hot-toast';
import useCopyToClipboard from '../hooks/useCopyToClipboard';

const textData = [
  `type CopiedValue = string | null
   type CopyFn = (text: string) => Promise<boolean> // Return success`,
  `<button onClick={() => copy('A')}>A</button>
  <button onClick={() => copy('B')}>B</button>
  <button onClick={() => copy('C')}>C</button>`,
];

function CopyToClipboard() {
  const [value, copy] = useCopyToClipboard();

  const handleClick = async (item: string) => {
    if (await copy(item)) {
      toast.success('클립보드에 복사 성공');
    } else {
      toast.error('클립보드에 복사 실패');
    }
  };

  return (
    <div className="container">
      <h1>클립보드에 복사하기</h1>
      <ul>
        {textData.map((item, idx) => (
          <li key={idx}>
            <button onClick={() => handleClick(item)}>복사하기</button>
            <div>{item}</div>
          </li>
        ))}
      </ul>
      <div className="clipboard__result">{value}</div>
    </div>
  );
}

export default CopyToClipboard;
