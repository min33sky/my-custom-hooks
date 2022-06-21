import useInput from '../hooks/useInput';

function maxLen10(str: string) {
  return str.length <= 10;
}

function filterAtSign(str: string) {
  return !str.includes('@');
}

function Input() {
  const [inputValue1, onChangeInputValue1] = useInput<string>('', maxLen10);
  const [inputValue2, onChangeInputValue2] = useInput<string>('', filterAtSign);

  return (
    <div>
      <h2>useInput Hook</h2>
      <input
        type="text"
        value={inputValue1}
        placeholder="10자리까지 입력 가능합니다."
        onChange={onChangeInputValue1}
      />
      <input
        type="text"
        value={inputValue2}
        placeholder="@는 입력 불가능합니다."
        onChange={onChangeInputValue2}
      />
    </div>
  );
}

export default Input;
