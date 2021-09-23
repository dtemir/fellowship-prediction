import { useState, useEffect, createContext , useContext, ReactNode} from 'react';

interface IPrediction
{
    username:string,
    setUsername:React.Dispatch<React.SetStateAction<string>>,
    prediction:{[feature:string]:number}
}

const PredictionContext = createContext<IPrediction|null>(null);
export const usePrediction = ():IPrediction =>
{   
    const context = useContext(PredictionContext);
    if (context) return context
    throw Error('NullContextError: PredictionContext is null');
}

const API_BASE_URL = 'https://fellowship-predict-staging.herokuapp.com/profile';

const PredictionContextProvider:React.FC<ReactNode> = ({children}) => 
{

    const [username,setUsername] = useState<string>('');
    const [prediction,setPrediction] = useState<IPrediction['prediction']>({})

    return(
        <PredictionContext.Provider value={{
            username,
            setUsername,
            prediction
        }}>
            {children}
        </PredictionContext.Provider>
    )
}



export default PredictionContextProvider;