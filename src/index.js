import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise'
import thunk from "redux-thunk";
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import reducers from './reducers';
import PostsIndex from './components/postsIndex';
import postsNew from './components/postsNew';
import postsShow from './components/postsShow';





const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore);


// use switch to render each route separatly and put the most exac route in top

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={postsNew}/>
          <Route path="/posts/:id" component={postsShow}/>
          <Route path="/" component={PostsIndex}/>
        </Switch>

      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
