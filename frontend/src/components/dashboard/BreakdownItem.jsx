const BreakdownItem = ({ label, value }) => {
  const score = Number(value) || 0;

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-slate-300 font-medium">
          {label}
        </span>

        <span className="text-blue-400 font-semibold">
          {score}
        </span>
      </div>

      <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-700"
          style={{
            width: `${Math.min(score, 100)}%`,
          }}
        />
      </div>
    </div>
  );
};

export default BreakdownItem;