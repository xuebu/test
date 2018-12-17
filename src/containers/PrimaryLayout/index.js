import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Demo from '../../containers/Demo'
import Home from '../../containers/Home'



const PrimaryLayout = ({ match }) => (
    <div>
        <main>
            <Switch>
                <Route path={`${match.path}`} exact component={Home} />
                <Redirect to={`${match.url}`} />
            </Switch>
        </main>
    </div>
)


export default PrimaryLayout;
