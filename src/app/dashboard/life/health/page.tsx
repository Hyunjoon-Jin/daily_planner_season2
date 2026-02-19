'use client';

import React, { useState } from 'react';
import {
    HeartPulse,
    Activity,
    Utensils,
    Camera,
    ChevronRight,
    Plus,
    Flame,
    Scale,
    Smile
} from 'lucide-react';

export default function HealthPage() {
    const [caloriesBurned, setCaloriesBurned] = useState(1240);
    const [caloriesConsumed, setCaloriesConsumed] = useState(1850);
    const [weight, setWeight] = useState(72.5);

    return (
        <div className="health-container">
            <header className="page-header">
                <div className="header-text">
                    <h2>건강 관리</h2>
                    <p>운동 기록과 식단을 AI로 분석하고 신체 변화를 추적하세요.</p>
                </div>
            </header>

            <div className="health-summary">
                <div className="mini-card glass-card">
                    <div className="label"><Flame size={18} /> 활동 대사량</div>
                    <div className="value">{caloriesBurned} <small>kcal</small></div>
                </div>
                <div className="mini-card glass-card">
                    <div className="label"><Utensils size={18} /> 섭취 칼로리</div>
                    <div className="value">{caloriesConsumed} <small>kcal</small></div>
                </div>
                <div className="mini-card glass-card">
                    <div className="label"><Scale size={18} /> 현재 체격</div>
                    <div className="value">{weight} <small>kg</small></div>
                </div>
            </div>

            <div className="health-grid">
                {/* Diet AI Section */}
                <section className="health-section glass-card diet">
                    <div className="section-header">
                        <div className="title-group">
                            <Utensils size={20} />
                            <h3>AI 식단 분석</h3>
                        </div>
                        <button className="icon-btn-primary"><Camera size={18} /> 사진 분석</button>
                    </div>

                    <div className="diet-content">
                        <div className="empty-state">
                            <div className="ai-pulse"></div>
                            <p>식단 사진을 업로드하면 AI가 칼로리와 영양 성분을 자동으로 분석합니다.</p>
                        </div>

                        <div className="recent-meals">
                            <div className="meal-item">
                                <div className="meal-info">
                                    <span className="name">닭가슴살 샐러드 & 고구마</span>
                                    <span className="cal">420 kcal</span>
                                </div>
                                <div className="meal-tags">
                                    <span className="tag">단백질 고</span>
                                    <span className="tag">저탄수</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Workout Section */}
                <section className="health-section glass-card workout">
                    <div className="section-header">
                        <div className="title-group">
                            <Activity size={20} />
                            <h3>운동 기록</h3>
                        </div>
                        <button className="icon-btn-secondary"><Plus size={18} /> 기록</button>
                    </div>

                    <div className="workout-list">
                        {[
                            { type: '웨이트', label: '등/이두 루틴', duration: '60분', status: '완료' },
                            { type: '유산소', label: '야외 러닝', duration: '30분', status: '준비' },
                        ].map((w, i) => (
                            <div key={i} className="workout-row">
                                <div className="w-icon"><Activity size={18} /></div>
                                <div className="w-info">
                                    <span className="w-name">{w.label}</span>
                                    <span className="w-meta">{w.type} • {w.duration}</span>
                                </div>
                                <div className={`w-status ${w.status === '완료' ? 'done' : ''}`}>{w.status}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Body Composition Chart Placeholder */}
                <section className="health-section glass-card body-comp">
                    <div className="section-header">
                        <div className="title-group">
                            <HeartPulse size={20} />
                            <h3>체성분 변화</h3>
                        </div>
                    </div>
                    <div className="chart-placeholder">
                        <div className="bar-group">
                            <div className="bar" style={{ height: '60%' }}></div>
                            <div className="bar" style={{ height: '75%' }}></div>
                            <div className="bar" style={{ height: '65%' }}></div>
                            <div className="bar highlighted" style={{ height: '85%' }}></div>
                        </div>
                        <p className="chart-text">골격근량 3.2kg 증가 (최근 3개월)</p>
                    </div>
                </section>
            </div>

            <style jsx>{`
        .health-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .header-text h2 { font-size: 1.5rem; margin-bottom: 4px; }
        .header-text p { color: var(--text-muted); font-size: 0.9rem; }

        .health-summary {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .mini-card {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .mini-card .label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .mini-card .value {
          font-size: 1.75rem;
          font-weight: 700;
          font-family: var(--font-display);
        }

        .health-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 24px;
        }

        .health-section {
          padding: 24px;
        }

        .diet { grid-row: span 2; }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .title-group {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 700;
        }

        .icon-btn-primary {
          background: var(--primary-work);
          border: none;
          color: white;
          padding: 8px 16px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          cursor: pointer;
        }

        .icon-btn-secondary {
          background: var(--secondary-life);
          border: none;
          color: white;
          padding: 8px 16px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          cursor: pointer;
        }

        .diet-content {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .empty-state {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 20px;
          padding: 40px;
          color: var(--text-dim);
          font-size: 0.9rem;
        }

        .ai-pulse {
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, var(--primary-work) 0%, transparent 70%);
          border-radius: 50%;
          animation: pulse 2s infinite;
          opacity: 0.3;
        }

        @keyframes pulse {
          0% { transform: scale(0.8); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
          100% { transform: scale(0.8); opacity: 0.3; }
        }

        .recent-meals {
          margin-top: 24px;
          border-top: 1px solid var(--glass-border);
          padding-top: 24px;
        }

        .meal-item {
          padding: 16px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
        }

        .meal-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .meal-info .name { font-weight: 600; font-size: 0.95rem; }
        .meal-info .cal { font-weight: 700; color: var(--secondary-life); font-size: 0.9rem; }

        .meal-tags {
          display: flex;
          gap: 8px;
        }

        .tag {
          font-size: 0.75rem;
          padding: 2px 8px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          color: var(--text-dim);
        }

        .workout-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .workout-row {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }

        .w-icon {
          width: 36px;
          height: 36px;
          background: rgba(99, 102, 241, 0.1);
          color: var(--primary-work);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .w-info { flex: 1; display: flex; flex-direction: column; }
        .w-name { font-weight: 600; font-size: 0.9rem; }
        .w-meta { font-size: 0.8rem; color: var(--text-dim); }

        .w-status {
          font-size: 0.8rem;
          padding: 4px 10px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-dim);
        }

        .w-status.done {
          background: rgba(16, 185, 129, 0.1);
          color: var(--secondary-life);
        }

        .chart-placeholder {
          height: 180px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }

        .bar-group {
          display: flex;
          align-items: flex-end;
          gap: 16px;
          height: 100px;
        }

        .bar {
          width: 32px;
          background: var(--glass-border);
          border-radius: 6px 6px 0 0;
        }

        .bar.highlighted {
          background: linear-gradient(180deg, var(--secondary-life), transparent);
        }

        .chart-text {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .health-grid { grid-template-columns: 1fr; }
          .health-summary { grid-template-columns: 1fr; }
        }
      `}</style>
        </div>
    );
}
