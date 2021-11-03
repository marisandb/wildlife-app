// import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Header from "./components/Header";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
// import SingleThought from "./pages/SingleThought";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

import Navbar from "./components/nav";
// import About from "./pages/about";
import Animals from "./pages/animals";

function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        {/* <Header /> */}
        <div className="container">
          <Navbar />

          <main className="Wildlife">
            <Switch>
              {/* <Route exact path="/" component={Home} /> */}
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile/:username?" component={Profile} />

              {/* <Route exact path="/about" component={About} /> */}
              <Route exact path="/animals" component={Animals} />
              <Route component={NoMatch} />
            </Switch>
          </main>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
