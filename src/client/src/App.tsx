import { Switch, Route } from "react-router";
import { Home, About, PageNotFound} from './pages/index';

const App = () => 
{
  return (
    <>
      <div className="app">
        <div className="dynamicLayout">
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/" component={PageNotFound}/>
          </Switch>
        </div>
      </div>
    </>
  )
}

export default App;