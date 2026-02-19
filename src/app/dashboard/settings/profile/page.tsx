'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Shield, Trash2, AlertTriangle, Save } from 'lucide-react';

export default function ProfilePage() {
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    return (
        <div className="profile-container">
            <header className="page-header">
                <h2>계정 및 개인정보 관리</h2>
                <p>프로필 정보를 수정하거나 계정을 관리할 수 있습니다.</p>
            </header>

            <div className="profile-grid">
                <section className="profile-section glass-card">
                    <div className="section-title">
                        <User size={20} />
                        <span>기본 정보</span>
                    </div>

                    <form className="profile-form">
                        <div className="input-row">
                            <div className="input-group">
                                <label>이름</label>
                                <input type="text" defaultValue="홍길동" />
                            </div>
                            <div className="input-group">
                                <label>이메일</label>
                                <input type="email" defaultValue="hgd@example.com" disabled />
                            </div>
                        </div>

                        <div className="input-group">
                            <label>자기 소개</label>
                            <textarea placeholder="간단한 소개를 입력하세요." defaultValue="안녕하세요. 라이프 플래너 시즌 2 사용자입니다." />
                        </div>

                        <button type="submit" className="btn-primary-small">
                            <Save size={18} /> 정보 저장
                        </button>
                    </form>
                </section>

                <section className="profile-section glass-card security">
                    <div className="section-title">
                        <Shield size={20} />
                        <span>보안 설정</span>
                    </div>
                    <div className="security-item">
                        <div className="info">
                            <div className="label">비밀번호 변경</div>
                            <div className="desc">주기적인 비밀번호 변경으로 계정을 보호하세요.</div>
                        </div>
                        <button className="btn-ghost-small">변경하기</button>
                    </div>
                    <div className="security-item">
                        <div className="info">
                            <div className="label">2단계 인증</div>
                            <div className="desc">보안 강화를 위해 2단계 인증을 활성화하세요.</div>
                        </div>
                        <button className="btn-ghost-small">설정</button>
                    </div>
                </section>

                <section className="profile-section glass-card danger">
                    <div className="section-title">
                        <AlertTriangle size={20} />
                        <span>계정 삭제</span>
                    </div>
                    <p className="danger-text">
                        계정을 삭제하면 모든 타임블록 기록, 업무 데이터, 일상 기록 및 업로드된 파일이 <strong>영구적으로 삭제</strong>되며 복구할 수 없습니다.
                    </p>
                    <button
                        className="btn-danger"
                        onClick={() => setShowDeleteModal(true)}
                    >
                        <Trash2 size={18} /> 계정 탈퇴 및 모든 데이터 삭제
                    </button>
                </section>
            </div>

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className="modal-overlay">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="modal-content glass-card"
                    >
                        <div className="modal-header">
                            <AlertTriangle size={32} className="warning-icon" />
                            <h3>정말로 탈퇴하시겠습니까?</h3>
                        </div>
                        <p>
                            탈퇴 즉시 귀하의 모든 데이터(일정, 업무, 건강, 결제 내역 등)는 Supabase 스토리지와 DB에서 <strong>완전 삭제(Cascade Delete)</strong>됩니다.
                        </p>
                        <div className="modal-actions">
                            <button className="btn-ghost" onClick={() => setShowDeleteModal(false)}>취소</button>
                            <button className="btn-danger-lg">데이터 파기 및 탈퇴 확인</button>
                        </div>
                    </motion.div>
                </div>
            )}

            <style jsx>{`
        .profile-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .page-header h2 { font-size: 1.5rem; margin-bottom: 4px; }
        .page-header p { color: var(--text-muted); font-size: 0.9rem; }

        .profile-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        .profile-section {
          padding: 32px;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 24px;
        }

        .profile-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .input-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .input-group label { font-size: 0.85rem; color: var(--text-muted); font-weight: 600; }

        .input-group input, .input-group textarea {
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          color: white;
          outline: none;
        }

        .input-group input:disabled { opacity: 0.5; cursor: not-allowed; }
        .input-group textarea { height: 100px; resize: none; }

        .security-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 12px;
          margin-bottom: 12px;
        }

        .security-item .label { font-weight: 600; margin-bottom: 4px; }
        .security-item .desc { font-size: 0.8rem; color: var(--text-dim); }

        .btn-ghost-small {
          background: none;
          border: 1px solid var(--glass-border);
          color: var(--text-muted);
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.85rem;
          cursor: pointer;
        }

        .danger-text {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .btn-danger {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          color: #EF4444;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          backdrop-filter: blur(8px);
        }

        .modal-content {
          width: 90%;
          max-width: 500px;
          padding: 40px;
          text-align: center;
        }

        .modal-header {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .warning-icon { color: #EF4444; }

        .modal-actions {
          display: flex;
          gap: 16px;
          margin-top: 32px;
          justify-content: center;
        }

        .btn-danger-lg {
          background: #EF4444;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
        }
      `}</style>
        </div>
    );
}
