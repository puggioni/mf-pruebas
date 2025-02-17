import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Paths } from "../../routes/paths";

const Navbar: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home", isExternal: true },
    { to: Paths.about.index, label: "About" },
    { to: Paths.features.index, label: "Features" },
    { to: "/seed-2", label: "Seed 2", isExternal: true },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const renderLink = ({
    to,
    label,
    isExternal,
  }: {
    to: string;
    label: string;
    isExternal?: boolean;
  }) => {
    const className = `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
      isActive(to)
        ? "border-blue-500 text-gray-900"
        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
    }`;

    if (isExternal) {
      return (
        <a key={to} href={to} className={className}>
          {label}
        </a>
      );
    }

    return (
      <Link key={to} to={to} className={className}>
        {label}
      </Link>
    );
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            {navLinks.map((link) => renderLink(link))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
