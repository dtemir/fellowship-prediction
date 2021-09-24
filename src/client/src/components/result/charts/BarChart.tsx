import {Bar} from "react-chartjs-2";
import CHART_COLORS from "./COLORS";

interface IProps 
{
    userScore:number;
    averageScore:number;
}

const BarChart:React.FC<IProps> = ({userScore,averageScore}) => 
{   
    const data = 
    {
        labels: ['You', 'Average MLH Fellow'],   
        datasets: 
        [
          {
            backgroundColor: 
            [
                CHART_COLORS.DATA_BG_COLOR,
                CHART_COLORS.AVERAGE_DATA_BG_COLOR
            ],

            data: [userScore,averageScore,100],
          },
        ],
    };

    const options = 
    {
        plugins: 
        {
            legend: 
            {
              display: false
            },
            title: 
            {
                display: true,
                text: 'Your Performance compared To Average MLH Fellow',
            },
        },
    };

    return <Bar data={data} options={options}/>
}

export default BarChart;