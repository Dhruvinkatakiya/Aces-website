import React from 'react'
import arrowImage from '../assets/arrow.png'

function Gallery() {
  // Gallery items data
  const galleryItems = [
    {
      id: 1,
      title: "Innovators Assemble",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop",
      category: "insignia"
    },
    {
      id: 2,
      title: "Infinity Code Quest",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=400&fit=crop",
      category: "insignia"
    },
    {
      id: 3,
      title: "The Ultron Debate",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=400&fit=crop",
      category: "insignia"
    },
    {
      id: 4,
      title: "Marvel Tech Trivia",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop",
      category: "insignia"
    },
    {
      id: 5,
      title: "Escape the Multiverse",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop",
      category: "insignia"
    },
    {
      id: 6,
      title: "Open Mic Jamming",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=400&fit=crop",
      category: "insignia"
    }
  ]

  return (
    <section 
      id="gallery" 
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#0f101d',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '60px', position: 'relative', zIndex: 10 }}>
        <h2 className="heading-gradient" style={{
          fontSize: '3rem',
          fontWeight: 800,
          margin: '0 0 20px 0',
          letterSpacing: '1.5px'
        }}>
          Gallery
        </h2>
        
        {/* Purple underline */}
        <div style={{
          width: '200px',
          height: '2px',
          background: 'linear-gradient(90deg, var(--color-cyan) 0%, #0A1537 100%)',
          margin: '0 auto 30px auto',
          borderRadius: '1px'
        }} />
      </div>

      {/* Gallery Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Section Title */}
        <div style={{
          marginBottom: '40px',
          textAlign: 'left'
        }}>
          <h3 className="heading-gradient" style={{
            fontSize: '2.2rem',
            fontWeight: 800,
            margin: '0',
            letterSpacing: '1px'
          }}>
            Insignia
          </h3>
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '28px',
          justifyContent: 'center'
        }}>
          {galleryItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transformStyle: 'preserve-3d',
                animation: 'tiltFloat 4s ease-in-out infinite'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Image Placeholder */}
              <div style={{
                width: 'min(260px, 80vw)',
                height: 'min(260px, 80vw)',
                borderRadius: '15px',
                background: `linear-gradient(135deg, rgba(0, 229, 255, 0.10) 0%, rgba(10, 21, 55, 0.12) 100%), url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '2px solid rgba(0, 229, 255, 0.25)',
                boxShadow: '0 8px 32px rgba(0, 229, 255, 0.18)',
                position: 'relative',
                overflow: 'hidden',
                marginBottom: '20px'
              }}>
                {/* Hover overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.22) 0%, rgba(10, 21, 55, 0.22) 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseOver={(e) => {
                  e.target.style.opacity = '1'
                }}
                onMouseOut={(e) => {
                  e.target.style.opacity = '0'
                }}
                >
                  <div style={{
                    color: '#ffffff',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    View Details
                  </div>
                </div>
              </div>

              {/* Curved Arrow and Title aligned under card */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '40px 1fr',
                alignItems: 'center',
                gap: '12px',
                width: '260px'
              }}>
                <img
                  src={arrowImage}
                  alt="Arrow"
                  style={{
                    width: '36px',
                    height: '36px',
                    objectFit: 'contain',
                    transform: 'translateY(4px)'
                  }}
                />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{
                    color: 'var(--color-cyan)',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    lineHeight: 1.15
                  }}>{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Gallery Sections */}
        <div style={{ marginTop: '80px' }}>
          {/* Future sections can be added here */}
          <div style={{
            textAlign: 'center',
            padding: '40px 20px',
            background: 'linear-gradient(135deg, rgba(17, 23, 43, 0.5) 0%, rgba(10, 21, 55, 0.5) 100%)',
            borderRadius: '20px',
            border: '1px solid rgba(0, 229, 255, 0.18)',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#ffffff',
              margin: '0 0 15px 0'
            }}>
              More Coming Soon
            </h3>
            <p style={{
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.7)',
              margin: '0'
            }}>
              Stay tuned for more exciting events and memories to be added to our gallery!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
