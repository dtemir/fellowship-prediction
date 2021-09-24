import { Radar } from "react-chartjs-2";
import { IProps } from "../ProfileCard";
import CHART_COLORS from "./COLORS";

const RadarChart:React.FC<IProps> = ({data,averageData}) => 
{
    const chartData = 
    {
        labels: Object.keys(data),
        datasets: 
        [
          {
            label: 'You',
            data: Object.values(data),
            backgroundColor: CHART_COLORS.DATA_BG_COLOR,
            borderColor: CHART_COLORS.DATA_BORDER_COLOR,
          },
          {
            label: 'Average Fellow',
            data: Object.values(averageData),
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