import React from "react";
import { Link } from "react-router-dom";
import { Paths } from "../../routes/paths";

const Home: React.FC = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Welcome to UI Seed
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            A powerful microfrontend demonstration using single-spa architecture
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to={Paths.features.index}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Explore Features
            </Link>
            <Link
              to={Paths.about.index}
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <InfoCard
            title="Independent Routing"
            icon="🔀"
            description="Each microfrontend manages its own routes while maintaining seamless integration."
          />
          <InfoCard
            title="Modular Architecture"
            icon="🏗️"
            description="Clean and maintainable code structure following best practices."
          />
          <InfoCard
            title="Easy Integration"
            icon="🔌"
            description="Seamlessly works with existing applications and routing systems."
          />
        </div>

        <div className="mt-16 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            Quick Start Guide
          </h3>
          <ul className="space-y-3 text-blue-700">
            <li className="flex items-start">
              <span className="mr-2">1.</span>
              <span>
                Navigate through different routes using the top navigation
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">2.</span>
              <span>Observe how routes maintain their state independently</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">3.</span>
              <span>Check the Features page for detailed capabilities</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const InfoCard: React.FC<{
  title: string;
  icon: string;
  description: string;
}> = ({ title, icon, description }) => (
  <div className="relative p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-500">{description}</p>
  </div>
);

export default Home;
