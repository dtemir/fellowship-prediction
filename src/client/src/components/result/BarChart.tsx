import {Bar} from "react-chartjs-2";

interface IProps 
{
    userScore:number;
    averageFellowScore:number;
}

const BarChart:React.FC<IProps> = ({userScore,averageFellowScore}) => 
{
    const data = 
    {
        labels: ['You', 'Average MLH Fellow'],   
        datasets: 
        [
          {
            backgroundColor: 
            [
                '#FFCD69', 
                '#E2A120'
            ],

            data: [userScore,averageFellowScore,100],
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