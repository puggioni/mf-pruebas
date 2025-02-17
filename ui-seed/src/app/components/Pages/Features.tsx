import React, { useState } from "react";

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState("architecture");

  const tabs = [
    { id: "architecture", label: "Architecture" },
    { id: "integration", label: "Integration" },
    { id: "development", label: "Development" },
  ];

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Key Features
          </h2>
          <p className="text-xl text-gray-600">
            Explore the capabilities of our microfrontend architecture
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <FeatureCard
            title="Independent Routing"
            icon="🔀"
            description="Each microfrontend maintains its own routing system while integrating with the main application."
            benefits={[
              "Route-based code splitting",
              "Independent navigation state",
              "Flexible routing strategies",
            ]}
          />
          <FeatureCard
            title="Seamless Integration"
            icon="🔌"
            description="Works perfectly with both single-spa and manual microfrontend architectures."
            benefits={[
              "Compatible with existing systems",
              "Easy to integrate",
              "Minimal configuration",
            ]}
          />
        </div>

        {/* Detailed Features Tabs */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === "architecture" && (
              <FeatureSection
                title="Microfrontend Architecture"
                description="Our architecture is designed for scalability and maintainability"
                items={[
                  {
                    title: "Independent Deployments",
                    description:
                      "Each microfrontend can be deployed independently, reducing deployment risks and enabling faster releases.",
                  },
                  {
                    title: "Isolated Development",
                    description:
                      "Teams can work on different parts of the application without interfering with each other.",
                  },
                  {
                    title: "Shared Resources",
                    description:
                      "Common resources and utilities can be shared efficiently between microfrontends.",
                  },
                ]}
              />
            )}

            {activeTab === "integration" && (
              <FeatureSection
                title="Integration Capabilities"
                description="Seamless integration with existing systems and frameworks"
                items={[
                  {
                    title: "Framework Agnostic",
                    description:
                      "Support for multiple frameworks including React, Angular, and Vue.",
                  },
                  {
                    title: "Event Communication",
                    description:
                      "Built-in event system for communication between microfrontends.",
                  },
                  {
                    title: "Shared State",
                    description:
                      "Optional state sharing mechanisms while maintaining isolation.",
                  },
                ]}
              />
            )}

            {activeTab === "development" && (
              <FeatureSection
                title="Development Experience"
                description="Tools and practices for efficient development"
                items={[
                  {
                    title: "Developer Tools",
                    description:
                      "Comprehensive development tools for debugging and testing.",
                  },
                  {
                    title: "Hot Reloading",
                    description:
                      "Fast development cycle with hot reloading support.",
                  },
                  {
                    title: "Testing Utilities",
                    description:
                      "Built-in testing utilities for unit and integration tests.",
                  },
                ]}
              />
            )}
          </div>
        </div>

        {/* Documentation Link */}
        <div className="mt-12 text-center">
          <a
            href="https://single-spa.js.org/docs/getting-started-overview"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            View Documentation
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{
  title: string;
  icon: string;
  description: string;
  benefits: string[];
}> = ({ title, icon, description, benefits }) => (
  <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2">
      {benefits.map((benefit) => (
        <li key={benefit} className="flex items-center text-gray-600">
          <svg
            className="h-4 w-4 text-green-500 mr-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 13l4 4L19 7"></path>
          </svg>
          {benefit}
        </li>
      ))}
    </ul>
  </div>
);

const FeatureSection: React.FC<{
  title: string;
  description: string;
  items: { title: string; description: string }[];
}> = ({ title, description, items }) => (
  <div>
    <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <div className="space-y-6">
      {items.map((item, index) => (
        <div key={index} className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600">
              {index + 1}
            </div>
          </div>
          <div className="ml-4">
            <h4 className="text-base font-medium text-gray-900">
              {item.title}
            </h4>
            <p className="mt-1 text-sm text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Features;
