import React from 'react';
import logoVideo from '../assets/logo_video.mp4';

const Loading = ({ onComplete, loadingReason = 'Loading...' }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: '#11101e',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <div
          style={{
            color: '#ffffff',
            fontSize: '18px',
            letterSpacing: '0.5px',
            opacity: 0.9,
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
        >
          Page loading
        </div>
        <div
          style={{
            width: '360px',
            maxWidth: '80vw',
            aspectRatio: '16 / 9',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          <video
            src={logoVideo}
            autoPlay
            muted
            loop
            playsInline
            data-ignore-loading-check
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;