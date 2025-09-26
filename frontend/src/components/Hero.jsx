import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Logo from './Logo';
import InnovativeCards from './InnovativeCards';


const Hero = () => {

  return (
    <div
      className="hero-container"
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '96px 16px 40px'
      }}
    >

      {/* Background floating cards 
      <div style={{ position: 'absolute', inset: 0 }}>
        <InnovativeCards count={10} />
      </div>*/}

      {/* Foreground section: logo left, code card right */}
      <div className="hero-inner" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '32px', padding: '0px 0px', width: 'min(1100px, 94vw)', flexWrap: 'wrap' }}>
        <div className="hero-logo-wrap" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', marginRight: '8px' }}>
          {/* Left blur */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '-12vw',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '18vw',
              maxWidth: '220px',
              height: '50vh',
              maxHeight: '420px',
              background: 'linear-gradient(90deg, rgba(15,16,29,0) 0%, rgba(15,16,29,0.6) 50%, rgba(15,16,29,0) 100%)',
              filter: 'blur(24px)',
              pointerEvents: 'none'
            }}
          />
          {/* Right blur */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              right: '-12vw',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '18vw',
              maxWidth: '220px',
              height: '50vh',
              maxHeight: '420px',
              background: 'linear-gradient(270deg, rgba(15,16,29,0) 0%, rgba(15,16,29,0.6) 50%, rgba(15,16,29,0) 100%)',
              filter: 'blur(24px)',
              pointerEvents: 'none'
            }}
          />
          <Logo />
        </div>
        <div
          style={{
            flex: '1 1 320px',
            maxWidth: '720px',
            textAlign: 'left',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(0,229,255,0.14)',
            borderRadius: '16px',
            padding: '16px 18px',
            boxShadow: '0 0 40px rgba(0,229,255,0.08)',
            backdropFilter: 'blur(4px)',
            color: '#9bdcff',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace'
          }}
        >
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
            <span style={{ width: 12, height: 12, borderRadius: 9999, background: '#ff5f56', display: 'inline-block' }} />
            <span style={{ width: 12, height: 12, borderRadius: 9999, background: '#ffbd2e', display: 'inline-block' }} />
            <span style={{ width: 12, height: 12, borderRadius: 9999, background: '#27c93f', display: 'inline-block' }} />
          </div>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap', lineHeight: 1.8, fontSize: 'clamp(13px, 2.8vw, 16px)' }}>
            {`Since its inception, the ACES club has been a vibrant hub for students passionate about computer science and engineering. The club actively organizes a variety of technical, competitive, and collaborative events.nologies, guest lectures, and collaborative projects.

Faculty Advisor: `}
            <span style={{color:'var(--color-cyan)'}}>[Faculty Advisor's Name]</span>
            {`\nStudent Coordinator: `}
            <span style={{color:'var(--color-cyan)'}}>[Student Coordinator's Name]</span>
          </pre>
        </div>
      </div>
      <style>{`
        /* Hero responsiveness */
        @media (max-width: 1024px) {
          .hero-inner { gap: 24px; }
        }
        @media (max-width: 768px) {
          .hero-inner { flex-direction: column; align-items: center; justify-content: center; }
          .hero-logo-wrap { margin-right: 0; }
        }
        @media (max-width: 480px) {
          .hero-container { padding: 88px 12px 32px; }
        }
      `}</style>
    </div>
  );
};

export default Hero;
