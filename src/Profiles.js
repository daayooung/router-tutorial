import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
  const activeStyle = {
    color: 'rgb(235, 233, 90)',
    borderBottom: '2px solid rgb(235, 233, 90)',
    fontWeight: '600'
  };
  return (
    <div>
      <h3>등장인물 :</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/harrypotter">
            해리포터
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/ronweasley">
            론위즐리
          </NavLink>
        </li>
      </ul>

      <Route path="/profiles" exact render={() => <div></div>} />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
