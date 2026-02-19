'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn, ChevronLeft, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { BgBlobs } from '@/components/ui/BgBlobs';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    console.log('Starting login for:', email);

    if (!supabase) {
      setError('Supabase 클라이언트가 초기화되지 않았습니다. 환경 변수를 확인해주세요.');
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      console.log('Login response:', { data, error });

      if (error) {
        setError(error.message);
      } else {
        router.push('/dashboard');
      }
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.message || '로그인 중 예상치 못한 오류가 발생했습니다.');
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
          <h2>환영합니다!</h2>
          <p>LIFE_PLANNER Season 2에 접속하세요.</p>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form className="auth-form" onSubmit={handleLogin}>
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
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="auth-options">
            <label className="checkbox-label">
              <input type="checkbox" />
              <span>로그인 상태 유지</span>
            </label>
            <Link href="/recovery" className="find-link">비밀번호 찾기</Link>
          </div>

          <button type="submit" className="btn-primary-lg full-width" disabled={loading}>
            {loading ? <Loader2 className="animate-spin" size={20} /> : <>로그인 <LogIn size={20} /></>}
          </button>
        </form>

        <div className="auth-footer">
          <span>계정이 없으신가요?</span>
          <Link href="/register" className="switch-link">회원가입</Link>
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

        .error-message {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          color: #EF4444;
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 24px;
          font-size: 0.85rem;
          text-align: center;
          z-index: 10;
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
          transition: border-color 0.2s;
        }

        .input-wrapper input:focus { border-color: var(--primary-work); }

        .auth-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-muted);
          cursor: pointer;
        }

        .find-link { color: var(--text-dim); }

        .full-width { width: 100%; margin-top: 8px; }

        .auth-footer {
          margin-top: 32px;
          text-align: center;
          font-size: 0.9rem;
          color: var(--text-muted);
          border-top: 1px solid var(--glass-border);
          padding-top: 24px;
        }

        .switch-link {
          color: var(--primary-work);
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
