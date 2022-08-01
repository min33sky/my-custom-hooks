import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const onPush = (e: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(`/${e.target.value}`);
  };

  return (
    <header className="header__container">
      <span className="header__logo">
        <Link to="/">Custom Hooks</Link>
      </span>

      <div>
        <select onChange={onPush}>
          <option value="" disabled>
            --- custom Hooks ---
          </option>
          <option value="">Home</option>
          <option value="first_render">useIsFirstRender</option>
          <option value="effect_once">useEffect_Once</option>
          <option value="update_effect">useEffect_afterFirstRender</option>
          <option value="is_mounted">useIsMounted</option>
          <option value="scroll">Scroll Coords</option>
          <option value="debounce">Debounce</option>
          <option value="throttle">Throttle</option>
          <option value="mediaquery">MediaQuery</option>
          <option value="outside_click">Outside Click</option>
          <option value="copy_to_clipboard">Copy to Clipboard</option>
          <option value="interval">Interval</option>
          <option value="input">Input</option>
          <option value="tabs">Tabs</option>
          <option value="fullscreen">Full Screen</option>
          <option value="notification">Notification</option>
          <option value="test">테스트 훅</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
