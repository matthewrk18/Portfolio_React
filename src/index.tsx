import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Home, Contact, Navigation, Portfolio, Resume } from './components';
import reportWebVitals from './reportWebVitals';
import './styles.css';
import { Container} from 'react-bootstrap' 

ReactDOM.render(
  
  <React.StrictMode>
    <Router>

      <Navigation></Navigation>
      <Switch>

        <Route exact path='/'>
          <Home title={'React Portfolio'}/>
        </Route>

        <Route path='/contact'>
        <Contact></Contact>
        </Route>

        <Route path='/portfolio'>
        <Portfolio></Portfolio>
        </Route>

        <Route path='/resume'>
        <Resume></Resume>
        </Route>

      </Switch>
    </Router>



  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
