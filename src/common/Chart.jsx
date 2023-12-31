import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const Chart = ({ chartData }) => {
  return (
    <>
      <Bar
        data={chartData}
        options={{
          // responsive: true,
          // title: {
          //   display: true,
          //   text: 'Categories',
          //   fontSize: 20,
          // },
          // legend: {
          //   display: true,
          //   position: 'top',
          // },
      
          scales: {
            x: {
              ticks: {
                color: "white"
              }
            },
            y: {
              ticks: {
                color: "gray"
              }
            }
          }
        }}
      />
    </>
  );
};
