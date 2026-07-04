const LanguageChart = ({ languages }) => {
  if (!languages || languages.length === 0) {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4">
          Language Distribution
        </h2>

        <p className="text-slate-400">
          No language data available.
        </p>
      </div>
    );
  }

  const total = languages.reduce(
    (sum, item) => sum + item.count,
    0
  );

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">

      <h2 className="text-2xl font-bold text-white mb-8">
        Language Distribution
      </h2>

      <div className="space-y-6">

        {languages.map((item) => {
          const percentage = (
            (item.count / total) *
            100
          ).toFixed(1);

          return (
            <div key={item.language}>

              <div className="flex justify-between mb-2">

                <span className="text-slate-300 font-medium">
                  {item.language}
                </span>

                <span className="text-blue-400 font-semibold">
                  {item.count} Repos ({percentage}%)
                </span>

              </div>

              <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">

                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-700"
                  style={{
                    width: `${percentage}%`,
                  }}
                />

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default LanguageChart;