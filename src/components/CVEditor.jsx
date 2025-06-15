import React from "react";
import { useLocation } from "react-router-dom";

const CVEditor = () => {
  const location = useLocation();
  const { template, example } = location.state || {};

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow rounded-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Editing Your CV ({template} Template)
          </h1>
          <p className="text-gray-600 mb-6">
            Example: {example || "Not specified"}
          </p>
          
          <div className="border-2 border-gray-200 rounded-lg p-6 min-h-[70vh]">
            {/* This would be your actual CV editing interface */}
            <div className="text-center py-20 bg-gray-50 rounded">
              <p className="text-gray-500">CV Editor Content Goes Here</p>
              <p className="text-sm text-gray-400 mt-2">
                Using {template} template style
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-between">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-lg">
              Back to Templates
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVEditor;