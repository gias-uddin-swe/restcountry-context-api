import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createContext, useState } from "react";
import Button from "react-bootstrap/Button";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import NoMatch from "./components/NoMatch/NoMatch";
import Asia from "./components/Asia/Asia";
import Africa from "./components/Africa/Africa";
import Antarctica from "./components/Antarctica/Antarctica";
import Australia from "./components/Australia/Australia";
import Europe from "./components/Europe/Europe";
import NorthAmerica from "./components/NorthAmerica/NorthAmerica";
export const countryContext = createContext();
function App() {
  const [country, setCountry] = useState([]);
  return (
    <countryContext.Provider value={[country, setCountry]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/country/:countryId">
            <CountryDetails></CountryDetails>
          </Route>
          <Route path="/:asia/country">
            <Asia></Asia>
          </Route>
          <Route path="/:africa/country">
            <Africa></Africa>
          </Route>
          <Route path="/:asia/country">
            <Antarctica></Antarctica>
          </Route>
          <Route path="/:asia/country">
            <Australia></Australia>
          </Route>
          <Route path="/:asia/country">
            <Europe></Europe>
          </Route>
          <Route path="/:asia/country">
            <NorthAmerica></NorthAmerica>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </countryContext.Provider>
  );
}

export default App;
