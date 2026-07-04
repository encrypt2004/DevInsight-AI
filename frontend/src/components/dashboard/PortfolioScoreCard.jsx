const PortfolioScoreCard = ({ analysis }) => {
  if (!analysis) return null;

  const score = analysis.portfolioScore || 0;
  const rating = analysis.overallRating || "Not Available";

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg">

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* Left Section */}
        <div>

          <h2 className="text-3xl font-bold text-white">
            Portfolio Score
          </h2>

          <p className="text-slate-400 mt-2">
            AI Generated Portfolio Evaluation
          </p>

          <div className="mt-8 flex items-center gap-6">

            {/* Circular Score */}
            <div className="relative w-32 h-32">

              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(#3b82f6 ${
                    score * 3.6
                  }deg, #1e293b 0deg)`,
                }}
              />

              <div className="absolute inset-2 rounded-full bg-slate-900 flex items-center justify-center">

                <span className="text-4xl font-bold text-white">
                  {score}
                </span>

              </div>

            </div>

            <div>

              <p className="text-slate-400">
                Overall Rating
              </p>

              <h3 className="text-2xl font-bold text-green-400 mt-1">
                {rating}
              </h3>

            </div>

          </div>

        </div>

        {/* Right Section */}

        <div className="flex-1">

          <div className="bg-slate-800 rounded-xl p-6">

            <h3 className="text-xl font-semibold text-white mb-4">
              Evaluation Summary
            </h3>

            <div className="space-y-3">

              <div className="flex justify-between">

                <span className="text-slate-400">
                  Portfolio Score
                </span>

                <span className="font-semibold text-blue-400">
                  {score}/100
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-slate-400">
                  Overall Rating
                </span>

                <span className="font-semibold text-green-400">
                  {rating}
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default PortfolioScoreCard;