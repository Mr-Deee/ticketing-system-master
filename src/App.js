import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Sell from "./pages/sell";
import Selltickets from "./pages/selltickets";
import Ticketinfo from "./pages/ticketinfo";
import SignUpPage from "./pages/auth/sign-up/Signup";
import SignIn from "./pages/auth/sign-in/Signin";
import Purchasing from "./pages/purchasing";
import Sellerstickets from "./pages/Sellerstickets";
import Searchfilter from "./pages/searchfilter";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sell" element={<Sell />}></Route>
        <Route path="/selling" element={<Selltickets />}></Route>
        <Route path="/ticket" element={<Ticketinfo />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/fliter" element={<Searchfilter />}></Route>
        <Route
          path="/purchase/:id/:concert/:price/:date/:time/:location/:number"
          element={<Purchasing />}
        ></Route>
        <Route path="/sellerstickets" element={<Sellerstickets />}></Route>
      </Routes>
    </div>
  );
}

export default App;
