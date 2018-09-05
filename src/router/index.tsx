import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Hello from '../containers/Hello';
const host = ''
const routes = [
    {
        exact: true,
        path: host + '/hello',
        component: Hello
    },];
const RouteWithSubRoutes = (route: any) => (
    <Route
        exact={route.exact}
        path={route.path}
        onEnter={route.onEnter}
        component={route.component}
    />
)

const RouteConfig = () => (
    <Router>
        <div>
            <Switch>
                {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
            </Switch>
        </div>
    </Router>
)

export default RouteConfig