'use client';

import React, { useState } from 'react';
import { motion, Reorder } from 'framer-motion';
import { MoreHorizontal, Plus, GripVertical, Clock, Tag } from 'lucide-react';

export default function KanbanBoard() {
    const [columns, setColumns] = useState([
        {
            id: 'todo',
            title: '할 일',
            tasks: [
                { id: '1', title: 'Supabase 연동 로직 고도화', time: '2시간', priority: 'High' },
                { id: '2', title: '디자인 가이드라인 최종 검토', time: '1시간', priority: 'Medium' }
            ]
        },
        {
            id: 'in-progress',
            title: '진행 중',
            tasks: [
                { id: '3', title: 'Professional Suite UI 개발', time: '4시간', priority: 'High' }
            ]
        },
        {
            id: 'done',
            title: '완료',
            tasks: [
                { id: '4', title: 'Landing Page 애니메이션 적용', time: '3시간', priority: 'Low' }
            ]
        },
    ]);

    return (
        <div className="kanban-container">
            {columns.map((column) => (
                <div key={column.id} className="kanban-column">
                    <div className="column-header">
                        <div className="header-left">
                            <span className="count">{column.tasks.length}</span>
                            <h4>{column.title}</h4>
                        </div>
                        <button className="icon-btn-ghost"><MoreHorizontal size={18} /></button>
                    </div>

                    <div className="task-list">
                        {column.tasks.map((task) => (
                            <motion.div
                                key={task.id}
                                layoutId={task.id}
                                className="task-card glass-card"
                                whileHover={{ y: -4 }}
                            >
                                <div className="task-top">
                                    <div className={`priority-badge ${task.priority.toLowerCase()}`}>
                                        {task.priority}
                                    </div>
                                    <GripVertical size={16} className="grip" />
                                </div>
                                <h5 className="task-title">{task.title}</h5>
                                <div className="task-footer">
                                    <div className="meta">
                                        <Clock size={12} />
                                        <span>{task.time}</span>
                                    </div>
                                    <Tag size={12} />
                                </div>
                            </motion.div>
                        ))}
                        <button className="add-task-btn">
                            <Plus size={16} /> 작업 추가
                        </button>
                    </div>
                </div>
            ))}

            <style jsx>{`
        .kanban-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: start;
        }

        .kanban-column {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .column-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 4px;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .count {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-dim);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 12px;
          border: 1px solid var(--glass-border);
        }

        .column-header h4 { font-size: 0.95rem; font-weight: 700; }

        .task-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .task-card {
          padding: 16px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .task-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .priority-badge {
          font-size: 0.7rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .priority-badge.high { background: rgba(239, 68, 68, 0.1); color: #EF4444; }
        .priority-badge.medium { background: rgba(245, 158, 11, 0.1); color: #F59E0B; }
        .priority-badge.low { background: rgba(16, 185, 129, 0.1); color: #10B981; }

        .grip { color: var(--text-dim); opacity: 0; transition: opacity 0.2s; }
        .task-card:hover .grip { opacity: 1; }

        .task-title {
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 16px;
          line-height: 1.4;
        }

        .task-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-dim);
          font-size: 0.75rem;
        }

        .meta { display: flex; align-items: center; gap: 4px; }

        .add-task-btn {
          width: 100%;
          padding: 12px;
          background: none;
          border: 1px dashed var(--glass-border);
          color: var(--text-dim);
          border-radius: 12px;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .add-task-btn:hover { background: rgba(255, 255, 255, 0.03); color: var(--text-muted); }
      `}</style>
        </div>
    );
}
