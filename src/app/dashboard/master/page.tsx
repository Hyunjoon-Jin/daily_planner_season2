'use client';

import React from 'react';
import {
    Zap,
    TrendingUp,
    Target,
    Heart,
    Briefcase,
    Wallet,
    Calendar,
    ChevronRight,
    ShieldCheck,
    BrainCircuit
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function MasterDashboard() {
    return (
        <div className="master-container">
            <header className="page-header">
                <div className="header-text">
                    <div className="ai-status">
                        <BrainCircuit size={16} /> <span>AI Life Consciousness Active</span>
                    </div>
                    <h2>통합 대시보드 (Command Center)</h2>
                    <p>모든 삶의 지각 데이터를 통합하여 지능적인 통찰을 제공합니다.</p>
                </div>
                <div className="performance-score glass-card">
                    <div className="score-label">성취 지수 (Overall Score)</div>
                    <div className="score-value">84 <small>/ 100</small></div>
                </div>
            </header>

            <div className="master-grid">
                {/* Module Synergy Matrix */}
                <section className="synergy-area">
                    <div className="grid-3">
                        <div className="synergy-card glass-card work">
                            <div className="s-icon"><Briefcase size={20} /></div>
                            <div className="s-info">
                                <span className="s-label">Professional</span>
                                <span className="s-val">8.4h <small>Focused</small></span>
                            </div>
                            <div className="s-progress"><div className="fill" style={{ width: '85%' }}></div></div>
                        </div>
                        <div className="synergy-card glass-card life">
                            <div className="s-icon"><Heart size={20} /></div>
                            <div className="s-info">
                                <span className="s-label">Life Care</span>
                                <span className="s-val">92% <small>Healthy</small></span>
                            </div>
                            <div className="s-progress"><div className="fill" style={{ width: '92%' }}></div></div>
                        </div>
                        <div className="synergy-card glass-card assets">
                            <div className="s-icon"><Wallet size={20} /></div>
                            <div className="s-info">
                                <span className="s-label">Assets</span>
                                <span className="s-val">+₩ 4.2M <small>Equity</small></span>
                            </div>
                            <div className="s-progress"><div className="fill" style={{ width: '60%' }}></div></div>
                        </div>
                    </div>

                    <div className="main-ais-section glass-card">
                        <div className="section-header">
                            <Zap size={20} className="flash-icon" />
                            <h3>AI 통합 인사이트 리포트</h3>
                        </div>
                        <div className="insight-list">
                            <div className="insight-item">
                                <div className="i-dot blue"></div>
                                <p><strong>생산성-건강 상관관계:</strong> 최근 3일간 수면 시간이 6시간 미만으로 기록되면서 업무 집중 시간이 평균 24% 감소했습니다. 오늘 밤은 11시 이전에 타임블록을 종료할 것을 권장합니다.</p>
                            </div>
                            <div className="insight-item">
                                <div className="i-dot green"></div>
                                <p><strong>자산-목표 브릿지:</strong> 현재의 소비 패턴을 유지할 경우, OKR '개인 자산 1억 달성' 시점이 예정보다 2개월 앞당겨질 것으로 예측됩니다.</p>
                            </div>
                            <div className="insight-item">
                                <div className="i-dot orange"></div>
                                <p><strong>관계 관리 알림:</strong> 업무 강도가 높은 수요일에 지인들과의 약속이 집중되어 있습니다. 에너지 관리 차원에서 한 건의 일정을 목요일로 이동하는 것이 어떻습니까?</p>
                            </div>
                        </div>
                        <button className="btn-ai-full">전체 라이프 밸런스 분석서 보기 <ChevronRight size={16} /></button>
                    </div>
                </section>

                {/* Real-time Timeline Hub Preview */}
                <section className="timeline-preview glass-card">
                    <div className="section-header">
                        <Calendar size={18} />
                        <h4>실시간 라이프 타임라인</h4>
                    </div>
                    <div className="mini-timeline">
                        {[
                            { time: '10:00', label: '개발 업무 (Deep Work)', type: 'work', sub: 'Project LP Launch' },
                            { time: '12:00', label: '점심 식사 (AI 분석중)', type: 'life', sub: '샐러드 & 단백질' },
                            { time: '14:30', label: '인맥 미팅', type: 'network', sub: 'CEO Park Jun' },
                        ].map((t, i) => (
                            <div key={i} className={`time-item ${t.type}`}>
                                <div className="t-time">{t.time}</div>
                                <div className="t-line"></div>
                                <div className="t-content">
                                    <span className="t-label">{t.label}</span>
                                    <span className="t-sub">{t.sub}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="timeline-footer">
                        <div className="status"><ShieldCheck size={14} /> All data synced</div>
                        <button className="btn-link">Hub로 이동</button>
                    </div>
                </section>
            </div>

            <style jsx>{`
        .master-container { display: flex; flex-direction: column; gap: 32px; }
        .page-header { display: flex; justify-content: space-between; align-items: flex-end; }
        .ai-status { display: flex; align-items: center; gap: 8px; color: var(--primary-work); font-weight: 700; font-size: 0.8rem; margin-bottom: 8px; text-transform: uppercase; }
        .page-header h2 { font-size: 1.8rem; margin-bottom: 4px; }
        .page-header p { color: var(--text-muted); font-size: 0.95rem; }

        .performance-score { padding: 16px 24px; text-align: right; }
        .score-label { font-size: 0.8rem; color: var(--text-dim); margin-bottom: 4px; }
        .score-value { font-size: 2rem; font-weight: 700; font-family: var(--font-display); color: var(--secondary-life); }
        .score-value small { font-size: 1rem; color: var(--text-dim); font-weight: 400; }

        .master-grid { display: grid; grid-template-columns: 1fr 320px; gap: 24px; }

        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 24px; }
        .synergy-card { padding: 20px; display: flex; flex-direction: column; gap: 12px; }
        .s-info { display: flex; flex-direction: column; }
        .s-label { font-size: 0.8rem; color: var(--text-muted); }
        .s-val { font-size: 1.2rem; font-weight: 700; }
        .s-val small { font-size: 0.75rem; color: var(--text-dim); font-weight: 400; }
        .s-progress { height: 4px; background: rgba(255, 255, 255, 0.05); border-radius: 2px; overflow: hidden; }
        .s-progress .fill { height: 100%; border-radius: 2px; }
        
        .work .s-icon { color: var(--primary-work); } .work .fill { background: var(--primary-work); }
        .life .s-icon { color: var(--secondary-life); } .life .fill { background: var(--secondary-life); }
        .assets .s-icon { color: #facc15; } .assets .fill { background: #facc15; }

        .main-ais-section { padding: 32px; }
        .section-header { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
        .flash-icon { color: var(--accent-alert); }
        .insight-list { display: flex; flex-direction: column; gap: 20px; margin-bottom: 32px; }
        .insight-item { display: flex; gap: 16px; align-items: flex-start; }
        .i-dot { width: 8px; height: 8px; border-radius: 50%; margin-top: 6px; flex-shrink: 0; }
        .i-dot.blue { background: var(--primary-work); box-shadow: 0 0 8px var(--primary-work); }
        .i-dot.green { background: var(--secondary-life); box-shadow: 0 0 8px var(--secondary-life); }
        .i-dot.orange { background: var(--accent-alert); box-shadow: 0 0 8px var(--accent-alert); }
        .insight-item p { font-size: 0.9rem; line-height: 1.6; color: var(--text-muted); }

        .btn-ai-full { width: 100%; padding: 14px; background: rgba(255, 255, 255, 0.05); border: 1px solid var(--glass-border); border-radius: 12px; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; }

        .timeline-preview { padding: 24px; display: flex; flex-direction: column; gap: 24px; }
        .mini-timeline { display: flex; flex-direction: column; }
        .time-item { display: flex; gap: 16px; min-height: 80px; }
        .t-time { font-size: 0.75rem; color: var(--text-dim); width: 40px; text-align: right; }
        .t-line { position: relative; width: 2px; background: var(--glass-border); display: flex; justify-content: center; }
        .t-line::before { content: ''; position: absolute; top: 0; width: 10px; height: 10px; border-radius: 50%; border: 2px solid; background: var(--bg-dark); }
        .time-item.work .t-line::before { border-color: var(--primary-work); }
        .time-item.life .t-line::before { border-color: var(--secondary-life); }
        .time-item.network .t-line::before { border-color: #A855F7; }
        .t-content { flex: 1; padding-top: 0; display: flex; flex-direction: column; gap: 4px; }
        .t-label { font-size: 0.9rem; font-weight: 600; }
        .t-sub { font-size: 0.75rem; color: var(--text-dim); }

        .timeline-footer { display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 20px; border-top: 1px solid var(--glass-border); }
        .status { font-size: 0.7rem; color: var(--text-dim); display: flex; align-items: center; gap: 4px; }
        .btn-link { background: none; border: none; color: var(--primary-work); font-size: 0.8rem; font-weight: 700; cursor: pointer; }

        @media (max-width: 1024px) {
          .master-grid { grid-template-columns: 1fr; }
          .grid-3 { grid-template-columns: 1fr; }
        }
      `}</style>
        </div>
    );
}
