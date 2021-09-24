import { Switch, Route, useLocation } from "react-router";
import { Home, About, Form, Result, PageNotFound} from './pages/index';
import { Navbar, PrivateRoute } from "./components";
import { AnimatePresence } from "framer-motion";
import PredictionContextProvider from "./contexts/PredictionContextProvider";
import "./css/app.css";

const App = () => 
{
  const location = useLocation();

  return (
    <>
      <PredictionContextProvider>
        <div className="app">
          <Navbar/>
          <div className="dynamicLayout">
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.key}>
                  <Route exact path="/" component={Home}/>
                  <Route path="/about" component={About}/>
                  <Route path="/form" component={Form}/>
                  <PrivateRoute path="/result" component={Result}/>
                  <Route path="/" component={PageNotFound}/>
              </Switch>
            </AnimatePresence>
          </div>
        </div>
      </PredictionContextProvider>
    </>
  )
}

export default App;