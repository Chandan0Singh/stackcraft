import React from "react";

const LegalPage = ({ title, children }) => {
  return (
    <main className="legal-page">
      <div className="legal-background-gradient legal-gradient-one" />
      <div className="legal-background-gradient legal-gradient-two" />

      <div className="legal-container">
        <div className="legal-header">
          <p className="legal-eyebrow">LEGAL</p>
          <h1 className="legal-title">{title}</h1>
          <p className="legal-updated">Last updated: September 8, 2026</p>
        </div>

        <div className="legal-content">{children}</div>
      </div>
    </main>
  );
};

export default LegalPage;