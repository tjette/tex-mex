import React from 'react';
import './styles.css';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import AboutUs from './AboutUs/AboutUs';
import Menu from './Menu/Menu';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Router>
  <div>
    <NavigationBar />
    <Route path="/AboutUs" component={AboutUs}/>
    <Route path="/Menu" component={Menu}/>

  </div>
  </Router>
), document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
