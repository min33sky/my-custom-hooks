import { useState } from 'react';
import useOutsideClick from '../hooks/useOutsideClick';

function OutsideClick() {
  const [isOpened, setIsOpened] = useState(false);
  const ref = useOutsideClick(() => setIsOpened(false));

  return (
    <div className="outside__container">
      <h1>useOutsideClick Hook 🚀</h1>

      {/* Button */}
      <div ref={ref} className="outside__float-button">
        <svg
          onClick={() => setIsOpened((prev) => !prev)}
          xmlns="http://www.w3.org/2000/svg"
          width="192"
          height="192"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none" />
          <path
            d="M96,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4Z"
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="136"
            y1="64"
            x2="192"
            y2="120"
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="216 216 96 216 40.5 160.5"
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="164"
            y1="92"
            x2="68"
            y2="188"
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </svg>

        {/* 메뉴 */}
        <ul className={`outside__float-menu ${isOpened && 'expended'}`}>
          <li onClick={() => console.log('메뉴1')}>메뉴 1</li>
          <li onClick={() => console.log('메뉴2')}>메뉴 2</li>
          <li onClick={() => console.log('메뉴3')}>메뉴 3</li>
          <li onClick={() => console.log('메뉴4')}>메뉴 4</li>
        </ul>
      </div>
    </div>
  );
}

export default OutsideClick;
