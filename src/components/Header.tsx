import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const onPush = (e: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(`/${e.target.value}`);
  };

  return (
    <header className="header__container">
      <div>
        <Link to="/">Custom Hooks</Link>
      </div>

      <div>
        <select onChange={onPush}>
          <option value="" disabled>
            --- custom Hooks ---
          </option>
          <option value="">Home</option>
          <option value="scroll">Scroll Coords</option>
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
