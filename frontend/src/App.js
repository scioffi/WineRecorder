import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Lists, List, TastingReview } from "./components"
import {Container} from "react-bootstrap";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <Route path="/List/:list_id" component={List} />
          <Route path="/Tasting/:tasting_id" component={TastingReview} />
          <Route path="/Tasting" component={TastingReview} />
          <Route path="/" exact component={Lists} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
