import "./App.css";

import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Chat from "./Components/Chat/Chat";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/room/:roomId">
              <Chat key={window.location.pathname} />
            </Route>
            <Route path="/">{/* Welcome */}</Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
