import React from "react";

const CVBuilder = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">CV Builder</h1>
          <p className="text-lg text-gray-600">
            Create a professional CV tailored for the Sri Lankan job market.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-8 mb-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Choose a Template
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <TemplateCard name="Modern" selected />
            <TemplateCard name="Classic" />
            <TemplateCard name="Creative" />
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            CV Examples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ExampleCard name="Software Engineer" selected />
            <ExampleCard name="Marketing Specialist" />
            <ExampleCard name="Teacher" />
          </div>
        </div>

        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg text-lg transition duration-150 ease-in-out">
            Start Building Your CV
          </button>
        </div>
      </div>
    </div>
  );
};

const TemplateCard = ({ name, selected = false }) => {
  return (
    <div
      className={`border-2 rounded-lg p-6 cursor-pointer transition duration-150 ease-in-out ${
        selected
          ? "border-blue-500 bg-blue-50"
          : "border-gray-200 hover:border-gray-300"
      }`}
    >
      <div className="h-40 bg-gray-100 rounded mb-4 flex items-center justify-center">
        <span className="text-gray-400">Template Preview</span>
      </div>
      <h3
        className={`text-center font-medium ${
          selected ? "text-blue-600" : "text-gray-700"
        }`}
      >
        {name}
      </h3>
    </div>
  );
};

const ExampleCard = ({ name, selected = false }) => {
  return (
    <div
      className={`border-2 rounded-lg p-4 cursor-pointer transition duration-150 ease-in-out ${
        selected
          ? "border-blue-500 bg-blue-50"
          : "border-gray-200 hover:border-gray-300"
      }`}
    >
      <h3
        className={`text-center font-medium ${
          selected ? "text-blue-600" : "text-gray-700"
        }`}
      >
        {name}
      </h3>
    </div>
  );
};

export default CVBuilder;