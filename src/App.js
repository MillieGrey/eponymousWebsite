import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Navbar";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <Footer />
        <Switch>
          <Route exact path={["/home", "/", ""]}>
            <Home />
          </Route>
          <Route exact path={""}>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
