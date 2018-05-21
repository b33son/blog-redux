import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers/reducers-root";
import registerServiceWorker from "./registerServiceWorker";
import PostsIndex from "./containers/posts-index";
import PostNew from "./components/post-new";
import PostView from "./containers/post-view";
import "semantic-ui-css/semantic.min.css";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div style={{ margin: "20px" }}>
        <Route exact path="/" component={PostsIndex} />
        <Route path="/posts/new" component={PostNew} />
        <Route path="/posts/:id" component={PostView} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
