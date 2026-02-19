'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, Send } from 'lucide-react';

export default function RecoveryPage() {
    return (
        <div className="auth-container">
            <Link href="/login" className="back-btn">
                <ArrowLeft size={20} />
                <span>로그인으로 돌아가기</span>
            </Link>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="auth-card glass-card"
            >
                <div className="auth-header">
                    <h2>비밀번호 찾기</h2>
                    <p>가입하신 이메일로 비밀번호 재설정 링크를 보내드립니다.</p>
                </div>

                <form className="auth-form">
                    <div className="input-group">
                        <label>이메일</label>
                        <div className="input-wrapper">
                            <Mail size={18} className="icon" />
                            <input type="email" placeholder="example@life.com" required />
                        </div>
                    </div>

                    <button type="submit" className="btn-primary-lg full-width">
                        재설정 링크 받기 <Send size={18} />
                    </button>
                </form>

                <div className="auth-footer">
                    <span>문제가 계속되나요? </span>
                    <span className="contact-support">고객센터 문의</span>
                </div>
            </motion.div>

            <style jsx>{`
        .auth-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-dark);
          position: relative;
        }

        .back-btn {
          position: absolute;
          top: 40px;
          left: 40px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-muted);
        }

        .auth-card {
          width: 100%;
          max-width: 440px;
          padding: 48px;
        }

        .auth-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .auth-header h2 { font-size: 1.75rem; margin-bottom: 8px; }
        .auth-header p { color: var(--text-muted); font-size: 0.95rem; line-height: 1.5; }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .input-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-wrapper .icon {
          position: absolute;
          left: 16px;
          color: var(--text-dim);
        }

        .input-wrapper input {
          width: 100%;
          padding: 14px 16px 14px 48px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          color: white;
          font-size: 1rem;
          outline: none;
        }

        .full-width { width: 100%; }

        .auth-footer {
          margin-top: 32px;
          text-align: center;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .contact-support {
          color: var(--primary-work);
          cursor: pointer;
          text-decoration: underline;
        }
      `}</style>
        </div>
    );
}
