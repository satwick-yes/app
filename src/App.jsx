import React from 'react';
import { Download, Monitor, Smartphone, Zap, Shield, FileText, ChevronRight } from 'lucide-react';

function App() {
  return (
    <>
      {/* Background animated blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      {/* Hero Section */}
      <section className="hero container">
        <div className="hero-content animate-fade-in-up">
          <div className="hero-badge">
            <Zap size={16} />
            <span>AI-Powered Conversion</span>
          </div>
          <h1>Transform Images to Word with AI Precision</h1>
          <p>
            Experience flawless extraction of text and formatting from your images. 
            Now available natively on Windows, Android, and iOS for seamless productivity.
          </p>
          <div className="hero-actions">
            <a href="#download" className="btn-primary">
              Get the App <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features container" id="features">
        <h2 className="section-title">Why Choose Image to Word AI?</h2>
        <div className="features-grid">
          <div className="feature-card delay-100 animate-fade-in-up">
            <div className="feature-icon-wrapper">
              <Zap size={28} />
            </div>
            <h3>Lightning Fast</h3>
            <p>Powered by Google's advanced Gemini AI models, conversions happen in seconds without losing quality.</p>
          </div>
          <div className="feature-card delay-200 animate-fade-in-up">
            <div className="feature-icon-wrapper">
              <FileText size={28} />
            </div>
            <h3>Formatting Preserved</h3>
            <p>We don't just extract text. We understand tables, layouts, and typography to reconstruct perfect Word documents.</p>
          </div>
          <div className="feature-card delay-300 animate-fade-in-up">
            <div className="feature-icon-wrapper">
              <Shield size={28} />
            </div>
            <h3>Privacy First</h3>
            <p>Your documents are processed securely and deleted instantly. No data collection, zero compromises.</p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="download-section container" id="download">
        <h2 className="section-title">Download Now</h2>
        <div className="download-grid">
          {/* Desktop App */}
          <div className="download-card">
            <div className="platform-icon">
              <Monitor size={40} />
            </div>
            <h3>Desktop Edition</h3>
            <p>Full power, standalone native Windows application.</p>
            <a href="#" className="btn-primary" onClick={(e) => { e.preventDefault(); alert("Downloading Windows Installer..."); }}>
              <Download size={20} /> Download for Windows
            </a>
          </div>

          {/* Mobile App */}
          <div className="download-card">
            <div className="platform-icon">
              <Smartphone size={40} />
            </div>
            <h3>Mobile Edition</h3>
            <p>Take the AI anywhere. Available for Android and iOS.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="#" className="btn-secondary" onClick={(e) => { e.preventDefault(); alert("Downloading Android APK..."); }}>
                <Download size={20} /> Download APK (Android)
              </a>
              <a href="#" className="btn-secondary" onClick={(e) => { e.preventDefault(); alert("Opening App Store link..."); }}>
                <Download size={20} /> Get on App Store
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer container">
        <p>&copy; {new Date().getFullYear()} Image to Word AI. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
