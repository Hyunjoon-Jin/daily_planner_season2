'use client';

import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="main-wrapper">
                <Header />
                <main className="content-area">
                    {children}
                </main>
            </div>

            <style jsx>{`
        .dashboard-container {
          display: flex;
          min-height: 100vh;
        }

        .main-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .content-area {
          padding: 0 16px 16px 292px;
          flex: 1;
        }

        @media (max-width: 1024px) {
          .content-area {
            padding: 0 16px 16px 16px;
          }
        }
      `}</style>
        </div>
    );
}
