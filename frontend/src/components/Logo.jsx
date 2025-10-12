import React from 'react'

import logoVideo from '../assets/logo_video.mp4'

function Logo() {
  return (
    <div style={{ display: 'flex', lineHeight: 0, backgroundColor: '#0f101d', width: '34vw' }}>
      <video
        src={logoVideo}
        autoPlay
        loop
        muted
        playsInline
        style={{ display: 'block', width: '34vw', height: '40vw', maxWidth: '50vw', maxHeight: '50vh', objectFit: 'cover', backgroundColor: 'transparent' }}
        aria-label="ACES animated logo"
      />
    </div>
  )
}

export default Logo


