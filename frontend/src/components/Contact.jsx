import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong.');
        }
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000); // Hide message after 5s
        setFormData({ name: '', email: '', message: '' });
    } catch (err) {
        setError(err.message);
    } finally {
        setIsSubmitting(false);
    }
  }

  return (
    <section 
      id="contact" 
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#0f101d',
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
        
        <p style={{
          fontSize: 'clamp(1rem, 2.8vw, 1.1rem)',
          color: 'rgba(255, 255, 255, 0.8)',
          margin: '0',
          maxWidth: '600px',
          lineHeight: '1.6'
        }}>
          Feel free to drop your suggestions, feedback and queries here.
        </p>
      </div>

      {/* Contact Form */}
      <div style={{
        width: '92%',
        maxWidth: '620px',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(155, 89, 182, 0.15) 0%, rgba(0, 229, 255, 0.15) 100%)',
          borderRadius: '20px',
          padding: '24px',
          border: '1px solid rgba(0, 229, 255, 0.3)',
          boxShadow: '0 8px 32px rgba(0, 229, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Form glow effect */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, var(--color-cyan) 0%, #0A1537 100%)',
            opacity: 0.8
          }} />
          
          <h3 style={{
            fontSize: 'clamp(1.2rem, 3.2vw, 1.5rem)',
            fontWeight: 'bold',
            color: '#ffffff',
            margin: '0 0 30px 0',
            textAlign: 'left'
          }}>
            Enter your details
          </h3>

          {submitted && <div style={{ color: '#4CAF50', textAlign: 'center', paddingBottom: '10px', fontWeight: 'bold' }}>Message sent successfully!</div>}
          {error && <div style={{ color: '#F44336', textAlign: 'center', paddingBottom: '10px', fontWeight: 'bold' }}>{error}</div>}

          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div style={{ marginBottom: '20px' }}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={inputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = '#00E5FF'
                  e.target.style.boxShadow = '0 0 10px rgba(0, 229, 255, 0.3)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(0, 229, 255, 0.2)'
                  e.target.style.boxShadow = 'none'
                }}
              />
            </div>

            {/* Email Field */}
            <div style={{ marginBottom: '20px' }}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={inputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = '#00E5FF'
                  e.target.style.boxShadow = '0 0 10px rgba(0, 229, 255, 0.3)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(0, 229, 255, 0.2)'
                  e.target.style.boxShadow = 'none'
                }}
              />
            </div>

            {/* Message Field */}
            <div style={{ marginBottom: '24px' }}>
              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                style={{
                  ...inputStyle,
                  resize: 'vertical',
                  minHeight: '108px',
                  fontFamily: 'inherit'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#00E5FF'
                  e.target.style.boxShadow = '0 0 10px rgba(0, 229, 255, 0.3)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(0, 229, 255, 0.2)'
                  e.target.style.boxShadow = 'none'
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '15px 30px',
                borderRadius: '12px',
                border: 'none',
                background: 'linear-gradient(135deg, var(--color-cyan) 0%, #0A1537 100%)',
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                opacity: isSubmitting ? 0.7 : 1
              }}
              disabled={isSubmitting}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 8px 25px rgba(0, 229, 255, 0.4)'
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>


      {/* Email Contact Section With Tight Spacing */}
      <div
        style={{
          textAlign: 'center',
          marginTop: '28px',
          position: 'relative',
          zIndex: 10
        }}
      >
        {/* Gradient underline at the top of the section */}
        <div
          style={{
            width: '200px',
            height: '2px',
            background: 'linear-gradient(90deg, var(--color-cyan) 0%, #0A1537 100%)',
            margin: '0 auto 15px auto',   // less spacing
            borderRadius: '1px'
          }}
        />

        <p
          style={{
            fontSize: 'clamp(0.95rem, 2.6vw, 1rem)',
            color: 'rgba(255, 255, 255, 0.8)',
            margin: '10px'
          }}
        >
          You can also E-mail us at{' '}
          <a
            href="mailto:aces_itnu@nirmauni.ac.in"
            style={{
              color: '#00E5FF',
              textDecoration: 'none',
              borderBottom: '1px solid transparent',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.borderBottomColor = '#00E5FF'
            }}
            onMouseOut={(e) => {
              e.target.style.borderBottomColor = 'transparent'
            }}
          >
            aces_itnu@nirmauni.ac.in
          </a>
        </p>

        {/* Gradient underline at the top of the section */}
        <div
          style={{
            width: '200px',
            height: '2px',
            background: 'linear-gradient(90deg, var(--color-cyan) 0%, #0A1537 100%)',
            margin: '0 auto 15px auto',   // less spacing
            borderRadius: '1px'
          }}
        />
      </div>

    </section>
  )
}

const inputStyle = {
  width: '100%',
  padding: '15px 20px',
  borderRadius: '12px',
  border: '1px solid rgba(0, 229, 255, 0.2)',
  background: 'rgba(0, 0, 0, 0.3)',
  color: '#ffffff',
  fontSize: '16px',
  outline: 'none',
  transition: 'all 0.3s ease',
  backdropFilter: 'blur(5px)'
};

export default Contact
