import React from "react";
import LegalPage from "../../components/LegalPage";

const CookiePolicy = () => {
  return (
    <LegalPage title="Cookie Policy">
      <div className="legal-section">
        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you
          visit a website. They help websites remember information about
          your visit and improve functionality and user experience.
        </p>
      </div>

      <div className="legal-section">
        <h2>2. How We Use Cookies</h2>
        <p>
          We may use cookies and similar technologies to remember
          preferences, understand how visitors use our website, maintain
          security, and improve website performance.
        </p>
      </div>

      <div className="legal-section">
        <h2>3. Types of Cookies</h2>

        <h3>Essential Cookies</h3>
        <p>
          These cookies may be necessary for basic website functionality
          and security. They generally cannot be disabled through the
          website.
        </p>

        <h3>Preference Cookies</h3>
        <p>
          These cookies help remember choices and preferences so that
          your experience can be more convenient.
        </p>

        <h3>Analytics Cookies</h3>
        <p>
          These cookies may help us understand website traffic and usage
          patterns so that we can improve our website and services.
        </p>
      </div>

      <div className="legal-section">
        <h2>4. Third-Party Cookies</h2>
        <p>
          Some third-party services integrated into our website may place
          their own cookies. These services may include analytics,
          embedded content, communication tools, or other technologies.
        </p>
      </div>

      <div className="legal-section">
        <h2>5. Managing Cookies</h2>
        <p>
          Most modern browsers allow you to view, block, delete, or
          manage cookies through their settings. Disabling certain
          cookies may affect the functionality of some parts of the
          website.
        </p>
      </div>

      <div className="legal-section">
        <h2>6. Changes to This Cookie Policy</h2>
        <p>
          We may update this Cookie Policy from time to time to reflect
          changes in our website, technologies, or legal requirements.
        </p>
      </div>

      <div className="legal-section">
        <h2>7. Contact</h2>
        <p>
          If you have questions about our use of cookies, please contact
          us through the contact information provided on our website.
        </p>
      </div>
    </LegalPage>
  );
};

export default CookiePolicy;