const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse space-y-6">

      <div className="h-10 w-64 rounded bg-slate-800"></div>

      <div className="h-52 rounded-2xl bg-slate-800"></div>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="h-40 rounded-2xl bg-slate-800"></div>

        <div className="h-40 rounded-2xl bg-slate-800"></div>

      </div>

      <div className="h-72 rounded-2xl bg-slate-800"></div>

    </div>
  );
};

export default LoadingSkeleton;