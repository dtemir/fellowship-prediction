import {IProps} from "../ProfileCard";
export const sortData = (data:IProps['data'],averageData:IProps['data']) => 
{
    const sortedData = Object.entries(data).sort();
    const sortedAverageDate =Object.entries(averageData).sort();
    const dataset = sortedData.map(item=>item[1]);
    const averageDataset = sortedAverageDate.map(item=>item[1]);
    const labels = sortedData.map(item=>item[0])

    return {labels,dataset,averageDataset}
}