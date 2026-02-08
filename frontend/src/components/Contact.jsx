import React from 'react'

function Contact() {
  return (
    <section 
      id="contact" 
      style={{
        width: '100%',
        minHeight: '100vh',
        padding: '64px 0',
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
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 'bold',
          color: '#ffffff',
          margin: '0 0 20px 0',
          letterSpacing: '2px'
        }}>
          Contact Us
        </h2>
        
        {/* Gradient underline */}
        <div style={{
          width: '200px',
          height: '2px',
          background: 'linear-gradient(90deg, var(--color-cyan) 0%, #0A1537 100%)',
          margin: '0 auto 30px auto',
          borderRadius: '1px'
        }} />
        <p className="mt-2 text-white/70">Feel free to drop your suggestions, feedback and queries here</p>
      </div>

      {/* Contact Info Cards */}
      <div style={{
        width: '92%',
        maxWidth: '1200px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Email Card */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(155, 89, 182, 0.1) 0%, rgba(0, 229, 255, 0.1) 100%)',
          borderRadius: '20px',
          padding: '40px 30px',
          border: '1px solid rgba(0, 229, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 229, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          flex: '1 1 300px',
          maxWidth: '350px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px)';
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 229, 255, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 229, 255, 0.1)';
        }}
        >
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'rgba(0, 229, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '20px',
            fontSize: '24px'
          }}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" 
              alt="Email" 
              style={{ width: '35px', height: '35px' }} 
            />
          </div>
          <h3 style={{
            color: '#ffffff',
            fontSize: '1.5rem',
            marginBottom: '15px',
            fontWeight: 'bold'
          }}>Email Us</h3>
          <p style={{
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '20px'
          }}>For any queries or collaborations</p>
          <a
            href="mailto:aces_itnu@nirmauni.ac.in"
            style={{
              color: '#00E5FF',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '500',
              borderBottom: '1px solid transparent',
              transition: 'border-color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.borderBottomColor = '#00E5FF'}
            onMouseLeave={(e) => e.target.style.borderBottomColor = 'transparent'}
          >
            aces_itnu@nirmauni.ac.in
          </a>
        </div>



        {/* Social Media Card */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(155, 89, 182, 0.1) 0%, rgba(0, 229, 255, 0.1) 100%)',
          borderRadius: '20px',
          padding: '40px 30px',
          border: '1px solid rgba(0, 229, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 229, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          flex: '1 1 300px',
          maxWidth: '350px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px)';
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 229, 255, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 229, 255, 0.1)';
        }}
        >
          <div style={{ display: 'flex', gap: '14px', marginBottom: '20px' }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(0, 229, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
                alt="Instagram" 
                style={{ width: '32px', height: '32px' }} 
              />
            </div>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(0, 229, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
                alt="LinkedIn" 
                style={{ width: '32px', height: '32px' }} 
              />
            </div>
          </div>
          
          <h3 style={{
            color: '#ffffff',
            fontSize: '1.5rem',
            marginBottom: '15px',
            fontWeight: 'bold'
          }}>Social Media</h3>
          <p style={{
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '20px'
          }}>Follow us for updates and contents</p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <a
              href="https://www.instagram.com/aces_itnu"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#00E5FF',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '500',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              Instagram
            </a>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
            <a
              href="https://www.linkedin.com/company/association-of-computer-engineering-students"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#00E5FF',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '500',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Contact
