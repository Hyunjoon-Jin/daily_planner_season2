'use client';

import React from 'react';
import {
    BookOpen,
    Mic,
    Search,
    Hash,
    Link as LinkIcon,
    Plus,
    FileText,
    Smile,
    Zap
} from 'lucide-react';

export default function KnowledgePage() {
    const archives = [
        { title: 'Next.js 14 성능 최적화 전략', type: 'link', tags: ['개발', 'FE'], date: '어제' },
        { title: '오늘의 감성 일기', type: 'voice', tags: ['일기', '회고'], date: '2/18', sentiment: '행복' },
        { title: '글래스모피즘 디자인 레퍼런스', type: 'text', tags: ['디자인', 'UI'], date: '2/17' },
    ];

    return (
        <div className="knowledge-container">
            <header className="page-header">
                <div className="header-text">
                    <h2>지식 아카이브</h2>
                    <p>음성 기록, 링크 스크랩 및 생각을 AI가 요약하고 감정을 분석합니다.</p>
                </div>
                <div className="header-actions">
                    <button className="icon-btn-purple"><Mic size={18} /> 음성 기록</button>
                    <button className="btn-primary-small"><Plus size={18} /> 새 메모</button>
                </div>
            </header>

            <div className="knowledge-main">
                <aside className="knowledge-sidebar glass-card">
                    <div className="search-bar">
                        <Search size={16} />
                        <input type="text" placeholder="지식 검색" />
                    </div>

                    <div className="category-list">
                        <div className="cat-group">
                            <span className="cat-title">주요 태그</span>
                            <div className="tags-cloud">
                                <span className="tag active">#전체</span>
                                <span className="tag">#개발</span>
                                <span className="tag">#디자인</span>
                                <span className="tag">#일기</span>
                                <span className="tag">#경제</span>
                            </div>
                        </div>
                    </div>
                </aside>

                <section className="knowledge-content">
                    <div className="archive-grid">
                        {archives.map((item, i) => (
                            <div key={i} className="archive-card glass-card">
                                <div className="card-top">
                                    <div className={`type-icon ${item.type}`}>
                                        {item.type === 'link' && <LinkIcon size={18} />}
                                        {item.type === 'voice' && <Mic size={18} />}
                                        {item.type === 'text' && <FileText size={18} />}
                                    </div>
                                    <span className="date">{item.date}</span>
                                </div>

                                <h4 className="archive-title">{item.title}</h4>

                                <div className="card-footer">
                                    <div className="tags">
                                        {item.tags.map(tag => <span key={tag} className="tag-item">#{tag}</span>)}
                                    </div>
                                    {item.sentiment && (
                                        <div className="sentiment-badge">
                                            <Smile size={14} /> {item.sentiment}
                                        </div>
                                    )}
                                </div>

                                <div className="ai-preview">
                                    <div className="ai-badge"><Zap size={12} /> AI 요약</div>
                                    <p className="summary-text">이 콘텐츠의 핵심 내용은 Next.js의 서버 컴포넌트를 활용한 초기 로딩 속도 개선과 캐싱 전략에 관한 것입니다...</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <style jsx>{`
        .knowledge-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .header-text h2 { font-size: 1.5rem; margin-bottom: 4px; }
        .header-text p { color: var(--text-muted); font-size: 0.9rem; }

        .header-actions { display: flex; gap: 12px; }

        .icon-btn-purple {
          background: rgba(168, 85, 247, 0.1);
          border: 1px solid rgba(168, 85, 247, 0.2);
          color: #A855F7;
          padding: 8px 16px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          cursor: pointer;
        }

        .knowledge-main {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 24px;
          align-items: start;
        }

        .knowledge-sidebar {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .search-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.03);
          padding: 8px 12px;
          border-radius: 8px;
          border: 1px solid var(--glass-border);
        }

        .search-bar input {
          background: none;
          border: none;
          color: white;
          font-size: 0.85rem;
          outline: none;
          width: 100%;
        }

        .cat-title {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-dim);
          display: block;
          margin-bottom: 12px;
          text-transform: uppercase;
        }

        .tags-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tag {
          font-size: 0.8rem;
          padding: 4px 12px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 20px;
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.2s;
        }

        .tag.active, .tag:hover {
          background: var(--primary-work);
          color: white;
        }

        .archive-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
        }

        .archive-card {
          padding: 24px;
          transition: transform 0.2s;
        }

        .archive-card:hover { transform: translateY(-5px); }

        .card-top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .type-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .type-icon.link { background: rgba(99, 102, 241, 0.1); color: var(--primary-work); }
        .type-icon.voice { background: rgba(168, 85, 247, 0.1); color: #A855F7; }
        .type-icon.text { background: rgba(16, 185, 129, 0.1); color: var(--secondary-life); }

        .date { font-size: 0.8rem; color: var(--text-dim); }

        .archive-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 16px;
          line-height: 1.4;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .tag-item { font-size: 0.8rem; color: var(--text-muted); margin-right: 8px; }

        .sentiment-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.8rem;
          color: var(--secondary-life);
          font-weight: 600;
        }

        .ai-preview {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--glass-border);
          border-radius: 10px;
          padding: 12px;
        }

        .ai-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--accent-alert);
          margin-bottom: 8px;
        }

        .summary-text {
          font-size: 0.8rem;
          color: var(--text-dim);
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 1024px) {
          .knowledge-main { grid-template-columns: 1fr; }
        }
      `}</style>
        </div>
    );
}
