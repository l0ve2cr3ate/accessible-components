import React from "react";
import { Switch, Route } from 'react-router';
import Sidebar from './docs/components/sidebar/sidebar';
import DocsButton from "./docs/components/button/docs-button";
import DocsCard from "./docs/components/card/docs-card";


const App=() =>{
  return (
    <div data-testid="app">
     <Sidebar/>
       <Switch>
          <Route exact path="/button">
            <DocsButton />
          </Route>
          <Route exact path="/card">
            <DocsCard/>
          </Route>
        </Switch>
     </div>
  );
}

export default App;
