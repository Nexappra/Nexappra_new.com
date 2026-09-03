import React, { useState } from 'react';
import './CertificateVerify.css'; // Alag CSS file import ki hai

export default function CertificateVerify() {
  const [certId, setCertId] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = (e) => {
    e.preventDefault();
    if (!certId.trim()) return;

    setLoading(true);
    setResult(null);

    // Mock UI check (Frontend testing)
    setTimeout(() => {
      setLoading(false);
      if (certId.toUpperCase() === 'NEX-2026-101') {
        setResult({
          status: 'success',
          name: 'Saniah Malik',
          course: 'Frontend Developer Intern',
          date: 'August 2026',
          id: certId.toUpperCase(),
        });
      } else {
        setResult({
          status: 'error',
          message: 'Invalid Certificate ID. Please check and try again.',
        });
      }
    }, 1000);
  };

  return (
    <div className="verify-container">
      <div className="verify-card">
        <h2>Certificate Verification</h2>
        <p className="verify-subtitle">
          Enter your unique Certificate ID provided by NexAppra to verify its authenticity.
        </p>

        <form onSubmit={handleVerify} className="verify-form">
          <input
            type="text"
            placeholder="e.g. NEX-2026-100"
            value={certId}
            onChange={(e) => setCertId(e.target.value)}
            className="verify-input"
          />
          <button type="submit" disabled={loading} className="verify-btn">
            {loading ? 'Verifying...' : 'Verify Certificate'}
          </button>
        </form>

        {result && (
          <div className={`result-box ${result.status}`}>
            {result.status === 'success' ? (
              <div>
                <h3>✔ Verified Certificate</h3>
                <p><strong>Name:</strong> {result.name}</p>
                <p><strong>Program:</strong> {result.course}</p>
                <p><strong>Issue Date:</strong> {result.date}</p>
                <span className="cert-id-tag">ID: {result.id}</span>
              </div>
            ) : (
              <p className="error-msg">{result.message}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}