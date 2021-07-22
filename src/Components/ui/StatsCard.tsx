type StatsCardProps = {
  icon: string | JSX.Element;
  title: string;
  value: string | number;
  type?: string;
  onClick?: () => void;
};

const StatsCard: React.FC<StatsCardProps> = ({
  icon,
  title,
  value,
  type = "",
  onClick,
}) => {
  return (
    <div onClick={onClick} className={`stat__card ${type}`}>
      <div className={`stat__card--icon ${type}__icon`}>{icon}</div>
      <div className="stat__card--content">
        <p>{title}</p>
        <h3>{value}</h3>
      </div>
    </div>
  );
};

export default StatsCard;
