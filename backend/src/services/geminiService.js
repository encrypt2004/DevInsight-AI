import axios from "axios";
import getPortfolioPrompt from "../prompts/portfolioPrompt.js";

const generatePortfolioAnalysis = async ({
  profile,
  statistics,
  languages,
  portfolioMetrics,
}) => {
  const prompt = getPortfolioPrompt({
    profile,
    statistics,
    languages,
    portfolioMetrics,
  });

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

  const { data } = await axios.post(url, {
    contents: [
      {
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ],
  });

  let text =
    data.candidates?.[0]?.content?.parts?.[0]?.text || "";

  text = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

   console.log(
  JSON.stringify(JSON.parse(text), null, 2)
);
  const analysis = JSON.parse(text);

// Force backend values
analysis.portfolioScore = portfolioMetrics.portfolioScore;
analysis.overallRating = portfolioMetrics.overallRating;

return analysis;
};

export default generatePortfolioAnalysis;





// import axios from "axios";
// import getPortfolioPrompt from "../prompts/portfolioPrompt.js";
// const generatePortfolioAnalysis = async ({
//   profile,
//   statistics,
//   languages,
//   portfolioMetrics,
// }) => {
//   const prompt = `
// You are an experienced Senior Software Engineering Hiring Manager.

// The candidate is applying for a Software Development Engineer (SDE) Internship or Entry-Level Software Engineer role.

// Evaluate this profile as if the candidate is a student or internship applicant.

// Focus on:
// - Learning progress
// - Project quality
// - Code diversity
// - Consistency
// - Growth potential
// - Problem-solving ability
// - GitHub activity
// - Technical skills demonstrated

// Do NOT heavily penalize the candidate for:
// - Lack of industry experience
// - Low followers
// - Missing company information
// - Missing professional network
// - Being a student
// - Recently created GitHub account
// Return ONLY a valid JSON object.

// Do not write any sentence before the JSON.
// Do not write any sentence after the JSON.
// The first character of your response must be {
// The last character of your response must be }

// Reward:
// - Well-built personal projects
// - Good README files
// - Clean code
// - Consistent commits
// - Variety of technologies
// - Strong problem-solving projects
// - Full-stack development
// - Deployment experience

// Return ONLY valid JSON.
// Do not include markdown.
// Do not include explanations.
// Do not wrap the JSON inside triple backticks.

// GitHub Profile:
// ${JSON.stringify(profile, null, 2)}

// Repository Statistics:
// ${JSON.stringify(statistics, null, 2)}

// Language Distribution:
// ${JSON.stringify(languages, null, 2)}

// Return this exact structure:
// ...
// `;

//   const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

//   const { data } = await axios.post(url, {
//     contents: [
//       {
//         parts: [
//           {
//             text: prompt,
//           },
//         ],
//       },
//     ],
//   });

//   let text =
//     data.candidates?.[0]?.content?.parts?.[0]?.text || "";

//   text = text
//     .replace(/```json/g, "")
//     .replace(/```/g, "")
//     .trim();

//   return JSON.parse(text);
// };

// export default generatePortfolioAnalysis;