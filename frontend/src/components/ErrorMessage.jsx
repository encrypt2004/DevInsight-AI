const ErrorMessage = ({ message }) => {
  return (
    <div className="mt-6 rounded-xl border border-red-500 bg-red-500/10 p-4 text-center">
      <h3 className="text-lg font-semibold text-red-400">
        Something went wrong
      </h3>

      <p className="mt-2 text-red-300">
        {message}
      </p>
    </div>
  );
};

export default ErrorMessage;