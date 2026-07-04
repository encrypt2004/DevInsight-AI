import { useState } from "react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import SearchBar from "../components/SearchBar";
import ProfileCard from "../components/ProfileCard";
import PortfolioScoreCard from "../components/dashboard/PortfolioScoreCard";
import LanguageChart from "../components/LanguageChart";
import AIAnalysisCard from "../components/AIAnalysisCard";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

import { analyzeGitHubProfile } from "../services/api";

const HomePage = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    try {
      setLoading(true);
      setError("");
      setDashboardData(null);

      const response = await analyzeGitHubProfile(username);

      // Backend response:
      // {
      //   success,
      //   source,
      //   data:{...}
      // }

      setDashboardData(response.data.data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to analyze GitHub profile."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Header />

      <main className="max-w-7xl mx-auto px-6 py-10">

        <SearchBar
          onSearch={handleSearch}
          loading={loading}
        />

        {loading && <Loading />}

        {error && <ErrorMessage message={error} />}

        {!loading && dashboardData && (

          <div className="space-y-8 mt-10">

            <ProfileCard
              profile={dashboardData.profile}
            />

            <PortfolioScoreCard
              analysis={dashboardData.aiAnalysis}
            />

            <LanguageChart
              languages={dashboardData.languageDistribution}
            />

            <AIAnalysisCard
              analysis={dashboardData.aiAnalysis}
            />

          </div>

        )}

      </main>

      <Footer />

    </div>
  );
};

export default HomePage;