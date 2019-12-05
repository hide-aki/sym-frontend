import React from 'react';

const Home = React.lazy(() => import('./views/Home'));
const Survey = React.lazy(() => import('./views/Survey'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/survey', exact: true, name: 'Survey', component: Survey }
];

export default routes;
