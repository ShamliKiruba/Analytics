import React from 'react';
import {
    BrowserRouter, HashRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import Signin from './components/signin';
import Home from './components/home';
import Revenue from './components/revenue';
import CashPosition from './components/cashPosition';
import CashBalance from './components/cashBalance';

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <HashRouter>
                        <Switch>
                            <Route path="/signin" component={Signin} />
                            <Route path="/home" component={Home} />
                            <Route path="/revenue" component={Revenue} />
                            <Route path="/cashBalance" component={CashBalance} />
                            <Route path="/cashPosition" component={CashPosition} />
                            <Redirect from="/*" to="/signin" />
                        </Switch>
                </HashRouter>
            </BrowserRouter>
        )
    }
}

export default Router;