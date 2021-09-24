import { Bar } from 'react-chartjs-2';
import {IProps} from '../ProfileCard';
import CHART_COLORS from './COLORS'; 
import { sortData } from './helperMethods';   

  

const ComparisonBarChart:React.FC<IProps> = ({data,averageData}) => {

    const {labels,dataset,averageDataset} = sortData(data,averageData);

    const chartData = 
    {
        labels: labels,
        datasets:
        [
            /* user bar chart */
            {
              type: 'bar',
              label: 'You',
              backgroundColor: CHART_COLORS.DATA_BG_COLOR,
              data: dataset,
            },
            {
              type: 'bar',
              label: 'Average Fellow',
              backgroundColor: CHART_COLORS.AVERAGE_DATA_BG_COLOR,
              data: averageDataset,
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