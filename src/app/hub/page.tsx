'use client';

import React from 'react';
import TimeGrid from '@/components/hub/TimeGrid';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Filter } from 'lucide-react';

export default function HubPage() {
    return (
        <div className="hub-container">
            <header className="hub-header">
                <div className="date-nav">
                    <button className="icon-btn"><ChevronLeft size={20} /></button>
                    <div className="current-date">
                        <CalendarIcon size={18} />
                        <span>2026년 2월 20일</span>
                    </div>
                    <button className="icon-btn"><ChevronRight size={20} /></button>
                    <button className="today-btn">오늘</button>
                </div>

                <div className="view-actions">
                    <div className="view-toggle glass-card">
                        <button className="toggle-item">일간</button>
                        <button className="toggle-item active">주간</button>
                        <button className="toggle-item">월간</button>
                    </div>
                    <button className="filter-btn glass-card">
                        <Filter size={18} />
                        <span>필터</span>
                    </button>
                </div>
            </header>

            <div className="hub-content">
                <TimeGrid />
            </div>

            <style jsx>{`
        .hub-container {
          height: calc(100vh - 112px);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .hub-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .date-nav {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .current-date {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          font-family: var(--font-display);
        }

        .icon-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          border-radius: 50%;
          transition: background 0.2s;
        }

        .icon-btn:hover {
          background: var(--glass-bg);
          color: var(--text-main);
        }

        .today-btn {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          color: var(--text-main);
          padding: 6px 16px;
          border-radius: 8px;
          font-size: 0.9rem;
          cursor: pointer;
        }

        .view-actions {
          display: flex;
          gap: 16px;
        }

        .view-toggle {
          display: flex;
          padding: 4px;
          gap: 4px;
        }

        .toggle-item {
          background: none;
          border: none;
          color: var(--text-muted);
          padding: 6px 16px;
          border-radius: 6px;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s;
        }

        .toggle-item.active {
          background: var(--primary-work);
          color: white;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 16px;
          color: var(--text-muted);
          font-size: 0.9rem;
          border: none;
          cursor: pointer;
        }

        .hub-content {
          flex: 1;
          min-height: 0;
        }
      `}</style>
        </div>
    );
}
