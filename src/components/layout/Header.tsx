'use client';

import React from 'react';
import { Search, Bell, User } from 'lucide-react';

export default function Header() {
    return (
        <header className="header glass-card">
            <div className="search-bar">
                <Search size={18} className="search-icon" />
                <input type="text" placeholder="검색어를 입력하세요 (Cmd+K)" />
            </div>

            <div className="header-actions">
                <button className="icon-btn">
                    <Bell size={20} />
                    <span className="notification-dot"></span>
                </button>
                <div className="user-profile">
                    <div className="user-info">
                        <span className="user-name">John Doe</span>
                        <span className="user-status">온라인</span>
                    </div>
                    <div className="avatar">
                        <User size={20} />
                    </div>
                </div>
            </div>

            <style jsx>{`
        .header {
          height: 64px;
          margin: 16px 16px 16px 292px;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 16px;
          z-index: 90;
        }

        .search-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.03);
          padding: 8px 16px;
          border-radius: 10px;
          width: 400px;
          border: 1px solid var(--glass-border);
        }

        .search-bar input {
          background: none;
          border: none;
          color: var(--text-main);
          width: 100%;
          font-size: 0.9rem;
          outline: none;
        }

        .search-icon {
          color: var(--text-dim);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .icon-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .notification-dot {
          position: absolute;
          top: 0;
          right: 0;
          width: 8px;
          height: 8px;
          background: var(--accent-alert);
          border-radius: 50%;
          border: 2px solid var(--bg-dark);
        }

        .user-profile {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-left: 20px;
          border-left: 1px solid var(--glass-border);
        }

        .user-info {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .user-name {
          font-size: 0.9rem;
          font-weight: 600;
        }

        .user-status {
          font-size: 0.75rem;
          color: var(--secondary-life);
        }

        .avatar {
          width: 36px;
          height: 36px;
          background: var(--glass-bg);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--glass-border);
        }

        @media (max-width: 1024px) {
          .header {
            margin: 16px;
            width: calc(100% - 32px);
          }
          
          .search-bar {
            width: 200px;
          }
        }
      `}</style>
        </header>
    );
}
