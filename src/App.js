import './App.css';
import Home from './Components/Home/Home.jsx';
import LandingPage from './Components/LandingPage/Landing.jsx';
import Detail from './Components/DetailCard/Detail'
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route path="/home" component={Home}/>
      <Route path='/movie/' component={Detail}></Route>
      </Switch>
    </div>
  );
}

export default App;
