import { Bar } from "react-chartjs-2";

const LoanStatisticsCard = () => {
  return (
    <div className="loanstats__card">
      <div className="loanstats__card--header">
        <h3>Loan Statistics</h3>
        <button>Export</button>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default LoanStatisticsCard;

const generalOptions = {
  borderRadius: 50,
  barPercentage: 0.4,
  borderSkipped: false,
  base: 200,
  categoryPercentage: 0.7,
};

const data = {
  labels: ["M", "T", "W", "T", "F", "S", "S"],
  datasets: [
    {
      label: "Paid Loans",
      data: [1000, 1000, 3000, 5000, 2000, 3000, 3000],
      backgroundColor: "#7895FF",
      ...generalOptions,
    },
    {
      label: "Unpaid Loans",
      data: [2000, 3000, 2000, 5000, 1000, 4000, 2000],
      backgroundColor: "#FF92AE",

      ...generalOptions,
    },
    {
      label: "Others",
      data: [3000, 1000, 3000, 1000, 2000, 3000, 4000],
      backgroundColor: "#FFD18B",
      ...generalOptions,
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};
