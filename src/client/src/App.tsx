import { Switch, Route, useLocation } from "react-router";
import { Home, About, Form, Result, PageNotFound} from './pages/index';
import { Navbar } from "./components";
import { AnimatePresence } from "framer-motion";

import "./css/app.css";

const App = () => 
{
  const location = useLocation();

  return (
    <>
      <div className="app">
        <Navbar/>
        <div className="dynamicLayout">
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/form" component={Form}/>
                <Route path="/result" component={Result}/>
                <Route path="/" component={PageNotFound}/>
            </Switch>
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default App;