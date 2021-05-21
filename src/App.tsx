import { LoginContainer } from "./components/pages/login.container";
import { HashRouter, Switch, Route } from "react-router-dom";
import Success from "./components/pages/Success";

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={LoginContainer} />
          <Route path="/pageB" component={Success} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
