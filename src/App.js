import Home from './Components/Home/Home';
import UserInfo from './Components/UserInfo/UserInfo';
import Language from './Components/Languages/Languages';
import Following from './Components/Following/Following';
import Followers from './Components/Followers/Followers';
import Repos from './Components/Repos/Repos';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
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
        <Route exact path="/users/:username/repos">
          <Repos/>
        </Route>
        <Route path="/users/:username">
          <UserInfo />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;