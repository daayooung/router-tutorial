import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Profiles from './components/Profiles';
import Profiles2 from './components/Profiles2';
import Harry from './components/Harry';
import Nav from './common/Nav';
import Ron from './components/Ron';

const App = () => {
  return (
    <div className="container">
      <Nav />
      <section>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path={'/about'} component={About} />
          <Route path="/profiles" component={Profiles} />
          <Route path="/profiles2" component={Profiles2} />
          <Route path="/harry" component={Harry} />
          <Route path="/ron" component={Ron} />
          <Route
            render={({ location }) => (
              <div>
                <h2>존재하지 않는 페이지 입니다.</h2>
                <p>{location.pathname}</p>
              </div>
            )}
          />
        </Switch>
      </section>
    </div>
  );
};

export default App;
