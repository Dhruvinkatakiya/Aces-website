import React from 'react'

function About() {
  return (
    <section 
      id="about" 
      style={{
        width: '100%',
        minHeight: '80vh',
        padding: '80px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
          About Us
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
          color: 'rgba(255, 255, 255, 0.8)',
          margin: '0',
          maxWidth: '600px',
          lineHeight: '1.6'
        }}>
          Learn about our mission, vision, and journey
        </p>
      </div>

      {/* Content Cards */}
      <div style={{
        display: 'flex',
        gap: '40px',
        maxWidth: '1200px',
        width: '90%',
        justifyContent: 'center',
        flexWrap: 'wrap',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Mission Card */}
        <div style={{
          flex: '1',
          minWidth: '300px',
          maxWidth: '500px',
          background: 'linear-gradient(135deg, rgba(17, 23, 43, 0.8) 0%, rgba(10, 21, 55, 0.9) 100%)',
          borderRadius: '16px',
          padding: '40px 30px',
          border: '1px solid rgba(0, 229, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 229, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Card glow effect */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, var(--color-cyan) 0%, #0A1537 100%)',
            opacity: 0.6
          }} />
          
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#ffffff',
            margin: '0 0 20px 0',
            textAlign: 'left'
          }}>
            Our Mission
          </h3>
          
          <p style={{
            fontSize: '1rem',
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: '1.7',
            margin: '0',
            textAlign: 'left'
          }}>
            ACES is dedicated to fostering a community of innovative computer engineering students who collaborate, learn, and grow together. We aim to bridge the gap between academic knowledge and industry requirements by providing practical experiences, networking opportunities, and technical resources.
          </p>
        </div>

        {/* Vision Card */}
        <div style={{
          flex: '1',
          minWidth: '300px',
          maxWidth: '500px',
          background: 'linear-gradient(135deg, rgba(17, 23, 43, 0.8) 0%, rgba(10, 21, 55, 0.9) 100%)',
          borderRadius: '16px',
          padding: '40px 30px',
          border: '1px solid rgba(0, 229, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 229, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Card glow effect */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, var(--color-cyan) 0%, #0A1537 100%)',
            opacity: 0.6
          }} />
          
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#ffffff',
            margin: '0 0 20px 0',
            textAlign: 'left'
          }}>
            Our Vision
          </h3>
          
          <p style={{
            fontSize: '1rem',
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: '1.7',
            margin: '0',
            textAlign: 'left'
          }}>
            To be the premier student organization that empowers future computer engineers to become industry leaders, innovators, and problem solvers. We envision a community where students can explore cutting-edge technologies, develop professional skills, and build meaningful connections that last beyond graduation.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About


