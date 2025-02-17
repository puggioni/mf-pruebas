import React from "react";

const About: React.FC = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            About This POC
          </h2>
          <p className="text-xl text-gray-600">
            Understanding the power of microfrontend architecture
          </p>
        </div>

        <div className="prose prose-blue max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Project Overview
            </h3>
            <p className="text-gray-600 mb-6">
              This proof of concept demonstrates how modern web applications can
              be built using a microfrontend architecture while maintaining
              compatibility with existing systems. It showcases the flexibility
              and power of single-spa framework combined with React and
              TypeScript.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <TechStack
                title="Frontend Stack"
                items={[
                  "React 18+",
                  "TypeScript",
                  "TailwindCSS",
                  "React Router",
                  "Single-spa",
                ]}
              />
              <TechStack
                title="Development Tools"
                items={[
                  "Webpack",
                  "ESLint",
                  "Prettier",
                  "Jest",
                  "React Testing Library",
                ]}
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Key Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BenefitCard
                title="Independent Development"
                description="Teams can work independently on different parts of the application without interference."
              />
              <BenefitCard
                title="Scalable Architecture"
                description="Easy to scale and maintain as the application grows in size and complexity."
              />
              <BenefitCard
                title="Technology Flexibility"
                description="Freedom to use different frameworks and versions across microfrontends."
              />
              <BenefitCard
                title="Incremental Updates"
                description="Ability to update and deploy parts of the application independently."
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Implementation Details
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mr-3">
                  1
                </span>
                <span>
                  <strong className="text-gray-900">
                    Route-based Architecture:
                  </strong>{" "}
                  Each route is treated as an independent application, allowing
                  for better code splitting and lazy loading.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mr-3">
                  2
                </span>
                <span>
                  <strong className="text-gray-900">
                    Shared Dependencies:
                  </strong>{" "}
                  Common dependencies are managed efficiently to avoid
                  duplication and reduce bundle size.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mr-3">
                  3
                </span>
                <span>
                  <strong className="text-gray-900">State Management:</strong>{" "}
                  Each microfrontend maintains its own state while still being
                  able to communicate with others when needed.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const TechStack: React.FC<{ title: string; items: string[] }> = ({
  title,
  items,
}) => (
  <div className="bg-gray-50 rounded-lg p-6">
    <h4 className="text-lg font-semibold text-gray-900 mb-4">{title}</h4>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-center text-gray-600">
          <svg
            className="h-5 w-5 text-green-500 mr-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 13l4 4L19 7"></path>
          </svg>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const BenefitCard: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => (
  <div className="bg-white rounded-lg p-6 shadow-sm">
    <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default About;
