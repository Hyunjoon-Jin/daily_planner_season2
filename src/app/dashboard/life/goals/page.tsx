'use client';

import React, { useState } from 'react';
import {
    Target,
    CheckCircle2,
    Flame,
    TrendingUp,
    Plus,
    MoreVertical,
    Dna
} from 'lucide-react';

export default function GoalsPage() {
    const habits = [
        { id: 1, name: '물 2L 마시기', streak: 12, done: true },
        { id: 2, name: '아침 명상 10분', streak: 5, done: false },
        { id: 3, name: '매일 코드 커밋', streak: 45, done: true },
        { id: 4, name: '영어 단어 20개', streak: 3, done: false },
    ];

    const okrs = [
        {
            id: 1,
            objective: '상반기 내 풀스택 개발자 역량 강화',
            progress: 65,
            krs: [
                { label: 'Next.js 프로젝트 3개 완성', val: '2/3' },
                { label: '알고리즘 문제 100개 풀이', val: '65/100' }
            ]
        },
        {
            id: 2,
            objective: '개인 자산 1억 달성',
            progress: 40,
            krs: [
                { label: '월 저축액 200만 원 유지', val: '4/12개월' },
                { label: '투자 수익률 연 10% 달성', val: '4.2%' }
            ]
        }
    ];

    return (
        <div className="goals-container">
            <header className="page-header">
                <div className="header-text">
                    <h2>목표 및 습관</h2>
                    <p>내 삶의 OKR을 설정하고 매일의 작은 습관들을 승리로 바꾸세요.</p>
                </div>
                <button className="btn-primary-small">
                    <Plus size={18} /> 새 목표 설정
                </button>
            </header>

            <div className="goals-grid">
                {/* Habit Loop Section */}
                <section className="goals-section glass-card habits">
                    <div className="section-header">
                        <div className="title-group">
                            <Dna size={20} />
                            <h3>데일리 습관 루프</h3>
                        </div>
                        <div className="streak-total">
                            <Flame size={18} /> <span>최장 45일 달성 중</span>
                        </div>
                    </div>

                    <div className="habit-list">
                        {habits.map((habit) => (
                            <div key={habit.id} className={`habit-item ${habit.done ? 'done' : ''}`}>
                                <div className="habit-check">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div className="habit-info">
                                    <span className="habit-name">{habit.name}</span>
                                    <div className="habit-meta">
                                        <span className="streak">{habit.streak}일 연속</span>
                                        <span className="dot">•</span>
                                        <span className="freq">매일</span>
                                    </div>
                                </div>
                                <button className="icon-btn-ghost"><MoreVertical size={18} /></button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* OKR Framework Section */}
                <section className="goals-section glass-card okr">
                    <div className="section-header">
                        <div className="title-group">
                            <Target size={20} />
                            <h3>OKR 프레임워크</h3>
                        </div>
                    </div>

                    <div className="okr-list">
                        {okrs.map((okr) => (
                            <div key={okr.id} className="okr-item">
                                <div className="okr-main">
                                    <div className="okr-info">
                                        <h4 className="objective">{okr.objective}</h4>
                                        <span className="progress-text">{okr.progress}% 완성</span>
                                    </div>
                                    <div className="progress-container">
                                        <div className="progress-bar" style={{ width: `${okr.progress}%` }}></div>
                                    </div>
                                </div>
                                <div className="kr-list">
                                    {okr.krs.map((kr, i) => (
                                        <div key={i} className="kr-item">
                                            <span className="kr-label">{kr.label}</span>
                                            <span className="kr-val">{kr.val}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <style jsx>{`
        .goals-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .header-text h2 { font-size: 1.5rem; margin-bottom: 4px; }
        .header-text p { color: var(--text-muted); font-size: 0.9rem; }

        .goals-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 24px;
        }

        .goals-section {
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

        .streak-total {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--accent-alert);
          font-size: 0.85rem;
          font-weight: 600;
        }

        .habit-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .habit-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          border: 1px solid var(--glass-border);
          transition: all 0.2s;
        }

        .habit-item.done {
          background: rgba(16, 185, 129, 0.05);
          border-color: rgba(16, 185, 129, 0.2);
        }

        .habit-check {
          color: var(--text-dim);
          cursor: pointer;
        }

        .habit-item.done .habit-check {
          color: var(--secondary-life);
        }

        .habit-info { flex: 1; }
        .habit-name { font-weight: 600; display: block; margin-bottom: 4px; }
        
        .habit-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: var(--text-dim);
        }

        .streak { color: var(--accent-alert); font-weight: 600; }

        .icon-btn-ghost {
          background: none;
          border: none;
          color: var(--text-dim);
          cursor: pointer;
        }

        .okr-list {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .okr-item {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .okr-main {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .okr-info {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .objective { font-size: 1.1rem; font-weight: 700; flex: 1; }
        .progress-text { font-size: 0.85rem; color: var(--text-muted); font-weight: 600; }

        .progress-container {
          height: 10px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 5px;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--primary-work), var(--secondary-life));
          border-radius: 5px;
        }

        .kr-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-left: 12px;
          border-left: 2px solid var(--glass-border);
        }

        .kr-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .kr-val { font-weight: 600; color: var(--text-main); font-family: var(--font-header); }

        @media (max-width: 1024px) {
          .goals-grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </div>
    );
}
