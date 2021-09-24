import {IProps} from '../ProfileCard';
import {Line}  from 'react-chartjs-2'
const LineChart:React.FC<IProps> = ({data,averageData}) => 
{
    const chartData = 
    {
        labels: Object.keys(data),
        datasets: 
        [
          /* user line chart */
          {
            label: 'You',
            data: Object.values(data),
            fill: false,
            backgroundColor: 'rgb(255, 194, 71)',
            borderColor:'rgba(255, 194, 71,0.8)',
          },
          /* average fellow line chart*/
          {
            label: 'Average Fellow',
            data: Object.values(averageData),
            fill: false,
            backgroundColor: 'rgb(226, 161, 32)',
            borderColor: 'rgba(226, 161, 32,0.8)',
          },
        ],
    };
      
    const options = 
    {
        scales: {
            yAxes: [
              {
                type: 'linear',
                display: true,
                position: 'left',
                id: 'y-axis-1',
              },
              {
                type: 'linear',
                display: true,
                position: 'right',
                id: 'y-axis-2',
              },
            ],
          },
    };

    return <Line data={chartData as any} options={options as any}/>
}


export default LineChart;