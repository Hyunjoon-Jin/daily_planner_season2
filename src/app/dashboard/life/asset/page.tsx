'use client';

import React, { useState } from 'react';
import {
    Wallet,
    TrendingUp,
    TrendingDown,
    CreditCard,
    Plus,
    ArrowUpRight,
    ArrowDownLeft,
    Search,
    Filter
} from 'lucide-react';

export default function AssetPage() {
    const [totalNetWorth, setTotalNetWorth] = useState(12500000);
    const [inflow, setInflow] = useState(3500000);
    const [outflow, setOutflow] = useState(1200000);

    const transactions = [
        { id: 1, title: '스타벅스 강남점', category: '식비', amount: -6500, time: '14:20', date: '오늘' },
        { id: 2, title: '급여 입금', category: '수입', amount: 3500000, time: '10:00', date: '어제' },
        { id: 3, title: '애플 뮤직 구독', category: '문화생활', amount: -8900, time: '02:00', date: '2/18' },
        { id: 4, title: 'GS25 편의점', category: '식비', amount: -4200, time: '21:30', date: '2/18' },
    ];

    return (
        <div className="asset-container">
            <header className="page-header">
                <div className="header-text">
                    <h2>자산 관리</h2>
                    <p>수입, 지출 및 전체 자산 현황을 스마트하게 트래킹하세요.</p>
                </div>
                <button className="btn-primary-small">
                    <Plus size={18} /> 거래 내역 추가
                </button>
            </header>

            <div className="summary-cards">
                <div className="summary-card glass-card main">
                    <div className="card-label">전체 순자산</div>
                    <div className="card-value">₩ {totalNetWorth.toLocaleString()}</div>
                    <div className="card-change positive">지난달 대비 +4.2%</div>
                </div>
                <div className="summary-card glass-card">
                    <div className="card-label">이번 달 수입</div>
                    <div className="card-value inflow">₩ {inflow.toLocaleString()}</div>
                    <div className="card-icon"><TrendingUp size={24} /></div>
                </div>
                <div className="summary-card glass-card">
                    <div className="card-label">이번 달 지출</div>
                    <div className="card-value outflow">₩ {outflow.toLocaleString()}</div>
                    <div className="card-icon"><TrendingDown size={24} /></div>
                </div>
            </div>

            <div className="transaction-section glass-card">
                <div className="section-header">
                    <div className="title-group">
                        <CreditCard size={20} />
                        <h3>최근 거래 내역</h3>
                    </div>
                    <div className="action-group">
                        <div className="search-box">
                            <Search size={16} />
                            <input type="text" placeholder="내역 검색" />
                        </div>
                        <button className="icon-btn"><Filter size={18} /></button>
                    </div>
                </div>

                <div className="transaction-list">
                    {transactions.map((tx) => (
                        <div key={tx.id} className="transaction-item">
                            <div className={`icon-placeholder ${tx.amount > 0 ? 'plus' : 'minus'}`}>
                                {tx.amount > 0 ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
                            </div>
                            <div className="tx-details">
                                <div className="tx-main">
                                    <span className="tx-title">{tx.title}</span>
                                    <span className={`tx-amount ${tx.amount > 0 ? 'plus' : 'minus'}`}>
                                        {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString()} 원
                                    </span>
                                </div>
                                <div className="tx-meta">
                                    <span className="tx-category">{tx.category}</span>
                                    <span className="tx-time">{tx.date} {tx.time}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="view-all-btn">전체 내역 보기</button>
            </div>

            <style jsx>{`
        .asset-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .header-text h2 { font-size: 1.5rem; margin-bottom: 4px; }
        .header-text p { color: var(--text-muted); font-size: 0.9rem; }

        .summary-cards {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 20px;
        }

        .summary-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          min-height: 140px;
        }

        .summary-card.main {
          border-left: 4px solid var(--primary-work);
        }

        .card-label {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 8px;
        }

        .card-value {
          font-size: 2rem;
          font-weight: 700;
          font-family: var(--font-display);
        }

        .inflow { color: var(--secondary-life); }
        .outflow { color: #f87171; }

        .card-change {
          font-size: 0.8rem;
          margin-top: 8px;
        }

        .card-change.positive { color: var(--secondary-life); }

        .card-icon {
          position: absolute;
          top: 24px;
          right: 24px;
          opacity: 0.2;
        }

        .transaction-section {
          padding: 24px;
        }

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

        .action-group {
          display: flex;
          gap: 12px;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.03);
          padding: 6px 12px;
          border-radius: 8px;
          border: 1px solid var(--glass-border);
        }

        .search-box input {
          background: none;
          border: none;
          color: white;
          font-size: 0.85rem;
          outline: none;
        }

        .icon-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          color: var(--text-muted);
          padding: 8px;
          border-radius: 8px;
          cursor: pointer;
        }

        .transaction-list {
          display: flex;
          flex-direction: column;
        }

        .transaction-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 0;
          border-bottom: 1px solid var(--glass-border);
        }

        .transaction-item:last-child { border-bottom: none; }

        .icon-placeholder {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-placeholder.plus { background: rgba(16, 185, 129, 0.1); color: var(--secondary-life); }
        .icon-placeholder.minus { background: rgba(248, 113, 113, 0.1); color: #f87171; }

        .tx-details { flex: 1; }

        .tx-main {
          display: flex;
          justify-content: space-between;
          margin-bottom: 4px;
        }

        .tx-title { font-weight: 600; }
        .tx-amount { font-weight: 700; font-family: var(--font-header); }
        .tx-amount.plus { color: var(--secondary-life); }
        .tx-amount.minus { color: #f87171; }

        .tx-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--text-dim);
        }

        .view-all-btn {
          width: 100%;
          margin-top: 20px;
          padding: 12px;
          background: none;
          border: 1px solid var(--glass-border);
          color: var(--text-muted);
          border-radius: 8px;
          cursor: pointer;
          font-size: 0.9rem;
          transition: background 0.2s;
        }

        .view-all-btn:hover { background: rgba(255, 255, 255, 0.05); }

        @media (max-width: 1024px) {
          .summary-cards { grid-template-columns: 1fr; }
        }
      `}</style>
        </div>
    );
}
