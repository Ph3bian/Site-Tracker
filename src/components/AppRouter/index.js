import React, { lazy, Suspense } from 'react'
import { withAuth } from 'utils/hoc'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { AppLoader } from '../Loader'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

const Sites = lazy(() => import(/* webpackChunkName: "Sites" */ 'pagesSites'))
const Site = lazy(() => import(/* webpackChunkName: "Site" */ 'pages/Site'))

const AppRouter = () => (
  <Router history={history}>
    <Suspense fallback={<AppLoader />}>
      <Switch>
        <Route path="/sites" exact component={Sites} />
        <Route path="/sites:id" exact component={Site} />
        <Route
          path="/"
          exact
          component={() => <Redirect to="/sites" />}
        />
      </Switch>
    </Suspense>
  </Router>
)
export default withAuth(AppRouter)
