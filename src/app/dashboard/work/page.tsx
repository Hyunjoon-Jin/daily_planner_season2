'use client';

import React from 'react';
import FocusTimer from '@/components/work/FocusTimer';
import {
    Briefcase,
    BarChart3,
    Clock,
    Users,
    ChevronRight,
    TrendingUp
} from 'lucide-react';
import Link from 'next/link';

export default function WorkMainPage() {
    return (
        <div className="work-container">
            <header className="page-header">
                <div className="header-text">
                    <h2>Professional Suite</h2>
                    <p>딥워크에 집중하고 프로젝트의 모든 진행 상황을 한눈에 파악하세요.</p>
                </div>
            </header>

            <div className="work-grid">
                {/* Main Focus Area */}
                <section className="focus-section">
                    <FocusTimer />
                </section>

                {/* Stats & Projects Overview */}
                <div className="side-content">
                    <section className="stats-card glass-card">
                        <div className="card-header">
                            <BarChart3 size={18} />
                            <h4>금주 생산성 분석</h4>
                        </div>
                        <div className="productivity-stat">
                            <div className="main-stat">
                                <span className="value">32.5</span>
                                <span className="unit">hours</span>
                            </div>
                            <div className="change positive">
                                <TrendingUp size={14} /> +15% vs last week
                            </div>
                        </div>
                        <div className="mini-chart">
                            {/* Simple CSS Chart Placeholder */}
                            <div className="bar" style={{ height: '40%' }}></div>
                            <div className="bar" style={{ height: '60%' }}></div>
                            <div className="bar" style={{ height: '80%' }}></div>
                            <div className="bar active" style={{ height: '95%' }}></div>
                            <div className="bar" style={{ height: '70%' }}></div>
                        </div>
                    </section>

                    <section className="projects-preview glass-card">
                        <div className="card-header">
                            <Briefcase size={18} />
                            <h4>활성 프로젝트</h4>
                            <Link href="/dashboard/work/projects" className="view-more">
                                모두 보기 <ChevronRight size={14} />
                            </Link>
                        </div>
                        <div className="project-list">
                            {[
                                { name: 'LP Season 2 Launch', progress: 75, color: 'var(--primary-work)' },
                                { name: 'Architecture Refactor', progress: 30, color: 'var(--accent-alert)' },
                            ].map((p, i) => (
                                <div key={i} className="project-item">
                                    <div className="p-header">
                                        <span className="p-name">{p.name}</span>
                                        <span className="p-val">{p.progress}%</span>
                                    </div>
                                    <div className="p-bar-bg">
                                        <div className="p-bar-fill" style={{ width: `${p.progress}%`, background: p.color }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="team-workload glass-card">
                        <div className="card-header">
                            <Users size={18} />
                            <h4>팀 워크로드 (AI 분석)</h4>
                        </div>
                        <div className="team-alert">
                            <div className="alert-dot"></div>
                            <span>현재 디자인 팀원들의 업무 부하가 높음 (수요일 병목 예상)</span>
                        </div>
                    </section>
                </div>
            </div>

            <style jsx>{`
        .work-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .header-text h2 { font-size: 1.5rem; margin-bottom: 4px; }
        .header-text p { color: var(--text-muted); font-size: 0.9rem; }

        .work-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 24px;
          align-items: start;
        }

        .side-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          position: relative;
        }

        .card-header h4 { font-size: 0.95rem; font-weight: 700; flex: 1; }

        .view-more {
          font-size: 0.75rem;
          color: var(--primary-work);
          display: flex;
          align-items: center;
          gap: 2px;
        }

        /* Stats Card */
        .stats-card { padding: 24px; }
        .productivity-stat { display: flex; align-items: baseline; gap: 12px; margin-bottom: 20px; }
        .main-stat .value { font-size: 2rem; font-weight: 700; font-family: var(--font-display); }
        .main-stat .unit { font-size: 0.9rem; color: var(--text-dim); margin-left: 4px; }
        .change { font-size: 0.8rem; display: flex; align-items: center; gap: 4px; }
        .change.positive { color: var(--secondary-life); }

        .mini-chart {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          height: 60px;
          padding-top: 10px;
        }

        .mini-chart .bar {
          flex: 1;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px 4px 0 0;
        }

        .mini-chart .bar.active { background: var(--primary-work); }

        /* Projects Preview */
        .projects-preview { padding: 24px; }
        .project-list { display: flex; flex-direction: column; gap: 16px; }
        .p-header { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.85rem; }
        .p-name { font-weight: 600; }
        .p-val { font-weight: 700; color: var(--text-dim); }
        .p-bar-bg { height: 6px; background: rgba(255, 255, 255, 0.05); border-radius: 3px; overflow: hidden; }
        .p-bar-fill { height: 100%; transition: width 0.3s; }

        /* Team Workload */
        .team-workload { padding: 24px; }
        .team-alert {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px;
          background: rgba(245, 158, 11, 0.05);
          border: 1px solid rgba(245, 158, 11, 0.1);
          border-radius: 10px;
          color: #F59E0B;
          font-size: 0.8rem;
          line-height: 1.5;
        }

        .alert-dot { width: 8px; height: 8px; background: #F59E0B; border-radius: 50%; margin-top: 4px; flex-shrink: 0; animation: blink 2s infinite; }

        @keyframes blink { 0% { opacity: 0.3; } 50% { opacity: 1; } 100% { opacity: 0.3; } }

        @media (max-width: 1200px) {
          .work-grid { grid-template-columns: 1fr; }
          .side-content { display: grid; grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 768px) {
          .side-content { grid-template-columns: 1fr; }
        }
      `}</style>
        </div>
    );
}
