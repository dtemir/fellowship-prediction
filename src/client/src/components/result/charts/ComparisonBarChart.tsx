import { Bar } from 'react-chartjs-2';
import {IProps} from '../ProfileCard';
import CHART_COLORS from './COLORS';    
  

const ComparisonBarChart:React.FC<IProps> = ({data,averageData}) => {

    const chartData = 
    {
        labels: Object.keys(data),
        datasets:
        [
            /* user bar chart */
            {
              type: 'bar',
              label: 'You',
              backgroundColor: CHART_COLORS.DATA_BG_COLOR,
              data: Object.values(data),
            },
            {
              type: 'bar',
              label: 'Average Fellow',
              backgroundColor: CHART_COLORS.AVERAGE_DATA_BG_COLOR,
              data: Object.values(averageData),
            },
          ],
    }
    const options = {

    scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };
  
  return <Bar data={chartData as any} options={options as any} />
};

export default ComparisonBarChart;