// Importing required packages

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';



// Importing components
import Nav from './nav.jsx';
import Home from './home.jsx';
import About from './about.jsx';
import NotFound from './notfound.jsx';
import Footer from './footer.jsx';
import Gallery from './gallery.jsx';
import Login from './login.jsx';
import T from './t.jsx';
import Search from './Search.jsx'

var App = React.createClass({
  render: function() {
    return (
      <div>
          <Nav />
          {this.props.children}
          <Footer />
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/gallery/:search1" component={Gallery} />
      <Route path="/login" component={Login} />
      <Route path="/t" component={T} />
      <Route path="/search" component={Search} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>,
  document.getElementById('root')
);
