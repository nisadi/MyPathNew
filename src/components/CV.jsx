import React from 'react';
import './App.css';

function App() {
  return (
    <div className="cv-builder">
      <header>
        <h1>CV Builder</h1>
        <p>Create a professional CV tailored for the Sri Lankan job market.</p>
      </header>

      <main>
        <section className="template-section">
          <h2>Choose a Template</h2>
          <div className="template-options">
            <div className="template-option selected">
              <div className="template-preview modern"></div>
              <span>Modern</span>
            </div>
            <div className="template-option">
              <div className="template-preview classic"></div>
              <span>Classic</span>
            </div>
            <div className="template-option">
              <div className="template-preview creative"></div>
              <span>Creative</span>
            </div>
          </div>
        </section>

        <section className="examples-section">
          <h2>CV Examples</h2>
          <div className="example-options">
            <div className="example-option selected">
              <span>Software Engineer</span>
            </div>
            <div className="example-option">
              <span>Marketing Specialist</span>
            </div>
            <div className="example-option">
              <span>Teacher</span>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <button className="start-button">Start Building Your CV</button>
      </main>
    </div>
  );
}

export default App;