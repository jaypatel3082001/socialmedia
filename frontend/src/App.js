import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
// import Footer from "./components/footer/Footer";
// import Topbar from "./components/topbar/Topbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import "./App.css"
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
// import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const { user } = useContext(AuthContext)
  return(
    <Router>
      <Switch>
        <Route exact path="/">
      
        {user ? <Home /> : <Register />}
          <Home/>
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login/>}
        </Route>
        <Route path="/register">
        {user ? <Redirect to="/" /> : <Register/>}
        </Route>
        <Route path="/profile/:username">
          <Profile/>
        </Route>
      </Switch>
   </Router>

 );
  }


export default App;
