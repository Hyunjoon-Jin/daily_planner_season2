'use client';

import React from 'react';
import {
    BarChart,
    PieChart,
    Activity,
    AlertTriangle,
    CheckCircle,
    Sparkles,
    ArrowRight,
    TrendingDown,
    TrendingUp,
    Brain
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function AIReportPage() {
    return (
        <div className="report-container">
            <header className="page-header">
                <div className="header-text">
                    <div className="report-badge">WEEKLY AI REPORT</div>
                    <h2>주간 라이프 밸런스 분석서</h2>
                    <p>전반적인 삶의 균형과 성취도를 다각도에서 분석한 지능형 리포트입니다.</p>
                </div>
                <button className="btn-outline">PDF 내보내기</button>
            </header>

            <div className="report-grid">
                {/* Core Multi-dimensional Analysis */}
                <section className="report-section glass-card dimension">
                    <div className="section-header">
                        <Brain size={20} />
                        <h3>5대 핵심 지표 분석</h3>
                    </div>
                    <div className="radar-placeholder">
                        {/* Visual representation of a radar chart using CSS/SVG */}
                        <svg viewBox="0 0 100 100" className="radar-svg">
                            <polygon points="50,10 90,40 75,90 25,90 10,40" className="radar-bg" />
                            <polygon points="50,25 70,45 65,80 35,70 20,40" className="radar-fill" />
                            <circle cx="50" cy="10" r="2" fill="var(--primary-work)" />
                            <circle cx="90" cy="40" r="2" fill="var(--secondary-life)" />
                            <circle cx="75" cy="90" r="2" fill="#facc15" />
                        </svg>
                        <div className="labels">
                            <span className="l-top">생산성</span>
                            <span className="l-right">건강</span>
                            <span className="l-bottom-r">자산</span>
                            <span className="l-bottom-l">지식</span>
                            <span className="l-left">인맥</span>
                        </div>
                    </div>
                </section>

                {/* AI Recommendations */}
                <section className="report-section glass-card recommendation">
                    <div className="section-header">
                        <Sparkles size={20} className="sparkle-icon" />
                        <h3>AI 맞춤 가이드라인</h3>
                    </div>
                    <div className="rec-list">
                        <div className="rec-item">
                            <div className="rec-box glass-card gold">
                                <div className="r-head">
                                    <TrendingDown size={18} />
                                    <span>소비 패턴 경고</span>
                                </div>
                                <p>배달 음식 지출이 지난주 대비 35% 증가했습니다. 식단 관리와 연동하여 '주 2회 집밥 직접 조리' 습관 추가를 권장합니다.</p>
                            </div>
                        </div>
                        <div className="rec-item">
                            <div className="rec-box glass-card blue">
                                <div className="r-head">
                                    <Activity size={18} />
                                    <span>수면 및 집중력</span>
                                </div>
                                <p>심야 시간대 업무가 늘면서 다음 날 오전 집중 시간이 짧아지고 있습니다. 취침 1시간 전 스마트 기기 사용 중단 자동 알림을 설정할까요?</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Detailed Stats Groups */}
                <section className="report-section glass-card full-width">
                    <div className="section-header">
                        <BarChart size={20} />
                        <h3>상세 성과 지표 (Module Sync)</h3>
                    </div>
                    <div className="stats-table">
                        <div className="t-header">
                            <span>항목</span>
                            <span>수치</span>
                            <span>상태</span>
                            <span>AI 평가</span>
                        </div>
                        {[
                            { label: '업무 집중 시간', val: '42.5h', status: 'optimal', comment: '주간 목표 초과 달성' },
                            { label: '평균 활동 칼로리', val: '450kcal', status: 'warning', comment: '목표 대비 15% 부족' },
                            { label: '지식 아카이브 기록', val: '12건', status: 'optimal', comment: '지능형 요약 100% 완료' },
                            { label: '고정 지출 비율', val: '42%', status: 'stable', comment: '예산 범위 내 유지 중' },
                        ].map((s, i) => (
                            <div key={i} className="t-row">
                                <span className="t-label">{s.label}</span>
                                <span className="t-val">{s.val}</span>
                                <span className={`t-status ${s.status}`}>
                                    {s.status === 'optimal' && <CheckCircle size={14} />}
                                    {s.status === 'warning' && <AlertTriangle size={14} />}
                                    {s.status === 'stable' && <Activity size={14} />}
                                </span>
                                <span className="t-comment">{s.comment}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <style jsx>{`
        .report-container { display: flex; flex-direction: column; gap: 32px; }
        .report-badge { display: inline-block; padding: 4px 10px; background: rgba(99, 102, 241, 0.1); color: var(--primary-work); border-radius: 4px; font-size: 0.75rem; font-weight: 700; margin-bottom: 12px; }
        .page-header h2 { font-size: 1.8rem; margin-bottom: 8px; }
        .page-header p { color: var(--text-muted); font-size: 1rem; }
        .btn-outline { background: none; border: 1px solid var(--glass-border); color: var(--text-muted); padding: 10px 20px; border-radius: 8px; cursor: pointer; }

        .report-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .report-section { padding: 32px; }
        .full-width { grid-column: span 2; }
        .section-header { display: flex; align-items: center; gap: 12px; margin-bottom: 32px; font-weight: 700; }
        .sparkle-icon { color: var(--accent-alert); }

        .radar-placeholder { position: relative; width: 200px; height: 200px; margin: 0 auto; }
        .radar-svg { width: 100%; height: 100%; }
        .radar-bg { fill: rgba(255, 255, 255, 0.03); stroke: var(--glass-border); stroke-width: 0.5; }
        .radar-fill { fill: rgba(99, 102, 241, 0.2); stroke: var(--primary-work); stroke-width: 1.5; }
        .labels { position: absolute; inset: -20px; font-size: 0.75rem; color: var(--text-dim); }
        .labels span { position: absolute; }
        .l-top { top: 0; left: 50%; transform: translateX(-50%); }
        .l-right { top: 40%; right: 0; }
        .l-bottom-r { bottom: 0; right: 10%; }
        .l-bottom-l { bottom: 0; left: 10%; }
        .l-left { top: 40%; left: 0; }

        .rec-list { display: flex; flex-direction: column; gap: 20px; }
        .rec-box { padding: 20px; position: relative; border-left: 4px solid; }
        .rec-box.gold { border-left-color: #facc15; }
        .rec-box.blue { border-left-color: var(--primary-work); }
        .r-head { display: flex; align-items: center; gap: 10px; font-weight: 700; margin-bottom: 12px; font-size: 0.95rem; }
        .rec-box p { font-size: 0.9rem; line-height: 1.6; color: var(--text-muted); }

        .stats-table { display: flex; flex-direction: column; }
        .t-header { display: grid; grid-template-columns: 2fr 1fr 1fr 3fr; padding: 12px 16px; background: rgba(255, 255, 255, 0.03); border-radius: 8px; font-size: 0.85rem; font-weight: 700; color: var(--text-dim); margin-bottom: 12px; }
        .t-row { display: grid; grid-template-columns: 2fr 1fr 1fr 3fr; padding: 16px; border-bottom: 1px solid var(--glass-border); align-items: center; font-size: 0.9rem; }
        .t-row:last-child { border-bottom: none; }
        .t-val { font-weight: 700; color: var(--text-main); font-family: var(--font-header); }
        .t-status.optimal { color: var(--secondary-life); }
        .t-status.warning { color: #f87171; }
        .t-status.stable { color: #818cf8; }
        .t-comment { font-size: 0.85rem; color: var(--text-muted); }

        @media (max-width: 1024px) {
          .report-grid { grid-template-columns: 1fr; }
          .full-width { grid-column: span 1; }
        }
      `}</style>
        </div>
    );
}
