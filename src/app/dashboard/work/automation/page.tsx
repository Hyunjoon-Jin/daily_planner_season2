'use client';

import React from 'react';
import {
    Users,
    Cpu,
    RotateCw,
    AlertCircle,
    User,
    Zap,
    ArrowRight,
    Settings
} from 'lucide-react';

export default function TeamAutomationPage() {
    const teamMembers = [
        { name: '김철수', role: 'FE Developer', load: 85, status: 'Overloaded' },
        { name: '이영희', role: 'UI Designer', load: 60, status: 'Stable' },
        { name: '박지성', role: 'BE Developer', load: 40, status: 'Available' },
        { name: '최나래', role: 'Product Manager', load: 95, status: 'Critical' },
    ];

    const recurringTasks = [
        { title: '매주 월요일 주간 회의 준비', frequency: '매주', next: '2/24 (월)' },
        { title: 'DB 인덱스 최적화 및 백업', frequency: '매달', next: '3/01 (일)' },
        { title: '디자인 시스템 라이브러리 업데이트', frequency: '격주', next: '2/28 (금)' },
    ];

    return (
        <div className="automation-container">
            <header className="page-header">
                <div className="header-text">
                    <h2>팀 워크로드 및 자동화</h2>
                    <p>AI가 분석한 팀원들의 업무 상태를 파악하고 반복 업무를 자동화하세요.</p>
                </div>
            </header>

            <div className="automation-grid">
                {/* Team Workload AI Analysis */}
                <section className="automation-section glass-card team-ai">
                    <div className="section-header">
                        <div className="title-group">
                            <Cpu size={20} />
                            <h3>AI 워크로드 분석</h3>
                        </div>
                        <div className="ai-status">
                            <Zap size={14} /> <span>Smart Analysis Active</span>
                        </div>
                    </div>

                    <div className="team-list">
                        {teamMembers.map((member, i) => (
                            <div key={i} className="member-card">
                                <div className="member-info">
                                    <div className="m-avatar">{member.name[0]}</div>
                                    <div className="m-text">
                                        <div className="m-name">{member.name}</div>
                                        <div className="m-role">{member.role}</div>
                                    </div>
                                </div>
                                <div className="m-status-area">
                                    <div className="m-load">
                                        <span className="load-val">{member.load}%</span>
                                        <div className="load-bar-bg">
                                            <div
                                                className={`load-bar-fill ${member.status.toLowerCase()}`}
                                                style={{ width: `${member.load}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                    <span className={`status-badge ${member.status.toLowerCase()}`}>
                                        {member.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="ai-insight glass-card">
                        <h4><AlertCircle size={16} /> AI 인사이트</h4>
                        <p><strong>최나래</strong>님과 <strong>김철수</strong>님의 업무 부하가 임계치에 도달했습니다. 금요일까지 예정된 'API 문서화' 작업을 <strong>박지성</strong>님에게 재배정할 것을 권장합니다.</p>
                        <button className="btn-ai-action">자동 재배정 제안 실행 <ArrowRight size={14} /></button>
                    </div>
                </section>

                {/* Recurring Tasks & Templates */}
                <section className="automation-section glass-card recurring">
                    <div className="section-header">
                        <div className="title-group">
                            <RotateCw size={20} />
                            <h3>반복 업무 및 템플릿</h3>
                        </div>
                        <button className="icon-btn-ghost"><Settings size={18} /></button>
                    </div>

                    <div className="recurring-list">
                        {recurringTasks.map((task, i) => (
                            <div key={i} className="recurring-item">
                                <div className="r-icon"><RotateCw size={18} /></div>
                                <div className="r-info">
                                    <div className="r-title">{task.title}</div>
                                    <div className="r-meta">주기: {task.frequency} • 다음 실행: {task.next}</div>
                                </div>
                                <button className="btn-ghost-small">수정</button>
                            </div>
                        ))}
                    </div>

                    <div className="template-area">
                        <h4>프로젝트 템플릿</h4>
                        <div className="template-grid">
                            <div className="tpl-card glass-card">
                                <h5>신규 앱 기획</h5>
                                <p>기획-개발-QA 20개 태스크 포함</p>
                            </div>
                            <div className="tpl-card glass-card">
                                <h5>마케팅 캠페인</h5>
                                <p>SNS-광고-리포팅 루틴 포함</p>
                            </div>
                        </div>
                        <button className="btn-outline-full">새 템플릿 만들기</button>
                    </div>
                </section>
            </div>

            <style jsx>{`
        .automation-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .header-text h2 { font-size: 1.5rem; margin-bottom: 4px; }
        .header-text p { color: var(--text-muted); font-size: 0.9rem; }

        .automation-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .automation-section {
          padding: 32px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }

        .title-group {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 700;
        }

        .ai-status {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--accent-alert);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        /* Team AI list */
        .team-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 32px;
        }

        .member-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 12px;
          border: 1px solid var(--glass-border);
        }

        .member-info { display: flex; align-items: center; gap: 12px; }
        .m-avatar { 
          width: 36px; height: 36px; border-radius: 50%; background: var(--primary-work); 
          display: flex; align-items: center; justify-content: center; font-weight: 700;
        }
        .m-name { font-weight: 600; font-size: 0.9rem; }
        .m-role { font-size: 0.75rem; color: var(--text-dim); }

        .m-status-area { display: flex; align-items: center; gap: 20px; }
        .m-load { width: 100px; display: flex; flex-direction: column; gap: 4px; }
        .load-val { font-size: 0.75rem; font-weight: 700; color: var(--text-muted); }
        .load-bar-bg { height: 4px; background: rgba(255, 255, 255, 0.05); border-radius: 2px; }
        .load-bar-fill { height: 100%; border-radius: 2px; }
        .load-bar-fill.overloaded { background: #f87171; }
        .load-bar-fill.stable { background: var(--secondary-life); }
        .load-bar-fill.available { background: var(--primary-work); }
        .load-bar-fill.critical { background: #ef4444; }

        .status-badge {
          font-size: 0.7rem;
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 700;
        }
        .status-badge.overloaded { color: #f87171; background: rgba(248, 113, 113, 0.1); }
        .status-badge.stable { color: #34d399; background: rgba(52, 211, 153, 0.1); }
        .status-badge.available { color: #818cf8; background: rgba(129, 140, 248, 0.1); }
        .status-badge.critical { color: #ef4444; background: rgba(239, 68, 68, 0.1); }

        .ai-insight {
          padding: 20px;
          border: 1px solid rgba(129, 140, 248, 0.2);
          background: rgba(129, 140, 248, 0.02);
        }
        .ai-insight h4 { display: flex; align-items: center; gap: 8px; font-size: 0.9rem; color: var(--primary-work); margin-bottom: 12px; }
        .ai-insight p { font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 20px; }
        .btn-ai-action {
          width: 100%; padding: 10px; background: var(--primary-work); border: none; color: white; border-radius: 8px; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;
        }

        /* Recurring section */
        .recurring-list { display: flex; flex-direction: column; gap: 12px; margin-bottom: 32px; }
        .recurring-item {
          display: flex; align-items: center; gap: 16px; padding: 12px 16px; background: rgba(255, 255, 255, 0.02); border-radius: 12px; border: 1px solid var(--glass-border);
        }
        .r-icon { color: var(--primary-work); }
        .r-info { flex: 1; }
        .r-title { font-weight: 600; font-size: 0.9rem; margin-bottom: 4px; }
        .r-meta { font-size: 0.75rem; color: var(--text-dim); }

        .template-area h4 { font-size: 0.95rem; margin-bottom: 16px; font-weight: 700; }
        .template-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px; }
        .tpl-card { padding: 16px; border: 1px solid var(--glass-border); cursor: pointer; transition: background 0.2s; }
        .tpl-card:hover { background: rgba(255, 255, 255, 0.03); }
        .tpl-card h5 { font-size: 0.85rem; margin-bottom: 4px; }
        .tpl-card p { font-size: 0.7rem; color: var(--text-dim); }
        
        .btn-outline-full { width: 100%; padding: 12px; background: none; border: 1px solid var(--glass-border); color: var(--text-muted); border-radius: 8px; font-size: 0.9rem; cursor: pointer; }

        @media (max-width: 1024px) { .automation-grid { grid-template-columns: 1fr; } }
      `}</style>
        </div>
    );
}
