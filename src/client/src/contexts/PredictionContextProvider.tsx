import { useEffect, useState, createContext , useContext, ReactNode} from 'react';
import axios from 'axios';

interface IPrediction
{
    username:string;
    isFetching:boolean;
    error:boolean;
    setUsername:React.Dispatch<React.SetStateAction<string>>;
    prediction:any;
    setIsFetching:React.Dispatch<React.SetStateAction<boolean>>,
    setError:React.Dispatch<React.SetStateAction<boolean>>,
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
    const [error,setError] = useState<IPrediction['error']>(false);
    const [isFetching,setIsFetching] =useState<IPrediction['isFetching']>(false);


    useEffect(() => {
        
        if(!isFetching) return;
        axios.post(`${API_BASE_URL}/profile`,{username:username.trim()})
        .then((response)=>{
            const {data} = response;
            if(data.status === 'fail') throw Error('USER NOT FOUND')
            setPrediction(data.data);
            setIsFetching(false);
        })
        .catch(error=>{
            setError(true);
            setIsFetching(false);
        })
        
    }, [username,isFetching])

    return(
        <PredictionContext.Provider value={{
            username,
            setUsername,
            prediction,
            isFetching,
            setIsFetching,
            error,
            setError
        }}>
            {children}
        </PredictionContext.Provider>
    )
}



export default PredictionContextProvider;