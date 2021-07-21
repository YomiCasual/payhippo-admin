import { Bar } from "react-chartjs-2";

const TopStatesCard = () => {
  return (
    <div className="loanstats__card top__states">
      <div className="loanstats__card--header top__states--header">
        <h3>Top States</h3>
        <div>
          <label htmlFor="country">Country</label>
          <select>
            <option>Nigeria</option>
            <option>South Africa</option>
            <option>Liberia</option>
            <option>Ghana</option>
          </select>
        </div>
      </div>
      <div className="top__states--graph">
        <div className="graph__container">
          <Bar data={data} options={options} />
        </div>

        <div className="tag__class">
          <TagItem name="Oyo" classes="danger" />
          <TagItem name="Osun" classes="success" />
          <TagItem name="Ogun" classes="warning" />
          <TagItem name="Lagos" classes="" />
        </div>
      </div>
    </div>
  );
};

export default TopStatesCard;

type TagItemProps = {
  name: string;
  classes?: string;
};

const TagItem: React.FC<TagItemProps> = ({ name, classes }) => (
  <div className="tag__item">
    <div className={`tag ${classes}`}></div>
    <p>{name}</p>
  </div>
);

const generalOptions = {
  borderRadius: 50,
  barPercentage: 0.4,
  borderSkipped: false,
  categoryPercentage: 0.6,
};

const data = {
  labels: ["Oyo", "Osun", "Ogun", "Lagos"],
  datasets: [
    {
      label: false,
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ["#FF92AE", "#FFD18B", "#f0c142", "#7895FF"],
      borderWidth: 1,
      ...generalOptions,
    },
  ],
};

const options = {
  indexAxis: "y",
  responsive: true,
  plugins: {
    legend: {
      display: false,
      label: {
        display: false,
      },
    },
  },
  scales: {
    x: {
      grid: {
        // display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
};
