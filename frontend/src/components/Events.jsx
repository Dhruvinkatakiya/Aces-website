import React, { useState, useEffect } from 'react'

function Events() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [isVisible, setIsVisible] = useState(false)
  const [animatedCards, setAnimatedCards] = useState(new Set())

  useEffect(() => {
    setIsVisible(true)
    // Reset animated cards when filter changes
    setAnimatedCards(new Set())
  }, [activeFilter])

  // Sample events data
  const events = [
    {
      id: 1,
      title: "Summer Internship Insights",
      date: "March 15-17, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "ITNU Campus",
      description: "Join us for an exciting 48-hour coding competition where students showcase their programming skills and innovative ideas.", image: "",
      status: "completed"
    },
    {
      id: 2,
      title: "Startup Talk",
      date: "March 10, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Auditorium A",
      description: "Learn about the latest trends in Artificial Intelligence and Machine Learning from industry experts.",
      image: "",
      status: "completed"
    },
    {
      id: 3,
      title: "Insignia 2024",
      date: "February 20-25, 2024",
      time: "10:00 AM - 5:00 PM",
      location: "Computer Lab 1",
      description: "Intensive coding bootcamp covering web development, data structures, and algorithms.",
      image: "",
      status: "completed"
    },
    {
      id: 4,
      title: "ACES Annual Meet",
      date: "February 15, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Main Hall",
      description: "Annual gathering of ACES members with networking, food, and celebration of achievements.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
      status: "completed"
    },
    {
      id: 5,
      title: "Web Development Workshop",
      date: "April 5, 2024",
      time: "1:00 PM - 5:00 PM",
      location: "Lab 2",
      description: "Hands-on workshop covering modern web development technologies including React, Node.js, and databases.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      status: "upcoming"
    },
    {
      id: 6,
      title: "CTF Competition",
      date: "April 20, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Online",
      description: "Capture The Flag cybersecurity competition testing your hacking and security skills.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
      status: "upcoming"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'upcoming', name: 'Upcoming' },
    { id: 'completed', name: 'Completed' }
  ]

  const filteredEvents = events.filter(event => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'upcoming') return event.status === 'upcoming'
    if (activeFilter === 'completed') return event.status === 'completed'
    return event.category === activeFilter
  })

  return (
    <section
      id="events"
      style={{
        width: '100%',
        minHeight: '100vh',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '60px', position: 'relative', zIndex: 10 }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#ffffff',
          margin: '0 0 20px 0',
          letterSpacing: '2px'
        }}>
          Events
        </h2>

        {/* Gradient underline */}
        <div style={{
          width: '200px',
          height: '2px',
          background: 'linear-gradient(90deg, var(--color-cyan) 0%, #0A1537 100%)',
          margin: '0 auto 30px auto',
          borderRadius: '1px'
        }} />

        <p style={{
          fontSize: '1.1rem',
          color: 'rgba(255, 255, 255, 0.85)',
          margin: '0 auto',
          maxWidth: '600px',
          lineHeight: '1.6',
          textAlign: 'center',
          letterSpacing: '0.5px',
          transition: 'color 0.4s'
        }}>
          Discover exciting events, workshops, and competitions organized by ACES.
        </p>
      </div>

      {/* Filter Buttons */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '15px',
        marginBottom: '50px',
        position: 'relative',
        zIndex: 10
      }}>
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            style={{
              padding: '12px 24px',
              borderRadius: '25px',
              border: activeFilter === category.id ? '2px solid #00E5FF' : '2px solid rgba(0, 229, 255, 0.3)',
              background: activeFilter === category.id
                ? 'linear-gradient(135deg, rgba(0, 229, 255, 0.2) 0%, rgba(155, 89, 182, 0.2) 100%)'
                : 'rgba(0, 0, 0, 0.3)',
              color: activeFilter === category.id ? '#00E5FF' : 'rgba(255, 255, 255, 0.7)',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
            onMouseOver={(e) => {
              if (activeFilter !== category.id) {
                e.target.style.borderColor = '#00E5FF'
                e.target.style.color = '#00E5FF'
              }
            }}
            onMouseOut={(e) => {
              if (activeFilter !== category.id) {
                e.target.style.borderColor = 'rgba(0, 229, 255, 0.3)'
                e.target.style.color = 'rgba(255, 255, 255, 0.7)'
              }
            }}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '30px',
          justifyContent: 'center',
          alignItems: 'start'
        }}>
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className="event-card"
              style={{
                background: 'linear-gradient(135deg, rgba(17, 23, 43, 0.9) 0%, rgba(10, 21, 55, 0.95) 100%)',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(0, 229, 255, 0.3)',
                boxShadow: '0 10px 40px rgba(0, 229, 255, 0.15)',
                backdropFilter: 'blur(15px)',
                position: 'relative',
                cursor: 'pointer',
                opacity: 0,
                transform: 'translateY(30px) scale(0.95)',
                animation: `slideInUp 0.6s ease-out ${index * 0.1}s forwards`,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transformStyle: 'preserve-3d'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) rotateX(2deg) rotateY(-2deg) scale(1.02)'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 229, 255, 0.25)'
                e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.6)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) scale(1)'
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 229, 255, 0.15)'
                e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.3)'
              }}
            >
              {/* Shimmer Effect */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.1), transparent)',
                transition: 'left 0.6s ease',
                zIndex: 1,
                pointerEvents: 'none'
              }} className="shimmer-effect" />

              {/* Floating Particles */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '4px',
                height: '4px',
                background: 'var(--color-cyan)',
                borderRadius: '50%',
                opacity: 0.6,
                animation: 'floatParticle 3s ease-in-out infinite',
                zIndex: 2
              }} />
              <div style={{
                position: 'absolute',
                top: '40px',
                right: '40px',
                width: '3px',
                height: '3px',
                background: 'var(--color-cyan)',
                borderRadius: '50%',
                opacity: 0.4,
                animation: 'floatParticle 3s ease-in-out infinite 0.5s',
                zIndex: 2
              }} />
              <div style={{
                position: 'absolute',
                top: '60px',
                right: '60px',
                width: '2px',
                height: '2px',
                background: 'var(--color-cyan)',
                borderRadius: '50%',
                opacity: 0.3,
                animation: 'floatParticle 3s ease-in-out infinite 1s',
                zIndex: 2
              }} />
              {/* Event Image */}
              <div style={{
                width: '100%',
                height: '220px',
                background: `linear-gradient(45deg, rgba(0, 229, 255, 0.15) 0%, rgba(155, 89, 182, 0.15) 100%), url(${event.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Image Overlay Animation */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, rgba(0, 229, 255, 0.1) 0%, rgba(155, 89, 182, 0.1) 100%)',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  zIndex: 1
                }} className="image-overlay" />
                {/* Status Badge */}
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  background: event.status === 'upcoming'
                    ? 'linear-gradient(135deg, #00E5FF 0%, #0099CC 100%)'
                    : 'linear-gradient(135deg, var(--color-cyan) 0%, #0A1537 100%)',
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  zIndex: 3,
                  animation: event.status === 'upcoming' ? 'cyanGlowPulse 2s ease-in-out infinite' : 'none'
                }}>
                  {event.status}
                </div>


              </div>

              {/* Event Content */}
              <div style={{
                padding: '30px 25px 25px 25px',
                position: 'relative',
                zIndex: 2
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#ffffff',
                  margin: '0 0 18px 0',
                  lineHeight: '1.3',
                  background: 'linear-gradient(135deg, #ffffff 0%, var(--color-cyan) 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 20px rgba(0, 229, 255, 0.3)'
                }}>
                  {event.title}
                </h3>

                <div style={{
                  marginBottom: '20px',
                  display: 'grid',
                  gap: '8px'
                }}>
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255, 255, 255, 0.85)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 12px',
                    background: 'rgba(0, 229, 255, 0.05)',
                    borderRadius: '10px',
                    border: '1px solid rgba(0, 229, 255, 0.1)',
                    transition: 'all 0.3s ease'
                  }}>
                    <span style={{
                      color: '#00E5FF',
                      fontSize: '14px',
                      minWidth: '16px',
                      textAlign: 'center'
                    }}>📅</span>
                    <span style={{ fontWeight: '500' }}>{event.date}</span>
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255, 255, 255, 0.85)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 12px',
                    background: 'rgba(0, 229, 255, 0.05)',
                    borderRadius: '10px',
                    border: '1px solid rgba(0, 229, 255, 0.1)',
                    transition: 'all 0.3s ease'
                  }}>
                    <span style={{
                      color: '#00E5FF',
                      fontSize: '14px',
                      minWidth: '16px',
                      textAlign: 'center'
                    }}>🕒</span>
                    <span style={{ fontWeight: '500' }}>{event.time}</span>
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255, 255, 255, 0.85)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 12px',
                    background: 'rgba(0, 229, 255, 0.05)',
                    borderRadius: '10px',
                    border: '1px solid rgba(0, 229, 255, 0.1)',
                    transition: 'all 0.3s ease'
                  }}>
                    <span style={{
                      color: '#00E5FF',
                      fontSize: '14px',
                      minWidth: '16px',
                      textAlign: 'center'
                    }}>📍</span>
                    <span style={{ fontWeight: '500' }}>{event.location}</span>
                  </div>
                </div>

                <p style={{
                  fontSize: '0.95rem',
                  color: 'rgba(255, 255, 255, 0.75)',
                  lineHeight: '1.6',
                  margin: '0 0 25px 0',
                  textAlign: 'justify'
                }}>
                  {event.description}
                </p>

                <button style={{
                  width: '100%',
                  padding: '14px 20px',
                  borderRadius: '12px',
                  border: '2px solid #00E5FF',
                  background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.1) 0%, rgba(0, 229, 255, 0.05) 100%)',
                  color: '#00E5FF',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0, 229, 255, 0.2)'
                }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #00E5FF 0%, #0099CC 100%)'
                    e.target.style.color = '#0f101d'
                    e.target.style.transform = 'translateY(-2px)'
                    e.target.style.boxShadow = '0 8px 25px rgba(0, 229, 255, 0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, rgba(0, 229, 255, 0.1) 0%, rgba(0, 229, 255, 0.05) 100%)'
                    e.target.style.color = '#00E5FF'
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = '0 4px 15px rgba(0, 229, 255, 0.2)'
                  }}
                >
                  {event.status === 'upcoming' ? 'Register Now' : 'View Details'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: 'rgba(255, 255, 255, 0.6)'
          }}>
            <h3 style={{ fontSize: '1.5rem', margin: '0 0 10px 0' }}>No events found</h3>
            <p>Try selecting a different category or check back later for new events.</p>
          </div>
        )}
      </div>
    </section>
  )
}

<style>{`
  @keyframes creativePopIn {
    0% {
      opacity: 0;
      transform: scale(0.8) rotate(-8deg) translateY(40px);
      filter: blur(8px);
    }
    60% {
      opacity: 1;
      transform: scale(1.05) rotate(2deg) translateY(-8px);
      filter: blur(0);
    }
    80% {
      transform: scale(0.98) rotate(-1deg) translateY(2px);
    }
    100% {
      opacity: 1;
      transform: scale(1) rotate(0deg) translateY(0);
      filter: blur(0);
    }
  }
  .event-card {
    animation: creativePopIn 0.8s cubic-bezier(.5,1.8,.5,1) forwards;
    opacity: 0;
    transform: scale(0.95) translateY(30px);
    will-change: transform, opacity, filter;
    transition: box-shadow 0.3s, border-color 0.3s, transform 0.4s cubic-bezier(.5,1.8,.5,1);
  }
  .event-card:hover {
    transform: scale(1.04) rotate(-2deg) translateY(-10px);
    box-shadow: 0 24px 60px rgba(0,229,255,0.25), 0 2px 8px #00e5ff44;
    border-color: #00E5FF;
    filter: drop-shadow(0 0 12px #00e5ff88);
  }
`}</style>

export default Events
