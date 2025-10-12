import React from 'react'
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom'
import LazyImage from './LazyImage'
import arrowImage from '../assets/arrow.png'

function Gallery() {
  const navigate = useNavigate()
  
  // Main events data
  const mainEvents = [
    {
      id: 101,
      title: "Summer Internship Insights",
      image: "https://i.postimg.cc/pTXRrqS4/Summer-Internship-Insights.jpg",
    },
    {
      id: 102,
      title: "Founder's Playbook",
      image: "https://i.postimg.cc/FRsNzD6q/Founders-Playbook.jpg",
    },
  ]
  
  // Insignia sub-events data
  const insigniaEvents = [
    {
      id: 1,
      title: "Innovators Assemble",
      image: 'https://i.postimg.cc/d3gYWvVS/Innovators-Assemble.jpg',
=======
import arrowImage from '../assets/arrow.png'

function Gallery() {
  // Gallery items data
  const galleryItems = [
    {
      id: 1,
      title: "Innovators Assemble",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop",
>>>>>>> 6ce4b2a (first commit)
      category: "insignia"
    },
    {
      id: 2,
      title: "Infinity Code Quest",
<<<<<<< HEAD
      image: 'https://i.postimg.cc/BbR0hsv3/Infinity-Code-Quest.jpg',
=======
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=400&fit=crop",
>>>>>>> 6ce4b2a (first commit)
      category: "insignia"
    },
    {
      id: 3,
      title: "The Ultron Debate",
<<<<<<< HEAD
      image: 'https://i.postimg.cc/SQPkQLfR/The-Ultron-Debate.jpg',
=======
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=400&fit=crop",
>>>>>>> 6ce4b2a (first commit)
      category: "insignia"
    },
    {
      id: 4,
      title: "Marvel Tech Trivia",
<<<<<<< HEAD
      image: 'https://i.postimg.cc/pr3H0xdH/Marvel-Tech-Trivia.jpg',
=======
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop",
>>>>>>> 6ce4b2a (first commit)
      category: "insignia"
    },
    {
      id: 5,
      title: "Escape the Multiverse",
<<<<<<< HEAD
      image: 'https://i.postimg.cc/wMnpWHjV/Escape-The-Multiverse.jpg',
=======
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop",
>>>>>>> 6ce4b2a (first commit)
      category: "insignia"
    },
    {
      id: 6,
      title: "Open Mic Jamming",
<<<<<<< HEAD
      image: 'https://i.postimg.cc/Y2PM2NzS/Open-Mic-Jamming.jpg',
=======
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=400&fit=crop",
>>>>>>> 6ce4b2a (first commit)
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
<<<<<<< HEAD
        padding: '80px 0 40px',
=======
        padding: '80px 0',
>>>>>>> 6ce4b2a (first commit)
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Header Section */}
<<<<<<< HEAD
      <div style={{ textAlign: 'center', marginBottom: '40px', position: 'relative', zIndex: 10 }}>
        <h2 className="heading-gradient" style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
=======
      <div style={{ textAlign: 'center', marginBottom: '60px', position: 'relative', zIndex: 10 }}>
        <h2 className="heading-gradient" style={{
          fontSize: '3rem',
>>>>>>> 6ce4b2a (first commit)
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
<<<<<<< HEAD
        padding: '0 16px',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Main Events Section */}
=======
        padding: '0 20px',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Section Title */}
>>>>>>> 6ce4b2a (first commit)
        <div style={{
          marginBottom: '40px',
          textAlign: 'left'
        }}>
          <h3 className="heading-gradient" style={{
<<<<<<< HEAD
            fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
            fontWeight: 800,
            margin: '0',
            letterSpacing: '1px'
          }}>
            Events
          </h3>
        </div>

        {/* Main Events Gallery Grid */}
        <div className="gallery-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '40px',
          justifyContent: 'center',
          padding: '0 20px'
        }}>
          {mainEvents.map((item) => (
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
                animation: 'tiltFloat 6s ease-in-out infinite'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) rotate(2deg)'
                e.currentTarget.style.animation = 'none'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) rotate(0)'
                e.currentTarget.style.animation = 'tiltFloat 6s ease-in-out infinite'
              }}
              onClick={() => {
                // Use the correct slug format that matches galleryEvents.js
                const slug = item.category ? 
                  `${item.category}-${item.title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')}` : 
                  `${item.title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')}`
                navigate(`/gallery/${slug}`)
              }}
            >
              {/* Image Container */}
              <div style={{
                width: 'min(300px, 90vw)',
                height: 'auto',
                borderRadius: '15px',
                border: '2px solid rgba(0, 229, 255, 0.25)',
                boxShadow: '0 8px 32px rgba(0, 229, 255, 0.18)',
                position: 'relative',
                overflow: 'hidden',
                marginBottom: '20px'
              }}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    display: 'block'
                  }} 
                />
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
                    View Gallery
                  </div>
                </div>
                
                
              </div>

              {/* Curved Arrow and Title aligned under card */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '32px 1fr',
                alignItems: 'center',
                gap: '10px',
                width: 'min(260px, 90vw)'
              }}>
                <img
                  src={arrowImage}
                  alt="Arrow"
                  style={{
                    width: '28px',
                    height: '28px',
                    objectFit: 'contain',
                    transform: 'translateY(4px)'
                  }}
                />
                <span style={{
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  lineHeight: '1.2'
                }}>{item.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Insignia Events Section */}
        <div style={{
          marginTop: '80px',
          marginBottom: '40px',
          textAlign: 'left'
        }}>
          <h3 className="heading-gradient" style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
