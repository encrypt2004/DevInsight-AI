import {
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Briefcase,
  BadgeCheck,
} from "lucide-react";

const AIAnalysisCard = ({ analysis }) => {
  if (!analysis) return null;

  return (
    <div className="space-y-8">

      {/* Strengths & Weaknesses */}

      <div className="grid lg:grid-cols-2 gap-6">

        {/* Strengths */}

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

          <h2 className="flex items-center gap-2 text-2xl font-bold text-green-400 mb-5">
            <CheckCircle size={24} />
            Strengths
          </h2>

          <ul className="space-y-3">

            {analysis.strengths?.map((item, index) => (
              <li
                key={index}
                className="text-slate-300 leading-7"
              >
                • {item.replace(/\*\*/g, "")}
              </li>
            ))}

          </ul>

        </div>

        {/* Weaknesses */}

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

          <h2 className="flex items-center gap-2 text-2xl font-bold text-red-400 mb-5">
            <AlertTriangle size={24} />
            Weaknesses
          </h2>

          <ul className="space-y-3">

            {analysis.weaknesses?.map((item, index) => (
              <li
                key={index}
                className="text-slate-300 leading-7"
              >
                • {item.replace(/\*\*/g, "")}
              </li>
            ))}

          </ul>

        </div>

      </div>

      {/* Recommended Skills */}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

        <h2 className="flex items-center gap-2 text-2xl font-bold text-blue-400 mb-5">
          <Lightbulb size={24} />
          Recommended Skills
        </h2>

        <div className="flex flex-wrap gap-3">

          {analysis.recommendedSkills?.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500 text-blue-300"
            >
              {skill.replace(/\*\*/g, "")}
            </span>
          ))}

        </div>

      </div>

      {/* Career Fit */}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

        <h2 className="flex items-center gap-2 text-2xl font-bold text-purple-400 mb-6">
          <Briefcase size={24} />
          Career Fit
        </h2>

        <div className="grid md:grid-cols-3 gap-5">

          <div className="bg-slate-800 rounded-xl p-5">
            <h3 className="font-semibold text-blue-400 mb-3">
              Frontend
            </h3>

            <p className="text-slate-300 leading-7">
              {analysis.careerFit?.frontend}
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-5">
            <h3 className="font-semibold text-green-400 mb-3">
              Backend
            </h3>

            <p className="text-slate-300 leading-7">
              {analysis.careerFit?.backend}
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-5">
            <h3 className="font-semibold text-pink-400 mb-3">
              Full Stack
            </h3>

            <p className="text-slate-300 leading-7">
              {analysis.careerFit?.fullStack}
            </p>
          </div>

        </div>

      </div>

      {/* Hiring Recommendation */}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

        <h2 className="flex items-center gap-2 text-2xl font-bold text-emerald-400 mb-6">
          <BadgeCheck size={24} />
          Hiring Recommendation
        </h2>

        <div className="bg-slate-800 rounded-xl p-6">

          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-300 font-semibold mb-5">
            {analysis.hiringRecommendation?.status}
          </span>

          <p className="text-slate-300 leading-8">
            {analysis.hiringRecommendation?.reason}
          </p>

        </div>

      </div>

    </div>
  );
};

export default AIAnalysisCard;