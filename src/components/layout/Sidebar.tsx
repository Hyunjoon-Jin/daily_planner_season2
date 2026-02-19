'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Calendar,
    HeartPulse,
    Briefcase,
    Settings,
    LogOut,
    Dna,
    Wallet,
    BookOpen
} from 'lucide-react';

const menuItems = [
    { icon: LayoutDashboard, label: '통합 대시보드', href: '/' },
    { icon: Calendar, label: '타임블록 관리', href: '/hub' },
    { icon: Briefcase, label: '업무 스위트', href: '/work' },
    { icon: HeartPulse, label: '건강 관리', href: '/life/health' },
    { icon: Wallet, label: '자산 관리', href: '/life/asset' },
    { icon: BookOpen, label: '지식 아카이브', href: '/life/knowledge' },
    { icon: Dna, label: '목표 & 습관', href: '/life/goals' },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="sidebar glass-card">
            <div className="logo-section">
                <h1 className="logo-text">LP SEASON 2</h1>
            </div>

            <nav className="nav-menu">
                {menuItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`nav-item ${pathname === item.href ? 'active' : ''}`}
                    >
                        <item.icon size={20} />
                        <span>{item.label}</span>
                    </Link>
                ))}
            </nav>

            <div className="sidebar-footer">
                <Link href="/settings" className="nav-item">
                    <Settings size={20} />
                    <span>설정</span>
                </Link>
                <button className="nav-item logout-btn">
                    <LogOut size={20} />
                    <span>로그아웃</span>
                </button>
            </div>

            <style jsx>{`
        .sidebar {
          width: 260px;
          height: calc(100vh - 32px);
          margin: 16px;
          display: flex;
          flex-direction: column;
          padding: 24px 16px;
          position: fixed;
          left: 0;
          top: 0;
          z-index: 100;
        }

        .logo-section {
          padding: 0 12px 32px;
        }

        .logo-text {
          font-size: 1.5rem;
          background: linear-gradient(90deg, var(--primary-work), var(--secondary-life));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -1px;
        }

        .nav-menu {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 12px;
          color: var(--text-muted);
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .nav-item:hover {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-main);
        }

        .nav-item.active {
          background: var(--primary-work);
          color: white;
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
        }

        .sidebar-footer {
          border-top: 1px solid var(--glass-border);
          padding-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .logout-btn {
          border: none;
          background: none;
          width: 100%;
          text-align: left;
          font-family: inherit;
          font-size: inherit;
        }

        @media (max-width: 1024px) {
          .sidebar {
            display: none;
          }
        }
      `}</style>
        </aside>
    );
}
