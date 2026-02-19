import React from 'react';
import {
  TrendingUp,
  Activity,
  Cpu,
  Clock,
  ChevronRight,
  Plus
} from 'lucide-react';

export default function Home() {
  return (
    <div className="dashboard-content">
      <header className="content-intro">
        <h2 className="welcome-text">안녕하세요, <span className="highlight">사용자</span>님!</h2>
        <p className="sub-text">오늘의 계획과 라이프 리포트입니다.</p>
      </header>

      <div className="stats-grid">
        <div className="stat-card glass-card work">
          <div className="stat-header">
            <Cpu size={24} />
            <span>오늘의 업무 밀도</span>
          </div>
          <div className="stat-value">84%</div>
          <div className="stat-footer">어제보다 12% 상승</div>
        </div>

        <div className="stat-card glass-card health">
          <div className="stat-header">
            <Activity size={24} />
            <span>남은 활동 칼로리</span>
          </div>
          <div className="stat-value">650 <small>kcal</small></div>
          <div className="stat-footer">목표치 80% 달성</div>
        </div>

        <div className="stat-card glass-card asset">
          <div className="stat-header">
            <TrendingUp size={24} />
            <span>자산 변동 내역</span>
          </div>
          <div className="stat-value">+1.2M <small>KRW</small></div>
          <div className="stat-footer">주요 지출: 저녁 식사 (35k)</div>
        </div>
      </div>

      <div className="main-grid">
        <section className="timeline-preview glass-card">
          <div className="section-header">
            <div className="title-group">
              <Clock size={20} />
              <h3>오늘의 타임라인</h3>
            </div>
            <button className="text-btn">상세보기 <ChevronRight size={16} /></button>
          </div>

          <div className="timeline-items">
            {[
              { time: '09:00', label: '주간 기획 회의', type: 'work', status: 'done' },
              { time: '11:30', label: '점심 식사 (샐러드)', type: 'life', status: 'done' },
              { time: '13:00', label: '딥워크: UI 컴포넌트 개발', type: 'work', status: 'current' },
              { time: '15:30', label: '팀 정기 미팅', type: 'work', status: 'upcoming' },
              { time: '18:30', label: '헬스 (등 운동)', type: 'life', status: 'upcoming' },
            ].map((item, i) => (
              <div key={i} className={`timeline-item ${item.status}`}>
                <div className="time">{item.time}</div>
                <div className={`dot ${item.type}`}></div>
                <div className="label">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="quick-actions">
          <button className="action-btn glass-card primary">
            <Plus size={24} />
            <span>새 업무 추가</span>
          </button>
          <button className="action-btn glass-card secondary">
            <Plus size={24} />
            <span>일상 기록</span>
          </button>
        </section>
      </div>

      <style jsx>{`
        .dashboard-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .welcome-text {
          font-size: 2rem;
          margin-bottom: 4px;
        }

        .highlight {
          color: var(--primary-work);
        }

        .sub-text {
          color: var(--text-muted);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .stat-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .stat-header {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: 700;
          font-family: var(--font-display);
        }

        .stat-card.work .stat-header svg { color: var(--primary-work); }
        .stat-card.health .stat-header svg { color: var(--secondary-life); }
        .stat-card.asset .stat-header svg { color: var(--accent-alert); }

        .stat-footer {
          font-size: 0.8rem;
          color: var(--text-dim);
        }

        .main-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding: 0 4px;
        }

        .title-group {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .text-btn {
          background: none;
          border: none;
          color: var(--primary-work);
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.9rem;
          cursor: pointer;
        }

        .timeline-preview {
          padding: 24px;
        }

        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .timeline-item {
          display: flex;
          align-items: center;
          gap: 20px;
          padding-left: 8px;
        }

        .time {
          width: 50px;
          font-size: 0.85rem;
          color: var(--text-dim);
          font-family: var(--font-header);
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          position: relative;
        }

        .dot::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 2px;
          height: 32px;
          background: var(--glass-border);
          z-index: -1;
        }

        .timeline-item:last-child .dot::after { display: none; }

        .dot.work { background: var(--primary-work); }
        .dot.life { background: var(--secondary-life); }

        .timeline-item.done { opacity: 0.5; }
        .timeline-item.current .label { font-weight: 700; color: var(--primary-work); }

        .quick-actions {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .action-btn {
          height: 120px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .action-btn:hover {
          transform: translateY(-5px);
        }

        .action-btn.primary { border-top: 4px solid var(--primary-work); }
        .action-btn.secondary { border-top: 4px solid var(--secondary-life); }

        @media (max-width: 1024px) {
          .main-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
