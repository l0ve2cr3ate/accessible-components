import React from "react";
import Sidebar from './docs/components/sidebar/sidebar';
import Button from "./components/button/Button";
import Card from "./components/card/Card";

function App() {
  return (
    <>
    <Sidebar/>
      <Button color="violet">Example</Button>
      <Button color="gray">Example</Button>
      <Card>
       <h2>card-header</h2>
       <p>This is an example of the card text</p>
      </Card>
    </>
  );
}

export default App;
