'use client';

import React from 'react';
import {
    Users,
    Search,
    UserPlus,
    Clock,
    Calendar,
    MoreHorizontal,
    Mail,
    Phone,
    MessageSquare
} from 'lucide-react';

export default function NetworkingPage() {
    const contacts = [
        { name: '이민수 (팀장)', lastContact: '2일 전', interval: '1주일', tags: ['직장', '중요'], role: '프로젝트 매니저' },
        { name: '김지아', lastContact: '14일 전', interval: '1개월', tags: ['동창', '개인'], role: 'UX 디자이너' },
        { name: 'Park Jun', lastContact: '오늘', interval: '2주일', tags: ['네트워킹', '잠재고객'], role: 'CEO @ TechStar' },
    ];

    return (
        <div className="networking-container">
            <header className="page-header">
                <div className="header-text">
                    <h2>인맥 관리</h2>
                    <p>중요한 관계를 놓치지 않도록 연락 주기를 관리하고 대화 이력을 기록하세요.</p>
                </div>
                <button className="btn-primary-small">
                    <UserPlus size={18} /> 새 인맥 추가
                </button>
            </header>

            <div className="networking-grid">
                {/* Contact List */}
                <div className="contact-section glass-card">
                    <div className="section-header">
                        <div className="title-group">
                            <Users size={20} />
                            <h3>연락처 목록</h3>
                        </div>
                        <div className="search-box">
                            <Search size={16} />
                            <input type="text" placeholder="이름 또는 소속 검색" />
                        </div>
                    </div>

                    <div className="contact-list">
                        {contacts.map((contact, i) => (
                            <div key={i} className="contact-item">
                                <div className="avatar">{contact.name[0]}</div>
                                <div className="contact-info">
                                    <div className="name-row">
                                        <span className="name">{contact.name}</span>
                                        <span className="role">{contact.role}</span>
                                    </div>
                                    <div className="tags">
                                        {contact.tags.map(tag => <span key={tag} className="tag">#{tag}</span>)}
                                    </div>
                                </div>
                                <div className="contact-status">
                                    <div className="last-seen">
                                        <Clock size={14} /> {contact.lastContact}
                                    </div>
                                    <div className="interval">주기: {contact.interval}</div>
                                </div>
                                <button className="icon-btn-ghost"><MoreHorizontal size={18} /></button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Meeting History Placeholder */}
                <div className="history-section glass-card">
                    <div className="section-header">
                        <div className="title-group">
                            <Calendar size={20} />
                            <h3>최근 미팅 이력</h3>
                        </div>
                    </div>

                    <div className="history-list">
                        <div className="history-item">
                            <div className="date-badge">2/20</div>
                            <div className="history-info">
                                <div className="h-title">Park Jun님과 사업 협력 미팅</div>
                                <div className="h-desc">타임블록 연동 완료: 오후 2:00 ~ 3:30</div>
                            </div>
                            <div className="h-actions">
                                <button className="icon-btn"><MessageSquare size={16} /></button>
                            </div>
                        </div>
                        <div className="history-item empty">
                            <p>타임블록 일정을 추가하면 미팅 이력이 자동으로 기록됩니다.</p>
                        </div>
                    </div>

                    <div className="quick-contact glass-card">
                        <h4>오늘 안보를 물어볼까요?</h4>
                        <div className="suggestion">
                            <div className="s-avatar">김</div>
                            <p><strong>김지아</strong>님과 마지막 연락 후 14일이 지났습니다.</p>
                        </div>
                        <div className="s-actions">
                            <button className="btn-msg"><Mail size={16} /> 메일</button>
                            <button className="btn-msg"><Phone size={16} /> 전화</button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .networking-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .header-text h2 { font-size: 1.5rem; margin-bottom: 4px; }
        .header-text p { color: var(--text-muted); font-size: 0.9rem; }

        .networking-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 24px;
        }

        .contact-section, .history-section {
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

        .contact-list {
          display: flex;
          flex-direction: column;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          border-bottom: 1px solid var(--glass-border);
          transition: background 0.2s;
          border-radius: 12px;
        }

        .contact-item:hover { background: rgba(255, 255, 255, 0.02); }

        .avatar {
          width: 48px;
          height: 48px;
          background: var(--primary-work);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.2rem;
        }

        .contact-info { flex: 1; }
        .name-row { display: flex; align-items: baseline; gap: 8px; margin-bottom: 4px; }
        .name { font-weight: 600; font-size: 1rem; }
        .role { font-size: 0.8rem; color: var(--text-dim); }

        .tags { display: flex; gap: 6px; }
        .tag { font-size: 0.75rem; color: var(--text-muted); background: rgba(255, 255, 255, 0.05); padding: 2px 8px; border-radius: 4px; }

        .contact-status { text-align: right; }
        .last-seen { font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; justify-content: flex-end; gap: 4px; margin-bottom: 4px; }
        .interval { font-size: 0.75rem; color: var(--text-dim); }

        .icon-btn-ghost { background: none; border: none; color: var(--text-dim); cursor: pointer; }

        .history-list { display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; }

        .history-item {
          display: flex;
          gap: 16px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 12px;
          align-items: center;
        }

        .date-badge {
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--secondary-life);
        }

        .h-title { font-weight: 600; font-size: 0.9rem; margin-bottom: 4px; }
        .h-desc { font-size: 0.8rem; color: var(--text-dim); }

        .history-item.empty { justify-content: center; padding: 24px; color: var(--text-dim); font-size: 0.85rem; border: 1px dashed var(--glass-border); }

        .quick-contact { padding: 20px; border: 1px solid rgba(16, 185, 129, 0.2); }
        .quick-contact h4 { font-size: 0.95rem; margin-bottom: 16px; color: var(--secondary-life); }

        .suggestion { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .s-avatar { width: 32px; height: 32px; background: var(--text-dim); border-radius: 50%; font-size: 0.8rem; display: flex; align-items: center; justify-content: center; }
        .suggestion p { font-size: 0.85rem; color: var(--text-muted); }

        .s-actions { display: flex; gap: 12px; }
        .btn-msg {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          color: var(--text-main);
          padding: 8px;
          border-radius: 8px;
          font-size: 0.85rem;
          cursor: pointer;
        }

        @media (max-width: 1024px) {
          .networking-grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </div>
    );
}
