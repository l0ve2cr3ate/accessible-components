import React from 'react';
import { Switch, Route } from 'react-router';
import Sidebar from './docs/components/sidebar/sidebar';
import Example from './docs/components/example/example';
import Button from './components/button/Button';
import Card from './components/card/Card';
import { styled } from './stitches.config';

const AppContainer = styled('div', {
  fontFamily: 'Roboto',
});

const App = () => {
  return (
    <AppContainer data-testid='app'>
      <Sidebar />
      <Switch>
        <Example>
          <Route exact path='/button'>
            <Button color='violet'>Example</Button>
            <Button color='gray'>Example</Button>
          </Route>
          <Route exact path='/card'>
            <Card>Hello</Card>
          </Route>
        </Example>
      </Switch>
    </AppContainer>
  );
};

export default App;
