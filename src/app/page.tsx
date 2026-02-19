'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight,
    Calendar,
    Briefcase,
    Heart,
    Zap,
    Layout,
    Layers,
    CheckCircle2,
    MousePointer2
} from 'lucide-react';

export default function LandingPage() {
    const [demoBlocks, setDemoBlocks] = useState([
        { id: 1, title: '아침 요가', time: '07:30 - 08:30', type: 'life', top: '15%' },
        { id: 2, title: '팀 브리핑', time: '10:00 - 11:30', type: 'work', top: '35%' },
    ]);

    return (
        <div className="landing-container">
            {/* Navigation */}
            <nav className="landing-nav glass-card">
                <div className="nav-logo">LP SEASON 2</div>
                <div className="nav-links">
                    <Link href="/login" className="login-link">로그인</Link>
                    <Link href="/register" className="btn-primary-small">무료로 시작하기</Link>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="hero-section">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                >
                    <div className="badge">AI-Powered Life Controller</div>
                    <h1 className="hero-title">
                        업무와 일상을 하나로,<br />
                        당신의 삶을 <span className="gradient-text">동기화</span>하세요.
                    </h1>
                    <p className="hero-description">
                        15분 단위의 정밀한 타임블록 시스템과 지능형 AI 연동으로<br />
                        복잡한 일상을 심플한 데이터로 관리하세요.
                    </p>
                    <div className="hero-actions">
                        <Link href="/register" className="btn-primary-lg">지금 바로 시작하기 <ArrowRight size={20} /></Link>
                        <button className="btn-ghost">둘러보기</button>
                    </div>
                </motion.div>

                {/* Interactive Demo Sandbox */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="demo-sandbox glass-card"
                >
                    <div className="demo-header">
                        <div className="demo-title">
                            <Calendar size={18} />
                            <span>Interactive Demo (D&D 체험)</span>
                        </div>
                        <div className="demo-hint"><MousePointer2 size={14} /> 블록을 클릭해보세요</div>
                    </div>
                    <div className="demo-grid">
                        <div className="time-col">
                            {[8, 9, 10, 11, 12].map(h => <div key={h} className="h-label">{h}:00</div>)}
                        </div>
                        <div className="grid-area">
                            {[0, 1, 2, 3, 4].map(i => <div key={i} className="grid-line" />)}
                            <AnimatePresence>
                                {demoBlocks.map((block) => (
                                    <motion.div
                                        key={block.id}
                                        layoutId={`block-${block.id}`}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className={`demo-block ${block.type}`}
                                        style={{ top: block.top }}
                                    >
                                        <div className="b-title">{block.title}</div>
                                        <div className="b-time">{block.time}</div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </header>

            {/* Feature Section */}
            <section className="features-section">
                <div className="section-title-group">
                    <h2>모든 기록이 시간이 됩니다.</h2>
                    <p>서로 연계된 3가지 핵심 모듈로 스마트하게 관리하세요.</p>
                </div>

                <div className="feature-cards">
                    <div className="f-card glass-card">
                        <div className="f-icon purple"><Briefcase size={24} /></div>
                        <h3>Professional Suite</h3>
                        <p>프로젝트 관리, 하위 작업, 집중 타이머를 통해 업무 생산성을 극대화합니다.</p>
                    </div>
                    <div className="f-card glass-card">
                        <div className="f-icon green"><Heart size={24} /></div>
                        <h3>Life Care Module</h3>
                        <p>가계부, 건강, 목표 관리가 타임블록과 실시간으로 연동되어 기록됩니다.</p>
                    </div>
                    <div className="f-card glass-card">
                        <div className="f-icon orange"><Zap size={24} /></div>
                        <h3>AI Intelligence</h3>
                        <p>기사 요약, 감정 분석, 지능형 스케줄링이 당신의 삶을 보조합니다.</p>
                    </div>
                </div>
            </section>

            <style jsx>{`
        .landing-container {
          background-color: var(--bg-dark);
          color: white;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .landing-nav {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 1200px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 32px;
          z-index: 1000;
        }

        .nav-logo {
          font-weight: 700;
          font-size: 1.25rem;
          background: linear-gradient(90deg, var(--primary-work), var(--secondary-life));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .login-link {
          color: var(--text-muted);
          font-weight: 500;
        }

        .btn-primary-small {
          background: var(--primary-work);
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .hero-section {
          padding: 180px 5% 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          max-width: 1400px;
          margin: 0 auto;
          align-items: center;
        }

        .badge {
          display: inline-block;
          padding: 6px 12px;
          background: rgba(99, 102, 241, 0.1);
          color: var(--primary-work);
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 24px;
          border: 1px solid rgba(99, 102, 241, 0.2);
        }

        .hero-title {
          font-size: 3.5rem;
          line-height: 1.2;
          margin-bottom: 24px;
          font-family: var(--font-header);
        }

        .gradient-text {
          background: linear-gradient(90deg, #818cf8, #34d399);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: 1.15rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
        }

        .btn-primary-lg {
          background: var(--primary-work);
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.2s ease;
        }

        .btn-primary-lg:hover { transform: translateY(-3px); }

        .btn-ghost {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          padding: 16px 32px;
          border-radius: 12px;
          color: var(--text-muted);
        }

        /* Demo Sandbox */
        .demo-sandbox {
          padding: 24px;
          height: 400px;
          display: flex;
          flex-direction: column;
        }

        .demo-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .demo-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
        }

        .demo-hint {
          font-size: 0.75rem;
          color: var(--text-dim);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .demo-grid {
          flex: 1;
          display: flex;
          gap: 16px;
        }

        .time-col {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 10px 0;
        }

        .h-label {
          font-family: var(--font-header);
          font-size: 0.75rem;
          color: var(--text-dim);
        }

        .grid-area {
          flex: 1;
          position: relative;
          border-left: 1px solid var(--glass-border);
        }

        .grid-line {
          height: 20%;
          border-bottom: 1px dashed rgba(255, 255, 255, 0.05);
        }

        .demo-block {
          position: absolute;
          left: 10px;
          right: 0;
          padding: 12px;
          border-radius: 8px;
          border-left: 4px solid;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(4px);
        }

        .demo-block.life { border-left-color: var(--secondary-life); }
        .demo-block.work { border-left-color: var(--primary-work); }

        .b-title { font-weight: 600; font-size: 0.9rem; margin-bottom: 4px; }
        .b-time { font-size: 0.75rem; color: var(--text-muted); }

        /* Features */
        .features-section {
          padding: 100px 5%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title-group {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title-group h2 { font-size: 2.5rem; margin-bottom: 16px; }
        .section-title-group p { color: var(--text-muted); }

        .feature-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .f-card {
          padding: 40px 32px;
          transition: transform 0.3s ease;
        }

        .f-card:hover { transform: translateY(-10px); }

        .f-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .f-icon.purple { background: rgba(99, 102, 241, 0.1); color: var(--primary-work); }
        .f-icon.green { background: rgba(16, 185, 129, 0.1); color: var(--secondary-life); }
        .f-icon.orange { background: rgba(245, 158, 11, 0.1); color: var(--accent-alert); }

        .f-card h3 { font-size: 1.25rem; margin-bottom: 16px; }
        .f-card p { color: var(--text-muted); line-height: 1.6; }

        @media (max-width: 1024px) {
          .hero-section {
            grid-template-columns: 1fr;
            text-align: center;
            padding-top: 120px;
          }
          .hero-actions { justify-content: center; }
          .demo-sandbox { display: none; }
          .feature-cards { grid-template-columns: 1fr; }
        }
      `}</style>
        </div>
    );
}
