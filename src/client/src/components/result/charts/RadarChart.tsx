import { Radar } from "react-chartjs-2";
import { IProps } from "../ProfileCard";
import CHART_COLORS from "./COLORS";
import { sortData } from "./helperMethods";

const RadarChart:React.FC<IProps> = ({data,averageData}) => 
{
    const {labels,dataset,averageDataset} = sortData(data,averageData);

    const chartData = 
    {
        labels:labels.slice(1,-1),
        datasets: 
        [
          {
            label: 'You',
            data: dataset.slice(1,-1),
            backgroundColor: CHART_COLORS.DATA_BG_COLOR,
            borderColor: CHART_COLORS.DATA_BORDER_COLOR,
          },
          {
            label: 'Average Fellow',
            data: averageDataset.slice(1,-1),
            backgroundColor: CHART_COLORS.AVERAGE_DATA_BG_COLOR,
            borderColor: CHART_COLORS.AVERAGE_DATA_BORDER_COLOR,
          },
        ],
      };
      
      const options = 
      {
        scale: {
          ticks: { beginAtZero: true },
        },
      };

    return <Radar data={chartData as any} options={options as any}/>
}

export default RadarChart;