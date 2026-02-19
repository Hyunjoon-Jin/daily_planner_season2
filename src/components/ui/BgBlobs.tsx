'use client';

import React from 'react';

export const BgBlobs = () => (
    <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <style jsx>{`
      .bg-blobs {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        pointer-events: none;
        overflow: hidden;
      }

      .blob {
        position: absolute;
        width: 60vw;
        height: 60vw;
        border-radius: 50%;
        filter: blur(100px);
        opacity: 0.12;
        animation: float 25s infinite alternate ease-in-out;
      }

      .blob-1 { 
        background: #6366F1; 
        top: -10%; 
        left: -10%; 
        animation-duration: 25s;
      }
      
      .blob-2 { 
        background: #10B981; 
        bottom: -10%; 
        right: -10%; 
        animation-duration: 30s;
        animation-delay: -5s;
      }
      
      .blob-3 { 
        background: #F59E0B; 
        top: 30%; 
        left: 40%; 
        animation-duration: 35s;
        animation-delay: -10s;
      }

      @keyframes float {
        0% { transform: translate(0, 0) scale(1) rotate(0deg); }
        33% { transform: translate(100px, 50px) scale(1.1) rotate(10deg); }
        66% { transform: translate(-50px, 100px) scale(0.9) rotate(-10deg); }
        100% { transform: translate(0, 0) scale(1) rotate(0deg); }
      }
    `}</style>
    </div>
);