=======
            fontSize: '2.2rem',
>>>>>>> 6ce4b2a (first commit)
            fontWeight: 800,
            margin: '0',
            letterSpacing: '1px'
          }}>
            Insignia
          </h3>
<<<<<<< HEAD
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginTop: '10px' }}>
            Our flagship event with 6 exciting sub-events
          </p>
        </div>

        {/* Insignia Events Gallery Grid */}
        <div className="gallery-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '40px',
          justifyContent: 'center',
          padding: '0 20px'
        }}>
          {insigniaEvents.map((item) => (
=======
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '28px',
          justifyContent: 'center'
        }}>
          {galleryItems.map((item) => (
>>>>>>> 6ce4b2a (first commit)
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
<<<<<<< HEAD
                animation: 'tiltFloat 6s ease-in-out infinite'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) rotate(2deg)'
                e.currentTarget.style.animation = 'none'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) rotate(0)'
                e.currentTarget.style.animation = 'tiltFloat 6s ease-in-out infinite'
              }}
              onClick={() => {
                // Use the correct slug format that matches galleryEvents.js
                const slug = item.category ? 
                  `${item.category}-${item.title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')}` : 
                  `${item.title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')}`
                navigate(`/gallery/${slug}`)
              }}
            >
              {/* Image Container */}
              <div style={{
                width: 'min(300px, 90vw)',
                height: 'auto',
                borderRadius: '15px',
=======
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
>>>>>>> 6ce4b2a (first commit)
                border: '2px solid rgba(0, 229, 255, 0.25)',
                boxShadow: '0 8px 32px rgba(0, 229, 255, 0.18)',
                position: 'relative',
                overflow: 'hidden',
                marginBottom: '20px'
              }}>
<<<<<<< HEAD
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    display: 'block'
                  }} 
                />
=======
>>>>>>> 6ce4b2a (first commit)
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
<<<<<<< HEAD
                    View Gallery
                  </div>
                </div>
                
              
=======
                    View Details
                  </div>
                </div>
>>>>>>> 6ce4b2a (first commit)
              </div>

              {/* Curved Arrow and Title aligned under card */}
              <div style={{
                display: 'grid',
<<<<<<< HEAD
                gridTemplateColumns: '32px 1fr',
                alignItems: 'center',
                gap: '10px',
                width: 'min(260px, 90vw)'
=======
                gridTemplateColumns: '40px 1fr',
                alignItems: 'center',
                gap: '12px',
                width: '260px'
>>>>>>> 6ce4b2a (first commit)
              }}>
                <img
                  src={arrowImage}
                  alt="Arrow"
                  style={{
<<<<<<< HEAD
                    width: '28px',
                    height: '28px',
=======
                    width: '36px',
                    height: '36px',
>>>>>>> 6ce4b2a (first commit)
                    objectFit: 'contain',
                    transform: 'translateY(4px)'
                  }}
                />
<<<<<<< HEAD
                <span style={{
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  lineHeight: '1.2'
                }}>{item.title}</span>
=======
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{
                    color: 'var(--color-cyan)',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    lineHeight: 1.15
                  }}>{item.title}</span>
                </div>
>>>>>>> 6ce4b2a (first commit)
              </div>
            </div>
          ))}
        </div>

<<<<<<< HEAD
        {/* More Coming Soon Section */}
        <div style={{ marginTop: '80px' }}>
=======
        {/* Additional Gallery Sections */}
        <div style={{ marginTop: '80px' }}>
          {/* Future sections can be added here */}
>>>>>>> 6ce4b2a (first commit)
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
<<<<<<< HEAD
      <style>{`
        .gallery-grid {
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }
        @media (min-width: 480px) {
          .gallery-grid { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
        }
        @media (min-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }
        }
        @keyframes tiltFloat {
          0%, 100% { transform: translateY(0) rotate(0); }
          25% { transform: translateY(-5px) rotate(1deg); }
          75% { transform: translateY(5px) rotate(-1deg); }
        }
      `}</style>
=======
>>>>>>> 6ce4b2a (first commit)
    </section>
  )
}

<<<<<<< HEAD
export default Gallery
=======
export default Gallery
>>>>>>> 6ce4b2a (first commit)
