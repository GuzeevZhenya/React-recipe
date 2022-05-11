import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";

import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import { Category } from "./pages/Category";

function App() {
  return (
    <div className="App">
      <Router basename="/React-recipe">
        <Header />
        {/* <main className="container content" /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contact} />
          <Route path="/category/:name" component={Category} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
