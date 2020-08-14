import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [link, setLink] = useState(false);
  const harryRef = useRef();
  const ronRef = useRef();

  const onMouseEnter = () => {
    console.log('onMouseEnter');
    setLink(true);
  };

  const onMouseLeave = (e) => {
    console.log('onMouseLeave');
    if (e.currentTarget.children[1].classList.contains('clicked')) {
      return;
    } else {
      setLink(!link);
    }
  };

  const onClicklink = (e) => {
    if (!e.currentTarget.parentNode.parentNode.classList.contains('clicked')) {
      e.currentTarget.parentNode.parentNode.classList.add('clicked');
    }
  };

  const onClickOther = (e) => {
    // submenuRef.current = true;
    if (e.target !== ronRef.current && e.target !== harryRef.current) {
      setLink(false);
    }
  };
  return (
    <nav onClick={onClickOther}>
      <ul>
        <li>
          <NavLink to="/" exact>
            홈
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">영화 소개</NavLink>
        </li>
        <li>
          <NavLink to="/profiles">등장인물</NavLink>
        </li>
        <li
          className="has_submenu"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="submenu_title">등장인물2</div>
          {link && (
            <ul className="submenu">
              <li>
                <NavLink to="/harry" onClick={onClicklink} ref={harryRef}>
                  해리포터
                </NavLink>
              </li>
              <li>
                <NavLink to="/ron" onClick={onClicklink} ref={ronRef}>
                  론위즐리
                </NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
