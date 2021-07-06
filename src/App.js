import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dasboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";

import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <div>splash screen...</div>;
  return children;
}
function App() {
  return (
    <Router>
      <div className="App">
        <AuthIsLoaded>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} />
          </Switch>
        </AuthIsLoaded>
      </div>
    </Router>
  );
}

export default App;

//ownProps inside mapstateToPRops will only get its values if the route syntax is this:
/* <Route path="/project/:id" component={ProjectDetails} /> */
// and NOT like this:
/* <Route ath="/project/:id" > 
   <ProjectDetails />
   </Route>  */
