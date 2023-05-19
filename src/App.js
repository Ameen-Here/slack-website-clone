import "./App.css";

import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Chat from "./Components/Chat/Chat";
import { useState } from "react";
import Login from "./Components/Login/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {!user ? (
          <Login />
        ) : (
          <>
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat key={window.location.pathname} />
                </Route>
                <Route path="/">{/* Welcome */}</Route>
              </Switch>
            </div>
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
