import React from 'react';
import ReactDOM from 'react-dom';
const fruits=["Apple","Banana","Grapes"];
const element=React.createElement('ol',null,
fruits.map((fruit)=>React.createElement('li',{key:fruit},fruit)));
ReactDOM.render(
    element,
  document.getElementById('root')
);

