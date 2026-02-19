'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  Briefcase,
  Heart,
  Zap,
  MousePointer2,
  Sparkles,
  ShieldCheck,
  Globe,
  Plus,
  CheckCircle2
} from 'lucide-react';
import { BgBlobs } from '@/components/ui/BgBlobs';

// --- Sub-components for visual flair ---

const FeatureBadge = ({ text }: { text: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="feature-badge"
  >
    <Sparkles size={14} />
    <span>{text}</span>
  </motion.div>
);

export default function LandingPage() {
  const [demoBlocks, setDemoBlocks] = useState([
    { id: 1, title: '아침 명상 & 요가', time: '07:30 - 08:30', type: 'life' },
    { id: 2, title: '주간 전략 회의', time: '10:00 - 11:30', type: 'work' },
    { id: 3, title: 'AI 경제 리포트 분석', time: '13:00 - 14:00', type: 'work' },
  ]);

  const [activeTab, setActiveTab] = useState('work');

  return (
    <div className="landing-container">
      <BgBlobs />

      {/* Navigation */}
      <nav className="landing-nav glass-card">
        <div className="nav-logo">
          <div className="logo-icon">LP</div>
          <span>SEASON 2</span>
        </div>
        <div className="nav-menu">
          <Link href="#features">특징</Link>
          <Link href="#demo">데모체험</Link>
          <div className="v-line" />
          <Link href="/login" className="login-link">로그인</Link>
          <Link href="/register" className="btn-cta-nav">시작하기</Link>
        </div>
      </nav>

      <main className="landing-main">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-text-container">
            <FeatureBadge text="Next-Gen AI Life Controller" />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero-title"
            >
              시간을 다스리는<br />
              <span className="gradient-text">지능형 콕핏</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="hero-description"
            >
              단순한 플래너를 넘어선 인공지능 기반의 삶의 제어 센터.<br />
              업무, 건강, 자산, 지식을 하나의 타임블록 엔진으로 동기화하세요.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="hero-actions"
            >
              <Link href="/register" className="btn-hero-primary">
                무료로 시작하기 <ArrowRight size={20} />
              </Link>
              <button className="btn-hero-secondary">
                시스템 가이드
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="hero-stats"
            >
              <div className="stat-item"><CheckCircle2 size={16} /> <span>실시간 동기화</span></div>
              <div className="stat-item"><ShieldCheck size={16} /> <span>철저한 보안</span></div>
              <div className="stat-item"><Globe size={16} /> <span>글로벌 접근</span></div>
            </motion.div>
          </div>

          {/* Interactive Sandbox Card */}
          <div className="hero-visual">
            <motion.div
              initial={{ opacity: 0, rotateY: -10, rotateX: 5 }}
              animate={{ opacity: 1, rotateY: 0, rotateX: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="demo-sandbox-premium glass-card"
              id="demo"
            >
              <div className="sandbox-header">
                <div className="s-header-left">
                  <div className="dot-group">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                  </div>
                  <h3>타임블록 시뮬레이터</h3>
                </div>
                <div className="s-status">AI ACTIVE</div>
              </div>

              <div className="sandbox-content">
                <div className="sandbox-sidebar">
                  {['work', 'life', 'asset'].map(t => (
                    <button
                      key={t}
                      className={`s-tab ${activeTab === t ? 'active' : ''}`}
                      onClick={() => setActiveTab(t)}
                    >
                      {t === 'work' && <Briefcase size={14} />}
                      {t === 'life' && <Heart size={14} />}
                      {t === 'asset' && <Zap size={14} />}
                    </button>
                  ))}
                  <div className="s-add"><Plus size={16} /></div>
                </div>

                <div className="sandbox-main">
                  <div className="sandbox-hint">
                    <MousePointer2 size={14} /> 블록을 드래그하여 순서를 바꿔보세요
                  </div>
                  <Reorder.Group axis="y" values={demoBlocks} onReorder={setDemoBlocks} className="block-list">
                    {demoBlocks.map((item) => (
                      <Reorder.Item key={item.id} value={item} className={`block-card ${item.type}`}>
                        <div className="b-info">
                          <span className="b-name">{item.title}</span>
                          <span className="b-time">{item.time}</span>
                        </div>
                        <div className="b-tag">AI Optimized</div>
                      </Reorder.Item>
                    ))}
                  </Reorder.Group>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="features-section" id="features">
          <div className="section-head">
            <h2>완벽하게 제어되는 삶</h2>
            <p>프로페셔널과 퍼스널, 그 사이의 경계를 지능적으로 연결합니다.</p>
          </div>

          <div className="feature-grid">
            {[
              {
                icon: <Briefcase />,
                title: "Professional Suite",
                desc: "프로젝트 칸반, 정밀 업무 분석, 지능형 우선순위 제안 시스템.",
                color: "indigo"
              },
              {
                icon: <Heart />,
                title: "Active Life Care",
                desc: "건강 지표 실시간 추적 및 AI 기반 맞춤형 운동/식단 가이드.",
                color: "emerald"
              },
              {
                icon: <Zap />,
                title: "Global Hub Sync",
                desc: "모든 일정과 지식 아카이브가 타임블록 엔진과 하나로 통합됩니다.",
                color: "amber"
              }
            ].map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="feature-card-premium glass-card"
              >
                <div className={`f-icon-box ${f.color}`}>
                  {f.icon}
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <div className="f-glow" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Action Banner */}
        <section className="cta-banner">
          <div className="cta-content glass-card">
            <h2>지금 당신의 인생을 시즌 2로 업그레이드하세요.</h2>
            <p>복잡한 연결에서 벗어나, 본질에 집중하는 새로운 방식을 경험하세요.</p>
            <Link href="/register" className="btn-hero-primary">시작하기 (Free)</Link>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <p>© 2026 LIFE_PLANNER Season 2. Powered by Advanced Agentic AI.</p>
      </footer>

      <style jsx>{`
        .landing-container {
          background: #06080B;
          color: white;
          min-height: 100vh;
          font-family: var(--font-main);
          position: relative;
          overflow-x: hidden;
        }

        /* Nav */
        .landing-nav {
          position: fixed;
          top: 24px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 1100px;
          height: 64px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 24px;
          z-index: 1000;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-header);
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .logo-icon {
          width: 32px;
          height: 32px;
          background: var(--primary-work);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          font-size: 0.8rem;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .nav-menu a {
          font-size: 0.9rem;
          color: var(--text-muted);
          transition: color 0.2s;
        }

        .nav-menu a:hover { color: white; }

        .v-line { width: 1px; height: 16px; background: var(--glass-border); }

        .btn-cta-nav {
          background: white;
          color: black !important;
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: 600;
          transition: transform 0.2s;
        }

        .btn-cta-nav:hover { transform: scale(1.05); }

        /* Main Sections */
        .landing-main {
          position: relative;
          z-index: 1;
        }

        .hero-section {
          padding: 160px 40px 100px;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .feature-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(99, 102, 241, 0.1);
          color: var(--primary-work);
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid rgba(99, 102, 241, 0.2);
          width: fit-content;
          margin-bottom: 32px;
        }

        .hero-title {
          font-size: 4.5rem;
          line-height: 1.1;
          margin-bottom: 24px;
          font-family: var(--font-header);
          letter-spacing: -1.5px;
        }

        .gradient-text {
          background: linear-gradient(90deg, #6366f1, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: 1.25rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 48px;
          max-width: 600px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          margin-bottom: 60px;
        }

        .btn-hero-primary {
          background: var(--primary-work);
          color: white;
          padding: 18px 36px;
          border-radius: 14px;
          font-size: 1.1rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 20px 40px -10px rgba(99, 102, 241, 0.5);
          transition: all 0.2s;
        }

        .btn-hero-primary:hover {
          transform: translateY(-4px);
          box-shadow: 0 25px 50px -12px rgba(99, 102, 241, 0.6);
        }

        .btn-hero-secondary {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          color: white;
          padding: 18px 36px;
          border-radius: 14px;
          font-size: 1.1rem;
          font-weight: 600;
          transition: all 0.2s;
        }

        .btn-hero-secondary:hover { background: rgba(255, 255, 255, 0.1); }

        .hero-stats {
          display: flex;
          gap: 32px;
          color: var(--text-dim);
          font-size: 0.9rem;
        }

        .stat-item { display: flex; align-items: center; gap: 8px; }

        /* Sandbox Premium */
        .demo-sandbox-premium {
          padding: 32px;
          height: 480px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 40px 100px -20px rgba(0,0,0,0.5);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .sandbox-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }

        .s-header-left { display: flex; align-items: center; gap: 16px; }
        .dot-group { display: flex; gap: 6px; }
        .dot { width: 10px; height: 10px; border-radius: 50%; background: var(--glass-border); }
        .s-header-left h3 { font-size: 1rem; color: var(--text-muted); }
        .s-status { font-size: 0.7rem; font-weight: 700; color: var(--secondary-life); background: rgba(16, 185, 129, 0.1); padding: 4px 10px; border-radius: 6px; }

        .sandbox-content {
          flex: 1;
          display: flex;
          gap: 32px;
        }

        .sandbox-sidebar {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .s-tab {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          color: var(--text-dim);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }

        .s-tab.active { background: var(--primary-work); color: white; border-color: transparent; }
        .s-add { width: 44px; height: 44px; border-radius: 12px; border: 1px dashed var(--glass-border); color: var(--text-dim); display: flex; align-items: center; justify-content: center; margin-top: auto; }

        .sandbox-main {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .sandbox-hint {
          font-size: 0.75rem;
          color: var(--text-dim);
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .block-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .block-card {
          padding: 16px 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--glass-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: grab;
          transition: box-shadow 0.2s;
        }

        .block-card:active { cursor: grabbing; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }

        .b-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .b-name { display: block; font-weight: 700; font-size: 1rem; }
        .b-time { font-size: 0.8rem; color: var(--text-dim); }
        .b-tag { font-size: 0.65rem; font-weight: 700; color: var(--primary-work); letter-spacing: 1px; text-transform: uppercase; }

        /* Feature Grid Card */
        .features-section {
          padding: 120px 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-head { text-align: center; margin-bottom: 80px; }
        .section-head h2 { font-size: 3rem; margin-bottom: 16px; }
        .section-head p { color: var(--text-muted); font-size: 1.1rem; }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .feature-card-premium {
          padding: 48px 32px;
          position: relative;
          overflow: hidden;
        }

        .f-icon-box {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .f-icon-box.indigo { background: rgba(99, 102, 241, 0.1); color: #818cf8; }
        .f-icon-box.emerald { background: rgba(16, 185, 129, 0.1); color: #34d399; }
        .f-icon-box.amber { background: rgba(245, 158, 11, 0.1); color: #fbbf24; }

        .feature-card-premium h3 { font-size: 1.5rem; margin-bottom: 16px; }
        .feature-card-premium p { color: var(--text-muted); line-height: 1.7; font-size: 1rem; }

        .f-glow {
          position: absolute;
          bottom: -50px;
          right: -50px;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: currentColor;
          opacity: 0.1;
          filter: blur(40px);
        }

        /* Banner */
        .cta-banner { padding: 100px 40px; }
        .cta-content {
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          background: radial-gradient(circle at top right, rgba(99, 102, 241, 0.15), transparent);
        }

        .cta-content h2 { font-size: 2.5rem; max-width: 700px; line-height: 1.3; }
        .cta-content p { font-size: 1.1rem; color: var(--text-muted); }

        .landing-footer {
          padding: 60px 40px;
          text-align: center;
          color: var(--text-dim);
          font-size: 0.9rem;
          border-top: 1px solid var(--glass-border);
        }

        @media (max-width: 1024px) {
          .hero-section { grid-template-columns: 1fr; text-align: center; gap: 60px; }
          .hero-text-container { display: flex; flex-direction: column; align-items: center; }
          .hero-title { font-size: 3.5rem; }
          .hero-actions { justify-content: center; }
          .feature-grid { grid-template-columns: 1fr; }
          .hero-visual { width: 100%; max-width: 600px; margin: 0 auto; }
        }
      `}</style>
    </div>
  );
}
