import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import User from './views/User';
import Users from './views/Users';
import ReduxProvider from './components/ReduxProvider';

function App() {
  return (
    <ReduxProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/user/:id">
              <User />
            </Route>
            <Route path="/">
              <Users />
            </Route>
          </Switch>
        </div>
      </Router>
    </ReduxProvider>
  );
}

export default App;
