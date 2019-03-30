import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Sidebar from '../sidebar/sidebar'
import routes from '../../../config/routes'

import styles from './app.scss'

const RouteWithSubRoutes = (route) => (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Sidebar />
        <main className={styles.content}>
          {
              routes.map((route) => (
              <RouteWithSubRoutes key={route.id} {...route} />
            ))
          }
        </main>
      </Router>
    )
  }
}

export default App
