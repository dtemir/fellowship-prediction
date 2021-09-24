import { useState, createContext , useContext, ReactNode} from 'react';
import axios from 'axios';

interface IPrediction
{
    username:string;
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
    const [prediction,setPrediction] = useState<IPrediction['prediction']>({});

    const getPrediction = async() => 
    {
        try
        {
            const response = await axios.post(`${API_BASE_URL}/profile`,{username});
            console.log('response',response);
        }   
        catch(error)
        {
            console.log('error',error);
        }
    }

    return(
        <PredictionContext.Provider value={{
            username,
            setUsername,
            prediction,
            getPrediction
        }}>
            {children}
        </PredictionContext.Provider>
    )
}



export default PredictionContextProvider;