type MiniCardStatsProps = {
  subtitle: string;
  value: number | string;
};

const MiniCardStats: React.FC<MiniCardStatsProps> = ({ subtitle, value }) => (
  <div className="registereduser__modal-card">
    <p>{subtitle}</p>
    <h3>{value}</h3>
  </div>
);

export default MiniCardStats;
