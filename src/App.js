import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { Provider } from 'react-redux';
import DevTools from './devtool';

//鉴权
// import Auth from './containers/PrivateRoute';
import AuthorizedRoute from './AuthorizedRoute'

import store from './stores';

// import configureStore from './stores/configure-store';

//引入组件
import PrimaryLayout from './containers/PrimaryLayout';
import UnauthorizedLayout from './containers/UnauthorizedLayout';


//创建store
// const store = configureStore();

class App extends Component {
  constructor(props){
    super(props);

    this.onTestAuth = this.onTestAuth.bind(this);
  }

  componentDidMount(){

  }

  onTestAuth() {
    console.log("<====onTestAuth====>")
  }
  
  renderDevTools() {
    //如果是生产环境则移除 DevTools
    if (process.env.NODE_ENV === 'production') {
      return null;
    }
    return (<DevTools />)
  }

  render() {
    return (
      <Provider store={store}>
          <BrowserRouter basename=''>
            <div>
              <Switch>
                <Route path="/auth" component={UnauthorizedLayout} />
                <AuthorizedRoute path="/app" component={PrimaryLayout} />
                <Redirect to="/auth" />
              </Switch>
            </div>
          </BrowserRouter>
      </Provider>
    )
  }


}

export default App;
