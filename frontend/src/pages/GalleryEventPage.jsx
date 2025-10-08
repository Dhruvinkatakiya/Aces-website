import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingCode from '../components/FloatingCode'
import { findGalleryEvent } from '../data/galleryEvents'

function GalleryEventPage() {
  const { slug } = useParams()
  const event = findGalleryEvent(slug)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <FloatingCode />
      <Navbar />
      <main style={{ marginTop: '24px', flex: '1 0 auto' }}>
        <section style={{ padding: '48px 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
            <div style={{ margin: '85px 0 24px', fontWeight: 600 }}>
              <Link to="/gallery" style={{ color: 'var(--color-cyan)' }}>{'← Back to Gallery'}</Link>
            </div>

            {!event ? (
              <div style={{ color: 'white', textAlign: 'center', marginTop: 24}}>Event not found.</div>
            ) : (
              <>
                <h1 className="heading-gradient" style={{ margin: 0, fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800 }}>{event.title}</h1>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: 8 }}>Photos</p>

                {event.urls.length === 0 ? (
                  <div style={{ color: 'rgba(255,255,255,0.7)', marginTop: 24 }}>No photos added yet. Provide URLs in `src/data/galleryEvents.js`.</div>
                ) : (
                  <div className="gallery-grid" style={{
                    display: 'grid', gap: 16, marginTop: 24,
                  }}>
                    {event.urls.map((url, idx) => (
                      <div key={idx} style={{
                        position: 'relative', borderRadius: 12, overflow: 'hidden',
                        border: '1px solid rgba(0,229,255,0.14)',
                        background: 'rgba(255,255,255,0.02)'
                      }}>
                        <img src={url} alt={`Photo ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .gallery-grid { grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); }
        @media (min-width: 768px) { .gallery-grid { grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); } }
      `}</style>
    </div>
  )
}

export default GalleryEventPage


