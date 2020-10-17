import React, { Component } from "react";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import Main from "./pages/main";
import Stream from "./pages/stream";
import Login from "./pages/login";
import Register from "./pages/register";
import TV from "./pages/tvshow";
import AuthGuard from "./components/AuthGuard";
import "./css/Main.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <AuthGuard
        path="/stream"
        render={(props) => (
          <Switch>
           
            <Route path="/stream/tv" component={TV} />
        <Route path="/stream" component={Stream} />
        </Switch>

        )}/>
        

        <Route exact path="/" component={Main} />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
