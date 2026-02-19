'use client';

import React from 'react';

const HOURS = Array.from({ length: 24 }, (_, i) => i);

export default function TimeGrid() {
    return (
        <div className="time-grid-container glass-card">
            <div className="time-grid-header">
                <div className="label-col"></div>
                <div className="day-columns">
                    <div className="day-col active">오늘 (2/20)</div>
                </div>
            </div>

            <div className="grid-scroll-area">
                <div className="time-labels">
                    {HOURS.map(hour => (
                        <div key={hour} className="time-label">
                            {hour.toString().padStart(2, '0')}:00
                        </div>
                    ))}
                </div>

                <div className="grid-content">
                    {HOURS.map(hour => (
                        <React.Fragment key={hour}>
                            <div className="grid-row hour-line"></div>
                            <div className="grid-row half-hour-line"></div>
                        </React.Fragment>
                    ))}

                    {/* Current Time Indicator */}
                    <div className="time-indicator" style={{ top: '45%' }}>
                        <div className="indicator-dot"></div>
                        <div className="indicator-line"></div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .time-grid-container {
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .time-grid-header {
          display: flex;
          padding: 16px 0;
          border-bottom: 1px solid var(--glass-border);
        }

        .label-col {
          width: 80px;
        }

        .day-columns {
          flex: 1;
          display: flex;
        }

        .day-col {
          flex: 1;
          text-align: center;
          font-weight: 600;
          color: var(--text-muted);
        }

        .day-col.active {
          color: var(--primary-work);
        }

        .grid-scroll-area {
          flex: 1;
          overflow-y: auto;
          display: flex;
          position: relative;
          padding-top: 10px;
        }

        .time-labels {
          width: 80px;
          display: flex;
          flex-direction: column;
        }

        .time-label {
          height: 80px; /* 1 hour = 80px */
          font-size: 0.75rem;
          color: var(--text-dim);
          text-align: right;
          padding-right: 12px;
          font-family: var(--font-header);
        }

        .grid-content {
          flex: 1;
          position: relative;
          border-left: 1px solid var(--glass-border);
        }

        .grid-row {
          height: 40px; /* 30 min = 40px */
          border-bottom: 1px solid var(--glass-border);
        }

        .hour-line {
          border-bottom-color: rgba(255, 255, 255, 0.1);
        }

        .half-hour-line {
          border-bottom-style: dashed;
          border-bottom-color: rgba(255, 255, 255, 0.05);
        }

        .time-indicator {
          position: absolute;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          z-index: 10;
          pointer-events: none;
        }

        .indicator-dot {
          width: 8px;
          height: 8px;
          background: var(--accent-alert);
          border-radius: 50%;
          margin-left: -4.5px;
          box-shadow: 0 0 8px var(--accent-alert);
        }

        .indicator-line {
          flex: 1;
          height: 1px;
          background: var(--accent-alert);
          opacity: 0.5;
        }
      `}</style>
        </div>
    );
}
