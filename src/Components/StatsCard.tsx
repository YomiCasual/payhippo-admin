type StatsCardProps = {
  icon: string | JSX.Element;
  title: string;
  value: string | number;
  type?: string;
};

const StatsCard: React.FC<StatsCardProps> = ({
  icon,
  title,
  value,
  type = "",
}) => {
  return (
    <div className={`stat__card ${type}`}>
      <div className={`stat__card--icon ${type}__icon`}>{icon}</div>
      <div className="stat__card--content">
        <p>{title}</p>
        <h3>{value}</h3>
      </div>
    </div>
  );
};

export default StatsCard;
