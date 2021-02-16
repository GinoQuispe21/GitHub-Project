import Home from './Components/Home/Home';
import UserInfo from './Components/UserInfo/UserInfo.jsx';
import Language from './Components/Languages/Languages';
import Following from './Components/Following/Following';
import Followers from './Components/Followers/Followers';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/users/:username/language">
          <Language />
        </Route>
        <Route exact path="/users/:username/following">
          <Following />
        </Route>
        <Route exact path="/users/:username/followers">
          <Followers />
        </Route>
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
