import { useState, createContext , useContext, ReactNode} from 'react';
import axios from 'axios';

interface IPrediction
{
    username:string;
    error:boolean;
    setUsername:React.Dispatch<React.SetStateAction<string>>;
    prediction:{[feature:string]:number};
    getPrediction:() =>Promise<void>,
}

const PredictionContext = createContext<IPrediction|null>(null);
export const usePrediction = ():IPrediction =>
{   
    const context = useContext(PredictionContext);
    if (context) return context
    throw Error('NullContextError: PredictionContext is null');
}

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const PredictionContextProvider:React.FC<ReactNode> = ({children}) => 
{

    const [username,setUsername] = useState<string>('');
    const [prediction,] = useState<IPrediction['prediction']>({});
    const [error,setError] = useState<IPrediction['error']>(false)

    const getPrediction = async() => 
    {
        try
        {
            const response = await axios.post(`${API_BASE_URL}/profile`,{username});
            console.log('response',response);
        }   
        catch(error)
        {
            setError(true);
        }
    }

    return(
        <PredictionContext.Provider value={{
            username,
            setUsername,
            prediction,
            getPrediction,
            error
        }}>
            {children}
        </PredictionContext.Provider>
    )
}



export default PredictionContextProvider;