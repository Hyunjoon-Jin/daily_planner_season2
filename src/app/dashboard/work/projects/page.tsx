'use client';

import React from 'react';
import KanbanBoard from '@/components/work/KanbanBoard';
import {
    Briefcase,
    Search,
    Filter,
    Plus,
    Layout,
    List,
    ChevronDown
} from 'lucide-react';

export default function ProjectsPage() {
    return (
        <div className="projects-container">
            <header className="page-header">
                <div className="header-text">
                    <div className="breadcrumb">Professional Suite / Projects</div>
                    <h2>프로젝트 관리</h2>
                </div>
                <div className="header-actions">
                    <button className="btn-ghost-small"><Filter size={18} /> 필터</button>
                    <button className="btn-primary-small"><Plus size={18} /> 새 프로젝트</button>
                </div>
            </header>

            <div className="view-toolbar glass-card">
                <div className="view-selector">
                    <button className="view-btn active"><Layout size={18} /> 보드</button>
                    <button className="view-btn"><List size={18} /> 리스트</button>
                </div>

                <div className="search-box">
                    <Search size={16} />
                    <input type="text" placeholder="프로젝트 또는 작업 검색" />
                </div>

                <div className="project-selector">
                    <div className="current-project">
                        <span className="dot" style={{ background: 'var(--primary-work)' }}></span>
                        <span className="name">LP Season 2 Launch</span>
                        <ChevronDown size={14} />
                    </div>
                </div>
            </div>

            <div className="projects-content">
                <KanbanBoard />
            </div>

            <style jsx>{`
        .projects-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .breadcrumb {
          font-size: 0.75rem;
          color: var(--text-dim);
          margin-bottom: 4px;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .header-text h2 { font-size: 1.5rem; }

        .header-actions {
          display: flex;
          gap: 12px;
        }

        .view-toolbar {
          padding: 8px 16px;
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .view-selector {
          display: flex;
          background: rgba(255, 255, 255, 0.03);
          padding: 4px;
          border-radius: 8px;
          border: 1px solid var(--glass-border);
        }

        .view-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border-radius: 6px;
          border: none;
          background: none;
          color: var(--text-dim);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .view-btn.active {
          background: rgba(255, 255, 255, 0.05);
          color: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .search-box {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.03);
          padding: 8px 16px;
          border-radius: 8px;
          border: 1px solid var(--glass-border);
        }

        .search-box input {
          background: none;
          border: none;
          color: white;
          font-size: 0.85rem;
          outline: none;
          width: 100%;
        }

        .project-selector {
          padding-left: 24px;
          border-left: 1px solid var(--glass-border);
        }

        .current-project {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 8px;
          transition: background 0.2s;
        }

        .current-project:hover { background: rgba(255, 255, 255, 0.03); }

        .dot { width: 8px; height: 8px; border-radius: 50%; }

        .projects-content {
          margin-top: 8px;
          overflow-x: auto;
          padding-bottom: 24px;
        }
      `}</style>
        </div>
    );
}
