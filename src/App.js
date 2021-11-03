import './App.css';
import Home from './Components/Home/Home.jsx';
import LandingPage from './Components/LandingPage/Landing.jsx';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route path="/home" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
