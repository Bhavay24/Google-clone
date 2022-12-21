import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import React from "react";
import './App.css';
import Home from './components/Home';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/search">
            <SearchPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
//we have used reactor dom so if we search something in search bar so, search page will open.
//just to navigate from home to search, or vice-versa.
