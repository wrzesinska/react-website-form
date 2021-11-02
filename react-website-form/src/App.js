import "./App.css";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import Form from "./components/Form.js";
import Footer from "./components/Footer.js";
import Profile from "./components/pages/Profile/Profile.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/form' exact component={Form} />
        <Route path='/profile' exact component={Profile} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
