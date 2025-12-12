import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function StatsCards({ statsData }) {
  if (!Array.isArray(statsData)) return null;

  return (
    <div
      className="d-grid gap-3"
      style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gridAutoRows: '1fr',
      }}
    >
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="card shadow-sm border-0 position-relative"
          style={{
            gridRow: stat.breakdown ? 'span 2' : 'span 1',
          }}
        >
          {/* Icon: top-right */}
          <div
            className="position-absolute d-flex justify-content-center align-items-center"
            style={{
              top: '12px',
              right: '12px',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: stat.bgColor || '#6c757d',
            }}
          >
            <i className={`bi ${stat.icon} text-white fs-5`} />
          </div>

          <div className="card-body pe-4">
            <h4 className="fw-bold mb-1">{stat.value}</h4>
            <div className="text-muted small mb-2">{stat.label}</div>

            {stat.breakdown && (
              <div className="pt-3 border-top small text-muted">
                {stat?.breakdown.map((i) => (
                  <div className="d-flex justify-content-between">
                    <span>{i.title}</span>
                    <strong className="text-dark">{i.value}</strong>
                  </div>
                ))}
              </div>
            )}

            {stat.subText && (
              <div className="mt-2 small text-muted">{stat.subText}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
