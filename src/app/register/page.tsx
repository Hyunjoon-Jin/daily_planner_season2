'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Lock, UserPlus, ChevronLeft, User, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { BgBlobs } from '@/components/ui/BgBlobs';

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    console.log('Starting registration for:', email);

    if (!supabase) {
      setError('Supabase 클라이언트가 초기화되지 않았습니다. 환경 변수를 확인해주세요.');
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
        },
      });

      console.log('Registration response:', { data, error });

      if (error) {
        setError(error.message);
      } else {
        setMessage('인증 메일이 발송되었습니다. 이메일을 확인해 주세요!');
      }
    } catch (err: any) {
      console.error('Registration error:', err);
      setError(err.message || '회원가입 중 예상치 못한 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <BgBlobs />

      <Link href="/" className="back-btn">
        <ChevronLeft size={20} />
        <span>메인으로</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="auth-card glass-card"
      >
        <div className="auth-header">
          <h2>시작하기</h2>
          <p>새로운 라이프 컨트롤러의 주인이 되세요.</p>
        </div>

        {error && (
          <div className="auth-alert error">
            {error}
          </div>
        )}

        {message && (
          <div className="auth-alert success">
            {message}
          </div>
        )}

        <form className="auth-form" onSubmit={handleRegister}>
          <div className="input-group">
            <label>이름</label>
            <div className="input-wrapper">
              <User size={18} className="icon" />
              <input
                type="text"
                placeholder="홍길동"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <label>이메일</label>
            <div className="input-wrapper">
              <Mail size={18} className="icon" />
              <input
                type="email"
                placeholder="example@life.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <label>비밀번호</label>
            <div className="input-wrapper">
              <Lock size={18} className="icon" />
              <input
                type="password"
                placeholder="8자 이상 입력"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <p className="terms-text">
            가입 시 <span className="highlight">이용약관</span> 및 <span className="highlight">개인정보처리방침</span>에 동의하게 됩니다.
          </p>

          <button type="submit" className="btn-secondary full-width" disabled={loading}>
            {loading ? <Loader2 className="animate-spin" size={20} /> : <>무료 회원가입 <UserPlus size={20} /></>}
          </button>
        </form>

        <div className="auth-footer">
          <span>이미 계정이 있으신가요?</span>
          <Link href="/login" className="switch-link">로그인</Link>
        </div>
      </motion.div>

      <style jsx>{`
        .auth-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #06080B;
          position: relative;
          overflow: hidden;
        }

        .auth-alert {
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 24px;
          font-size: 0.85rem;
          text-align: center;
          border: 1px solid;
          z-index: 10;
        }

        .auth-alert.error {
          background: rgba(239, 68, 68, 0.1);
          border-color: rgba(239, 68, 68, 0.2);
          color: #EF4444;
        }

        .auth-alert.success {
          background: rgba(16, 185, 129, 0.1);
          border-color: rgba(16, 185, 129, 0.2);
          color: #10B981;
        }

        .back-btn {
          position: absolute;
          top: 40px;
          left: 40px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-muted);
          transition: color 0.2s;
          z-index: 10;
        }

        .back-btn:hover { color: var(--text-main); }

        .auth-card {
          width: 100%;
          max-width: 440px;
          padding: 48px;
          z-index: 10;
        }

        .auth-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .auth-header h2 { font-size: 1.75rem; margin-bottom: 8px; }
        .auth-header p { color: var(--text-muted); font-size: 0.95rem; }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
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
          transition: border-color 0.2s;
        }

        .input-wrapper input:focus { border-color: var(--secondary-life); }

        .terms-text {
          font-size: 0.8rem;
          color: var(--text-dim);
          text-align: center;
          line-height: 1.4;
        }

        .highlight { color: var(--text-muted); text-decoration: underline; cursor: pointer; }

        .full-width { width: 100%; height: 50px; font-size: 1rem; }

        .auth-footer {
          margin-top: 32px;
          text-align: center;
          font-size: 0.9rem;
          color: var(--text-muted);
          border-top: 1px solid var(--glass-border);
          padding-top: 24px;
        }

        .switch-link {
          color: var(--secondary-life);
          font-weight: 700;
          margin-left: 8px;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
}
