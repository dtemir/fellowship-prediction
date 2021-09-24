import {IProps} from '../ProfileCard';
import {Line}  from 'react-chartjs-2';
import CHART_COLORS from './COLORS';
import { sortData } from './helperMethods';

const LineChart:React.FC<IProps> = ({data,averageData}) => 
{
    const {labels,dataset,averageDataset} = sortData(data,averageData);

    const chartData = 
    {
        labels:labels,
        datasets: 
        [
          /* user line chart */
          {
            label: 'You',
            data: dataset,
            fill: false,
            backgroundColor: CHART_COLORS.DATA_BG_COLOR,
            borderColor:CHART_COLORS.DATA_BORDER_COLOR,
          },
          /* average fellow line chart*/
          {
            label: 'Average Fellow',
            data: averageDataset,
            fill: false,
            backgroundColor: CHART_COLORS.AVERAGE_DATA_BG_COLOR,
            borderColor: CHART_COLORS.AVERAGE_DATA_BORDER_COLOR
          },
        ],
    };
      
    const options = 
    {
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

    return <Line data={chartData as any} options={options as any}/>
}


export default LineChart;



