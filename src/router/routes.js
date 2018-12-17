import React from 'react';
import { Route,Switch,BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader'; // 引入 热更新的 hot 方法

import App from '../App';
import Home from '../containers/Home';
import Demo from '../containers/Demo';
import Login from '../containers/Login';




const Root = () => (
      <Router>
        <div>
        <Switch>
            <Route
                path="/"
                render={props => (
                    <div>
                        <Switch>
                            <Route exact path="/" component={App} />
                            <Route path="/home" component={Home} />
                            <Route path="/demo" component={Demo} />
                            <Route path="/login" component={Login} />
                        </Switch>
                    </div>
                )}
            />
         </Switch>
        </div>
      </Router>
);
// react-hot-loader@4.x.x 可以在这里设置热更新模块
export default hot(module)(Root);