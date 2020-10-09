import React from "react";
import Button from "./components/button/Button";
import Card from "./components/card/Card";

function App() {
  return (
    <>
      <Button color="violet">Example</Button>
      <Button color="gray">Example</Button>
      <Card>
        <ul>
       <h2>card-header</h2>
       <li>
       <p>This is an example of the card text</p>
       </li>
       </ul>
      </Card>
    </>
  );
}

export default App;
