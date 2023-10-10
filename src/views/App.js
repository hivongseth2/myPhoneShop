// import logo from "./logo.svg";
import "../styles/App.scss";
import Nav from "../views/Nav.js";
import Register from "../views/Register";
import Login from "../views/Login.js";
import { ToastContainer, toast } from "react-toastify";
import ForgotPass from "./ForgotPass";
import "react-toastify/dist/ReactToastify.css";
import Information from "./Information";
import Shopping from "./Shopping";
import DetailItem from "./DetaiItem";
import Cart from "./Cart";
import CheckOut from "./CheckOut";
import Home from "./Home";
import IntroItem from "./IntroItem";
import { useState, createContext } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Personal from "./Personal";
import { AuthProvider } from "./AuthContext";
// import { AuthProvider } from "./AuthContext";
const LogContext = createContext();

function App() {
  const [isLog, setIsLog] = useState(false);
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <Nav value={isLog} />

            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>

              <Route path="/home" exact>
                <Personal />
              </Route>
              <Route path="/Register">
                <Register />
              </Route>
              <Route path="/Login">
                <Login isLog={isLog} setIsLog={setIsLog} />
              </Route>
              <Route path="/ForgotPass">
                <ForgotPass />
              </Route>
              <Route path="/Info">
                <Information />
              </Route>
              <Route path="/Shopping" exact>
                <Shopping />
              </Route>
              <Route path="/Shopping/:id">
                <DetailItem />
              </Route>
              <Route path="/Cart">
                <Cart />
              </Route>

              {/* <Route path="/CheckOut">
                <CheckOut />
              </Route> */}

              <Route
                path="/Checkout"
                render={(props) => <CheckOut {...props} />}
              />
            </Switch>
          </header>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
