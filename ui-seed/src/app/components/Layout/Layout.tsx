import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "../../routes/routes";
import Navbar from "../Navigation/Navbar";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <BrowserRouter basename="/seed">
        <Navbar />
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
