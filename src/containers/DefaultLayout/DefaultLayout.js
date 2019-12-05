import React, { useState, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { useMediaQuery } from 'react-responsive'
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import {
    AppHeader,
  } from '@coreui/react';

import routes from '../../routes';

const DefaultHeader = React.lazy(() => import('./DefaultHeader'));
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const DefaultLayout = () => {
  const loading = () => <div className="animated fadeIn pt-1 text-center"><div className="sk-spinner sk-spinner-pulse"></div></div>;

  const [change, setChange] = useState(false);
  const changePosition = 200;

  let position = useWindowScrollPosition();

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  let style = {
    backgroundColor: "#FFF166",
    transition: "400ms ease",
    position: "fixed",
    height:"42px",
    display: change ? 'flex' : 'none',
  };


    return (
      <div className="app">
        <Desktop>
          <AppHeader fixed style={style} >
            <Suspense fallback={loading()}>
              <DefaultHeader change={change} />
            </Suspense>
          </AppHeader>
        </Desktop>
        <Tablet>
          <DefaultHeader />
        </Tablet>
        <Mobile>
        <DefaultHeader />
        </Mobile>
        <div className="app-body">
          <main className="main">
            <Container fluid>
              <Suspense fallback={loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/" />
                </Switch>
              </Suspense>
            </Container>
          </main>
        </div>
      </div>
    );

}

export default DefaultLayout;
