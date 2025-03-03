
import React from "react";
import { useNavigate } from "react-router-dom";
import ParticleBackground from "@/components/layout/ParticleBackground";

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-deep-bg">
      <ParticleBackground />
      
      <div className="relative z-10 text-center neuro-panel p-12 max-w-md mx-4">
        <h1 className="text-6xl font-display font-bold mb-4 gradient-text">404</h1>
        <div className="w-16 h-1 bg-accent-gradient mx-auto my-6 rounded-full"></div>
        <p className="text-xl text-text-secondary mb-8">
          Sorry, the page you are looking for doesn't exist.
        </p>
        <button
          onClick={goHome}
          className="neuro-button px-8 py-3 text-white hover:text-accent-purple transition-colors"
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
