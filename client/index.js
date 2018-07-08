import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import  { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
} from 'react-router-dom';


import reducers from './reducers/index';
import App from './components/App';


const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
))

const app = document.getElementById('app');


ReactDOM.render(
  <Provider store={store}>
  	<Router>
      <Switch>
        <Route exact path="/" component={App}/>
      </Switch>
  	</Router>
  </Provider>
        ,
    app);
