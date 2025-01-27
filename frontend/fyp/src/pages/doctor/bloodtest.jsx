import React, { useState } from 'react';

function BloodTestForm() {
  const [patientId, setPatientId] = useState('');
  const [testValues, setTestValues] = useState({
    testosterone: '',
    fsh: '',
    lh: '',
    insulin: ''
  });
  const [riskScore, setRiskScore] = useState(null);

  const calculateRiskScore = () => {
    // Simplified risk calculation
    const score = Object.values(testValues).reduce((acc, val) => acc + Number(val), 0) / 4;
    setRiskScore(score.toFixed(2));
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'rgba(165, 215, 232, 0.1)', 
      padding: '24px' 
    }}>
      <div style={{ 
        maxWidth: '600px', 
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ 
          backgroundColor: '#0B2447', 
          padding: '20px',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          color: 'white'
        }}>
          <h1 style={{ margin: 0, fontSize: '24px' }}>Blood Test Evaluation Form</h1>
        </div>

        <div style={{ padding: '24px' }}>
          {/* Search Section */}
          <div style={{ marginBottom: '24px' }}>
            <label 
              htmlFor="patientId" 
              style={{ 
                display: 'block', 
                color: '#19376D',
                fontWeight: '600',
                marginBottom: '8px'
              }}
            >
              Search by Patient ID
            </label>
            <input
              id="patientId"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #576CBC',
                borderRadius: '4px',
                fontSize: '16px'
              }}
              placeholder="Enter Patient ID"
            />
          </div>

          {/* Test Values Section */}
          <div style={{ display: 'grid', gap: '24px' }}>
            {/* Testosterone */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'center' }}>
              <div>
                <label 
                  htmlFor="testosterone" 
                  style={{ 
                    display: 'block', 
                    color: '#19376D',
                    fontWeight: '600',
                    marginBottom: '8px'
                  }}
                >
                  Testosterone
                </label>
                <input
                  id="testosterone"
                  type="number"
                  value={testValues.testosterone}
                  onChange={(e) => setTestValues(prev => ({ ...prev, testosterone: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #576CBC',
                    borderRadius: '4px',
                    fontSize: '16px'
                  }}
                />
              </div>
              <span style={{ color: '#19376D', alignSelf: 'end', marginBottom: '8px' }}>mg/dL</span>
            </div>

            {/* FSH */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'center' }}>
              <div>
                <label 
                  htmlFor="fsh" 
                  style={{ 
                    display: 'block', 
                    color: '#19376D',
                    fontWeight: '600',
                    marginBottom: '8px'
                  }}
                >
                  FSH
                </label>
                <input
                  id="fsh"
                  type="number"
                  value={testValues.fsh}
                  onChange={(e) => setTestValues(prev => ({ ...prev, fsh: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #576CBC',
                    borderRadius: '4px',
                    fontSize: '16px'
                  }}
                />
              </div>
              <span style={{ color: '#19376D', alignSelf: 'end', marginBottom: '8px' }}>mg/dL</span>
            </div>

            {/* LH */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'center' }}>
              <div>
                <label 
                  htmlFor="lh" 
                  style={{ 
                    display: 'block', 
                    color: '#19376D',
                    fontWeight: '600',
                    marginBottom: '8px'
                  }}
                >
                  LH
                </label>
                <input
                  id="lh"
                  type="number"
                  value={testValues.lh}
                  onChange={(e) => setTestValues(prev => ({ ...prev, lh: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #576CBC',
                    borderRadius: '4px',
                    fontSize: '16px'
                  }}
                />
              </div>
              <span style={{ color: '#19376D', alignSelf: 'end', marginBottom: '8px' }}>mg/dL</span>
            </div>

            {/* FSH/LH Ratio */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'center' }}>
              <div>
                <label style={{ 
                  display: 'block', 
                  color: '#19376D',
                  fontWeight: '600',
                  marginBottom: '8px'
                }}>
                  FSH/LH Ratio
                </label>
                <div style={{
                  padding: '8px 12px',
                  border: '1px solid #576CBC',
                  borderRadius: '4px',
                  backgroundColor: '#f3f4f6',
                  fontSize: '16px'
                }}>
                  {testValues.fsh && testValues.lh 
                    ? (Number(testValues.fsh) / Number(testValues.lh)).toFixed(2) 
                    : '-'}
                </div>
              </div>
              <span style={{ color: '#19376D', alignSelf: 'end', marginBottom: '8px' }}>ratio</span>
            </div>

            {/* Insulin */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'center' }}>
              <div>
                <label 
                  htmlFor="insulin" 
                  style={{ 
                    display: 'block', 
                    color: '#19376D',
                    fontWeight: '600',
                    marginBottom: '8px'
                  }}
                >
                  Insulin
                </label>
                <input
                  id="insulin"
                  type="number"
                  value={testValues.insulin}
                  onChange={(e) => setTestValues(prev => ({ ...prev, insulin: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #576CBC',
                    borderRadius: '4px',
                    fontSize: '16px'
                  }}
                />
              </div>
              <span style={{ color: '#19376D', alignSelf: 'end', marginBottom: '8px' }}>mg/dL</span>
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={calculateRiskScore}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#19376D',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: '600',
              marginTop: '24px',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#0B2447'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#19376D'}
          >
            Calculate Risk Score
          </button>

          {/* Risk Score Display */}
          {riskScore !== null && (
            <div style={{
              marginTop: '24px',
              padding: '16px',
              backgroundColor: 'rgba(87, 108, 188, 0.1)',
              borderRadius: '8px'
            }}>
              <h3 style={{ 
                margin: 0,
                color: '#0B2447',
                fontSize: '18px',
                fontWeight: '600'
              }}>
                Evaluation Results
              </h3>
              <p style={{ 
                marginTop: '8px',
                color: '#19376D'
              }}>
                Risk Score: {riskScore}
              </p>
              <p style={{ 
                marginTop: '4px',
                fontSize: '14px',
                color: '#576CBC'
              }}>
                {Number(riskScore) > 50 ? 'High Risk - Consultation Recommended' : 'Normal Range'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BloodTestForm;