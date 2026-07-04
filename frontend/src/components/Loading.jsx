const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">

      <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      <p className="mt-6 text-slate-400 text-lg">
        Analyzing GitHub Profile...
      </p>

      <p className="text-slate-500 text-sm mt-2">
        Fetching repositories, generating portfolio score and AI insights.
      </p>

    </div>
  );
};

export default Loading;