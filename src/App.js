import Home from './Components/Home/Home';
import UserInfo from './Components/UserInfo/UserInfo.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/users/:username">
            <UserInfo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>
    </>
  );
}

export default App;
