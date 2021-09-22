import { Switch, Route } from "react-router";
import { Home, About, Form, Result, PageNotFound} from './pages/index';
import { Navbar } from "./components";
import "./css/app.css";

const App = () => 
{
  return (
    <>
      <div className="app">
        <Navbar/>
        <div className="dynamicLayout">
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/form" component={Form}/>
              <Route path="/result" component={Result}/>
              <Route path="/" component={PageNotFound}/>
          </Switch>
        </div>
      </div>
    </>
  )
}

export default App;