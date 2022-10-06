// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import Home from "./Components/Home";
import ItemContainer from "./Components/ItemContainer";
import Signup from "./Components/Signup";
import TripForm from "./Components/TripForm";
import ItemForm from "./Components/ItemForm";

function App() {
  const [user, setUser] = useState(null);
  const [trips, setTrips] = useState([]);

  

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        });
      }
    });
  }, []);


    useEffect(() => {
        fetch("/trips")
        .then(res => res.json())
           .then(setTrips)
           }, [])
  

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar user={user} setUser={setUser}/>
        <Switch>

        <Route exact path="/">
           <Home/>
        </Route>

        <Route exact path="/login">
            <Login setUser={setUser} user={user}/>
          </Route>

          <Route exact path="/signup">
            <Signup setUser={setUser} user={user}/>
          </Route>

          <Route exact path="/tripform">
            <TripForm trips={trips} setTrips={setTrips}/>
          </Route>

          <Route exact path="/itemform">
            <ItemForm user={user} trips={trips}/>
          </Route>

          <Route exact path="/myitems">
            <ItemContainer trips={trips}/>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
