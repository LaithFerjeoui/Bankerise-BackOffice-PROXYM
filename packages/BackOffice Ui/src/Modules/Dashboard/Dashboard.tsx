
import BarChart from './Components/BarChart';
import { TextGenerateEffect } from "@components/Text-Generate-Effect";
import PieChart from './Components/PieChart';
import LineChart from './Components/LineChart';
import Dropdown from './Components/Dropdown';



const Dashboard = () => {
  // Example data for the chart
  const BarData = {
    labels: ['backoffice', 'CSA', 'Studio', 'Customer', 'demo'],
    datasets: [{
      label: 'Logins',
      data: [65, 59, 80, 81, 2, 55, 10], // Sample data values
      backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color for the bars
      borderColor: 'rgba(54, 162, 235, 1)', // Border color for the bars
      borderWidth: 1
    }]
  };
  const LineData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
    datasets: [
      {
        label: 'API Requests',
        data: [65, 59, 80, 81, 56, 4, 40, 45, 23, 17, 35, 65, 80, 85, 78, 92, 105, 75, 60, 45, 32, 55, 65, 72],
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };
  
  const PieData = {
    labels: ['backoffice', 'CSA', 'Studio', 'Customer', 'demo'],
    datasets: [
      {
        label: 'User Distribution',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="space-y-12 mt-10">
      <span className="flex justify-center my-7 pb-6"><TextGenerateEffect words="Dashboard" /></span>
      <div className='flex justify-center items-center mx-auto'>
        <div className='w-2/3 bg-white/80 rounded-2xl px-auto p-4 m-7 shadow-xl'>
        <BarChart data={BarData} />
      </div>
      <div className='bg-white/80 w-1/3 rounded-2xl px-auto p-4 m-7 shadow-xl'>
        <PieChart data={PieData}/>
      </div>
      </div>
      <div className='bg-white/80 h-fit rounded-2xl px-auto p-4 m-7 shadow-xl'>
        <Dropdown/>
        <LineChart data={LineData}/>
      </div>
      
    </div>
  );
}

export default Dashboard;
