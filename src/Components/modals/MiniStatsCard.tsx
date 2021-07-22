type MiniCardStatsProps = {
  subtitle: string;
  value: number;
};

const MiniCardStats: React.FC<MiniCardStatsProps> = ({ sutitle, value }) => (
  <div className="registereduser__modal-card">
    <p>{subtitle}</p>
    <h3>{value}</h3>
  </div>
);

export default MiniCardStats;
