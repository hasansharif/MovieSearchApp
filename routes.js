
import Loadable from 'react-loadable';
import React from 'react';


var getloader = () => {
  return (<div>
    Loading...
         </div>);
};

export var routesArray = [
  {
    path: '/',
    component: Loadable({
      loader: () => import(/* webpackChunkName: "Home" */  './app/src/components/HomeScreen'),
      loading: getloader
    })
  }, {
    path: '/signin',
    component: Loadable({
      loader: () => import(/* webpackChunkName: "SignIn" */  './app/src/components/SignIn'),
      loading: getloader
    })
  },
]