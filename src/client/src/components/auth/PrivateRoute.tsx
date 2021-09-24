import {Redirect, Route} from 'react-router-dom';
import { usePrediction } from '../../contexts/PredictionContextProvider';

const PrivateRoute:React.FC<any> = ({ flag, component:Component , ...res}) => {
    
    const {username} = usePrediction();

    return (
        <Route
            {...res}
            render = {props => {
                return username ? <Component {...props}/> : <Redirect to='/'/>
            }}
        >

        </Route>
    );
}
 
export default PrivateRoute;