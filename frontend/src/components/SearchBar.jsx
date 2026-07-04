import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch, loading = false }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = username.trim();

    if (!trimmed) return;

    onSearch(trimmed);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto"
    >
      <div className="flex flex-col sm:flex-row gap-4">

        <div className="relative flex-1">

          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Enter GitHub Username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={loading}
            className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500 outline-none focus:border-blue-500 transition"
          />

        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 disabled:cursor-not-allowed transition font-semibold"
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>

      </div>
    </form>
  );
};

export default SearchBar;