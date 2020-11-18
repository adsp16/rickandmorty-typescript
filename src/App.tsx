import React from 'react';
import "./App.css";
import Character from "./pages/Character";
import Home from "./pages/Home";
import NotFound404 from "./components/Error/NotFound404";
import { BrowserRouter as Router, Switch,  Route } from "react-router-dom";



const App : React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/characters/:id"
            render={(props ) => <Character {...props} />}
          />
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route path="*" component={NotFound404} status={404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
