import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import history from "./routes/history";
import home from "./pages/home";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact name="Home" path="/" component={home} />
      </Switch>
    </Router>
  );
}

export default App;
