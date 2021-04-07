import "./App.css";
import { Container, Grid } from "@material-ui/core";
import { Profile, Button, Header, Footer } from "./components";
import { Portfolio, Resume } from "./pages";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
          style={{ backgroundColor: "red" }}
        >
          <Profile />
        </Grid>
        <Grid item xs style={{ backgroundColor: "yellow" }}>
          <Header />
          <Router>
            <Switch>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/">
                <Resume />
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
