const Header = () => {
  return (
    <header className="border-b border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">

        <p className="inline-block px-4 py-1 rounded-full bg-slate-800 text-slate-300 text-sm mb-4">
          AI Powered GitHub Portfolio Analyzer
        </p>

        <h1 className="text-5xl font-extrabold tracking-tight">
          <span className="text-white">DevInsight</span>{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            AI
          </span>
        </h1>

        <p className="mt-5 max-w-2xl mx-auto text-slate-400 text-lg leading-8">
          Analyze any GitHub profile using GitHub APIs, Rule-Based Portfolio
          Scoring and Gemini AI to generate recruiter-ready insights.
        </p>

      </div>
    </header>
  );
};

export default Header;