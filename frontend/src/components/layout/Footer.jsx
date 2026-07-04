const Footer = () => {
  return (
    <footer className="border-t border-slate-800 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-400">

        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">
            DevInsight AI
          </span>
        </p>

        <p className="mt-2 md:mt-0 text-center">
          AI Powered GitHub Portfolio Analyzer • Built with React, Tailwind,
          Express, MongoDB & Gemini AI
        </p>

      </div>
    </footer>
  );
};

export default Footer;