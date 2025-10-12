import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function EventDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(true)

  // Sample events data (same as in Events.jsx)
  const events = [
    {
      id: 1,
      title: "Summer Internship Insights",
      date: "21 August, 2024",
      time: "2:35 AM - 4:30 PM",
      location: "C-Auditorium",
      description: "Join us for an exciting 48-hour coding competition where students showcase their programming skills and innovative ideas.",
      image: "",
      status: "completed",
      fullDescription: "This comprehensive workshop will provide students with valuable insights into summer internship opportunities across various tech companies. Industry experts will share their experiences, discuss application strategies, and provide tips for securing internships. The session will cover resume building, interview preparation, and networking strategies that can help students land their dream internships.",
      speakers: ["Dr. Sarah Johnson", "Mr. Alex Chen", "Ms. Priya Sharma"],
      agenda: [
        "10:00 AM - Welcome & Introduction",
        "10:30 AM - Industry Overview",
        "11:15 AM - Application Strategies",
        "12:00 PM - Networking Session",
        "1:00 PM - Lunch Break",
        "2:00 PM - Interview Preparation",
        "3:00 PM - Q&A Session"
      ],
      requirements: ["Laptop", "Resume", "Notebook"],
      contact: "events@aces.com"
    },
    {
      id: 2,
      title: "Founder's Playbook",
      date: "March 10, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "ITNU Campus",
      description: "Industry insigts from experts, network with professionals, boost career growth and knowledge.",
      image: "",
      status: "completed",
      fullDescription: "An exclusive session with successful entrepreneurs who will share their journey from idea to execution. Learn about the challenges they faced, the strategies that worked, and the lessons learned along the way. This interactive session will provide valuable insights for aspiring entrepreneurs and business enthusiasts.",
      speakers: ["John Smith (CEO, TechStart)", "Maria Garcia (Founder, InnovateLab)", "David Lee (Serial Entrepreneur)"],
      agenda: [
        "2:00 PM - Opening Remarks",
        "2:15 PM - Founder Stories",
        "3:00 PM - Panel Discussion",
        "3:30 PM - Networking Break",
        "3:45 PM - Q&A Session",
        "4:00 PM - Closing"
      ],
      requirements: ["Business Card", "Questions Prepared"],
      contact: "founders@aces.com"
    },
    {
      id: 3,
      title: "Insignia 2024",
      date: "February 15-16, 2024",
      time: "10:00 AM - 5:00 PM",
      location: "ITNU Campus",
      description: "Intensive coding bootcamp covering web development, data structures, and algorithms.",
      image: "",
      status: "completed",
      fullDescription: "A comprehensive 2-day coding bootcamp designed to enhance your programming skills. The event covers modern web development technologies, advanced data structures, and algorithmic problem-solving techniques. Perfect for students looking to improve their coding abilities and prepare for technical interviews.",
      speakers: ["Prof. Michael Brown", "Dr. Lisa Wang", "Senior Developer Team"],
      agenda: [
        "Day 1:",
        "10:00 AM - Web Development Fundamentals",
        "12:00 PM - Lunch Break",
        "1:00 PM - Data Structures Workshop",
        "3:00 PM - Algorithm Practice",
        "5:00 PM - Day 1 Wrap-up",
        "",
        "Day 2:",
        "10:00 AM - Advanced Topics",
        "12:00 PM - Lunch Break",
        "1:00 PM - Hands-on Projects",
        "3:00 PM - Code Review Session",
        "5:00 PM - Certificate Distribution"
      ],
      requirements: ["Laptop with IDE", "Basic Programming Knowledge", "GitHub Account"],
      contact: "insignia@aces.com"
    },
    {
      id: 4,
      title: "ACES Annual Meet",
      date: "February 15, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Main Hall",
      description: "Annual gathering of ACES members with networking, food, and celebration of achievements.",
      image: "",
      status: "completed",
      fullDescription: "Join us for our annual celebration where we recognize outstanding achievements, welcome new members, and strengthen our community bonds. This special evening includes award ceremonies, networking opportunities, delicious food, and entertainment. A perfect opportunity to connect with fellow ACES members and celebrate our collective success.",
      speakers: ["ACES President", "Faculty Advisors", "Guest of Honor"],
      agenda: [
        "6:00 PM - Welcome Reception",
        "6:30 PM - Opening Ceremony",
        "7:00 PM - Award Presentations",
        "7:30 PM - Dinner & Networking",
        "8:30 PM - Entertainment Program",
        "9:00 PM - Closing Remarks"
      ],
      requirements: ["ACES Membership", "Formal Attire"],
      contact: "annual@aces.com"
    }
  ]

  useEffect(() => {
    const foundEvent = events.find(e => e.id === parseInt(id))
    if (foundEvent) {
      setEvent(foundEvent)
    }
    setLoading(false)
  }, [id])

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f101d 0%, #1a1b2e 50%, #16213e 100%)'
      }}>
        <div style={{
          color: '#00E5FF',
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}>
          Loading...
        </div>
      </div>
    )
  }

  if (!event) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f101d 0%, #1a1b2e 50%, #16213e 100%)',
        color: '#ffffff',
        textAlign: 'center',
        padding: '20px'
      }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Event Not Found</h1>
        <p style={{ marginBottom: '30px', color: 'rgba(255, 255, 255, 0.7)' }}>
          The event you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate('/events')}
          style={{
            padding: '12px 24px',
            borderRadius: '8px',
            border: '2px solid #00E5FF',
            background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.1) 0%, rgba(0, 229, 255, 0.05) 100%)',
            color: '#00E5FF',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'linear-gradient(135deg, #00E5FF 0%, #0099CC 100%)'
            e.target.style.color = '#0f101d'
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'linear-gradient(135deg, rgba(0, 229, 255, 0.1) 0%, rgba(0, 229, 255, 0.05) 100%)'
            e.target.style.color = '#00E5FF'
          }}
        >
          Back to Events
        </button>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f101d 0%, #1a1b2e 50%, #16213e 100%)',
      padding: '80px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Effects */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 80%, rgba(0, 229, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(155, 89, 182, 0.1) 0%, transparent 50%)',
        zIndex: 1
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Back Button */}
        <button
          onClick={() => navigate('/events')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 20px',
            borderRadius: '25px',
            border: '2px solid rgba(0, 229, 255, 0.3)',
            background: 'rgba(0, 0, 0, 0.3)',
            color: '#00E5FF',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)',
            marginBottom: '40px'
          }}
          onMouseEnter={(e) => {
            e.target.style.borderColor = '#00E5FF'
            e.target.style.background = 'rgba(0, 229, 255, 0.1)'
          }}
          onMouseLeave={(e) => {
            e.target.style.borderColor = 'rgba(0, 229, 255, 0.3)'
            e.target.style.background = 'rgba(0, 0, 0, 0.3)'
          }}
        >
          ← Back to Events
        </button>

        {/* Event Header */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(17, 23, 43, 0.9) 0%, rgba(10, 21, 55, 0.95) 100%)',
          borderRadius: '24px',
          padding: '40px',
          marginBottom: '30px',
          border: '1px solid rgba(0, 229, 255, 0.3)',
          boxShadow: '0 10px 40px rgba(0, 229, 255, 0.15)',
          backdropFilter: 'blur(15px)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Status Badge */}
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            padding: '8px 16px',
            borderRadius: '20px',
            background: event.status === 'upcoming'
              ? 'linear-gradient(135deg, #00E5FF 0%, #0099CC 100%)'
              : 'linear-gradient(135deg, var(--color-cyan) 0%, #0A1537 100%)',
            color: '#ffffff',
            fontSize: '12px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {event.status}
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 'bold',
            color: '#ffffff',
            margin: '0 0 20px 0',
            lineHeight: '1.2',
            background: 'linear-gradient(135deg, #ffffff 0%, var(--color-cyan) 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 20px rgba(0, 229, 255, 0.3)'
          }}>
            {event.title}
          </h1>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginBottom: '30px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '15px 20px',
              background: 'rgba(0, 229, 255, 0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(0, 229, 255, 0.1)'
            }}>
              <span style={{ color: '#00E5FF', fontSize: '18px' }}>📅</span>
              <div>
                <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>Date</div>
                <div style={{ color: '#ffffff', fontWeight: '600' }}>{event.date}</div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '15px 20px',
              background: 'rgba(0, 229, 255, 0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(0, 229, 255, 0.1)'
            }}>
              <span style={{ color: '#00E5FF', fontSize: '18px' }}>🕒</span>
              <div>
                <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>Time</div>
                <div style={{ color: '#ffffff', fontWeight: '600' }}>{event.time}</div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '15px 20px',
              background: 'rgba(0, 229, 255, 0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(0, 229, 255, 0.1)'
            }}>
              <span style={{ color: '#00E5FF', fontSize: '18px' }}>📍</span>
              <div>
                <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>Location</div>
                <div style={{ color: '#ffffff', fontWeight: '600' }}>{event.location}</div>
              </div>
            </div>
          </div>

          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.85)',
            lineHeight: '1.6',
            margin: '0'
          }}>
            {event.description}
          </p>
        </div>

        {/* Event Details Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '30px',
          marginBottom: '40px'
        }}>
          {/* Full Description */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(17, 23, 43, 0.9) 0%, rgba(10, 21, 55, 0.95) 100%)',
            borderRadius: '20px',
            padding: '30px',
            border: '1px solid rgba(0, 229, 255, 0.3)',
            boxShadow: '0 10px 40px rgba(0, 229, 255, 0.15)',
            backdropFilter: 'blur(15px)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#00E5FF',
              margin: '0 0 20px 0',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              📝 About This Event
            </h3>
            <p style={{
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: '1.6',
              margin: '0'
            }}>
              {event.fullDescription}
            </p>
          </div>

          {/* Speakers */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(17, 23, 43, 0.9) 0%, rgba(10, 21, 55, 0.95) 100%)',
            borderRadius: '20px',
            padding: '30px',
            border: '1px solid rgba(0, 229, 255, 0.3)',
            boxShadow: '0 10px 40px rgba(0, 229, 255, 0.15)',
            backdropFilter: 'blur(15px)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#00E5FF',
              margin: '0 0 20px 0',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              👥 Speakers
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {event.speakers.map((speaker, index) => (
                <div key={index} style={{
                  padding: '12px 16px',
                  background: 'rgba(0, 229, 255, 0.05)',
                  borderRadius: '10px',
                  border: '1px solid rgba(0, 229, 255, 0.1)',
                  color: '#ffffff',
                  fontSize: '14px'
                }}>
                  {speaker}
                </div>
              ))}
            </div>
          </div>

          {/* Agenda */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(17, 23, 43, 0.9) 0%, rgba(10, 21, 55, 0.95) 100%)',
            borderRadius: '20px',
            padding: '30px',
            border: '1px solid rgba(0, 229, 255, 0.3)',
            boxShadow: '0 10px 40px rgba(0, 229, 255, 0.15)',
            backdropFilter: 'blur(15px)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#00E5FF',
              margin: '0 0 20px 0',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              📋 Agenda
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {event.agenda.map((item, index) => (
                <div key={index} style={{
                  padding: '10px 14px',
                  background: item.startsWith('Day') || item === '' ? 'rgba(0, 229, 255, 0.1)' : 'rgba(0, 229, 255, 0.05)',
                  borderRadius: '8px',
                  border: '1px solid rgba(0, 229, 255, 0.1)',
                  color: item.startsWith('Day') || item === '' ? '#00E5FF' : '#ffffff',
                  fontSize: item.startsWith('Day') || item === '' ? '16px' : '14px',
                  fontWeight: item.startsWith('Day') || item === '' ? 'bold' : 'normal'
                }}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(17, 23, 43, 0.9) 0%, rgba(10, 21, 55, 0.95) 100%)',
            borderRadius: '20px',
            padding: '30px',
            border: '1px solid rgba(0, 229, 255, 0.3)',
            boxShadow: '0 10px 40px rgba(0, 229, 255, 0.15)',
            backdropFilter: 'blur(15px)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#00E5FF',
              margin: '0 0 20px 0',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              📦 Requirements
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {event.requirements.map((req, index) => (
                <div key={index} style={{
                  padding: '12px 16px',
                  background: 'rgba(0, 229, 255, 0.05)',
                  borderRadius: '10px',
                  border: '1px solid rgba(0, 229, 255, 0.1)',
                  color: '#ffffff',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span style={{ color: '#00E5FF' }}>✓</span>
                  {req}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(17, 23, 43, 0.9) 0%, rgba(10, 21, 55, 0.95) 100%)',
          borderRadius: '20px',
          padding: '30px',
          border: '1px solid rgba(0, 229, 255, 0.3)',
          boxShadow: '0 10px 40px rgba(0, 229, 255, 0.15)',
          backdropFilter: 'blur(15px)',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#00E5FF',
            margin: '0 0 15px 0'
          }}>
            📞 Contact Information
          </h3>
          <p style={{
            fontSize: '1rem',
            color: 'rgba(255, 255, 255, 0.85)',
            margin: '0 0 20px 0'
          }}>
            For more information about this event, please contact us at:
          </p>
          <a
            href={`mailto:${event.contact}`}
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              borderRadius: '25px',
              border: '2px solid #00E5FF',
              background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.1) 0%, rgba(0, 229, 255, 0.05) 100%)',
              color: '#00E5FF',
              fontSize: '16px',
              fontWeight: 'bold',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #00E5FF 0%, #0099CC 100%)'
              e.target.style.color = '#0f101d'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'linear-gradient(135deg, rgba(0, 229, 255, 0.1) 0%, rgba(0, 229, 255, 0.05) 100%)'
              e.target.style.color = '#00E5FF'
            }}
          >
            {event.contact}
          </a>
        </div>
      </div>
    </div>
  )
}

export default EventDetails
