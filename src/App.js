import React from 'react';
import { Router, Route, Redirect, Switch } from "react-router-dom";
import Loadable from 'react-loadable';
import history from 'routes/history'
import routes from 'routes'

import 'antd/dist/antd.css'
import Loader from 'components/Loader'
import Header from 'components/Header'

function App() {
  const LoadableComponent = params =>
    Loadable({
      loader: params,
      loading: Loader,
    })

  return (
    <React.Fragment>
      <Router history={history}>
        <Header />
        <Switch>
          {routes.map((item, key) => {
            if (item.redirect) {
              return (<Redirect key={key} from={item.path} to={item.redirect} />);
            } else {
              return (<Route key={key} exact path={item.path} component={LoadableComponent(item.component)} />)
            }
          })}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
