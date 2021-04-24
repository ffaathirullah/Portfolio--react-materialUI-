import "./App.css";
import { Container, Grid } from "@material-ui/core";
import { Profile, Button, Header, Footer } from "./components";
import Portfolio from "./pages/Portfolio/index.js";
import Resume from "./pages/Resume/index.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Container className={"top_60"}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <Switch>
              <Route path="/">
                <Resume />
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
            </Switch>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
