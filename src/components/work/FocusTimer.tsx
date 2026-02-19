'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, Zap, Coffee, CheckCircle2 } from 'lucide-react';

export default function FocusTimer() {
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [mode, setMode] = useState<'focus' | 'break'>('focus');
    const [sessionsCompleted, setSessionsCompleted] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            handleTimerComplete();
        }

        return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    const handleTimerComplete = () => {
        setIsActive(false);
        if (mode === 'focus') {
            setSessionsCompleted((prev) => prev + 1);
            setMode('break');
            setTimeLeft(5 * 60);
        } else {
            setMode('focus');
            setTimeLeft(25 * 60);
        }
        // TODO: Audio notification & Notification API
    };

    const toggleTimer = () => setIsActive(!isActive);

    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(mode === 'focus' ? 25 * 60 : 5 * 60);
    };

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const progress = ((mode === 'focus' ? 25 * 60 : 5 * 60) - timeLeft) / (mode === 'focus' ? 25 * 60 : 5 * 60);

    return (
        <div className="focus-timer-card glass-card">
            <div className="timer-header">
                <div className={`mode-badge ${mode}`}>
                    {mode === 'focus' ? <Zap size={14} /> : <Coffee size={14} />}
                    <span>{mode === 'focus' ? 'Focus Mode' : 'Break Time'}</span>
                </div>
                <div className="session-stats">
                    <CheckCircle2 size={14} />
                    <span>{sessionsCompleted} sessions today</span>
                </div>
            </div>

            <div className="timer-display">
                <svg className="timer-svg" viewBox="0 0 100 100">
                    <circle className="timer-track" cx="50" cy="50" r="45" />
                    <motion.circle
                        className={`timer-progress ${mode}`}
                        cx="50" cy="50" r="45"
                        strokeDasharray="283"
                        strokeDashoffset={283 * (1 - progress)}
                    />
                </svg>
                <div className="time-text">{formatTime(timeLeft)}</div>
            </div>

            <div className="timer-controls">
                <button className="icon-btn-large reset" onClick={resetTimer}>
                    <RotateCcw size={20} />
                </button>
                <button className={`icon-btn-primary main ${isActive ? 'active' : ''}`} onClick={toggleTimer}>
                    {isActive ? <Pause size={28} /> : <Play size={28} />}
                </button>
                <button className="icon-btn-large skip" onClick={handleTimerComplete}>
                    <Play size={20} />
                </button>
            </div>

            <div className="task-link">
                <span className="label">현재 진행 중인 작업:</span>
                <span className="task-name">LIFE_PLANNER Season 2 UI 개발</span>
            </div>

            <style jsx>{`
        .focus-timer-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          text-align: center;
        }

        .timer-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .mode-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 700;
        }

        .mode-badge.focus { background: rgba(99, 102, 241, 0.1); color: var(--primary-work); }
        .mode-badge.break { background: rgba(16, 185, 129, 0.1); color: var(--secondary-life); }

        .session-stats {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: var(--text-dim);
        }

        .timer-display {
          position: relative;
          width: 220px;
          height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .timer-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
        }

        .timer-track {
          fill: none;
          stroke: rgba(255, 255, 255, 0.05);
          stroke-width: 4;
        }

        .timer-progress {
          fill: none;
          stroke-width: 4;
          stroke-linecap: round;
          transition: stroke-dashoffset 0.3s;
        }

        .timer-progress.focus { stroke: var(--primary-work); }
        .timer-progress.break { stroke: var(--secondary-life); }

        .time-text {
          font-size: 3.5rem;
          font-weight: 700;
          font-family: var(--font-display);
          color: white;
        }

        .timer-controls {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .icon-btn-large {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid var(--glass-border);
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .icon-btn-primary.main {
          width: 72px;
          height: 72px;
          background: var(--primary-work);
          border: none;
          border-radius: 50%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
        }

        .icon-btn-primary.main.active {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid var(--glass-border);
          box-shadow: none;
        }

        .task-link {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .task-link .label { font-size: 0.75rem; color: var(--text-dim); }
        .task-link .task-name { font-weight: 600; font-size: 0.9rem; color: var(--text-muted); }
      `}</style>
        </div>
    );
}
