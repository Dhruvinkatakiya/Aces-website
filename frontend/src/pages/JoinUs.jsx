import React, { useState } from 'react';
import FloatingCode from '../components/FloatingCode';

const JoinUs = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        branch: '',
        year: '',
        why: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/join`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong.');
            }

            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 5000); // Hide message after 5s
            setForm({ name: '', email: '', branch: '', year: '', why: '' });
        } catch (err) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <FloatingCode />
            <section
                style={{
                    width: '100%',
                    minHeight: '100vh',
                    backgroundColor: '#0f101d',
                    padding: '80px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Background Effects */}
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%',
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, rgba(0, 229, 255, 0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    zIndex: 1
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '20%',
                    right: '10%',
                    width: '200px',
                    height: '200px',
                    background: 'radial-gradient(circle, rgba(155, 89, 182, 0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(30px)',
                    zIndex: 1
                }} />

                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: '40px', position: 'relative', zIndex: 10 }}>
                    <h1 style={{
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        color: '#ffffff',
                        margin: '0 0 20px 0',
                        letterSpacing: '2px',
                        textShadow: '0 0 20px rgba(0, 229, 255, 0.3)'
                    }}>
                        Join ACES Club
                    </h1>

                    {/* Gradient underline */}
                    <div style={{
                        width: '200px',
                        height: '3px',
                        background: 'linear-gradient(90deg, var(--color-cyan) 0%, #0A1537 100%)',
                        margin: '0 auto 30px auto',
                        borderRadius: '2px',
                    }} />

                    <p style={{
                        fontSize: '1.2rem',
                        color: 'rgba(255, 255, 255, 0.8)',
                        margin: '0',
                        maxWidth: '600px',
                        lineHeight: '1.6'
                    }}>
                        Ready to be part of something amazing? Join our community of innovators and tech enthusiasts!
                    </p>
                </div>

                {/* Form Container */}
                <div style={{
                    width: '100%',
                    maxWidth: '500px',
                    position: 'relative',
                    zIndex: 10
                }}>
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(155, 89, 182, 0.15) 0%, rgba(0, 229, 255, 0.15) 100%)',
                        borderRadius: '20px',
                        padding: '40px',
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
                            background: 'linear-gradient(90deg, var(--color-cyan) 0%, #9B59B6 100%)',
                            opacity: 0.8
                        }} />

                        {submitted && (
                            <div style={{
                                textAlign: 'center',
                                color: '#4CAF50',
                                margin: '0 0 20px 0',
                                fontWeight: 'bold',
                                fontSize: '1.1rem',
                                padding: '15px',
                                background: 'rgba(76, 175, 80, 0.1)',
                                borderRadius: '10px',
                                border: '1px solid rgba(76, 175, 80, 0.3)'
                            }}>
                                🎉 Thank you for joining! We'll get in touch soon.
                            </div>
                        )}

                        {error && (
                            <div style={{
                                textAlign: 'center',
                                color: '#F44336',
                                margin: '0 0 20px 0',
                                fontWeight: 'bold',
                                fontSize: '1rem',
                                padding: '15px',
                                background: 'rgba(244, 67, 54, 0.1)',
                                borderRadius: '10px',
                                border: '1px solid rgba(244, 67, 54, 0.3)'
                            }}>
                                ⚠️ {error}
                            </div>
                        )}

                        {!submitted && (
                            <>
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    color: '#ffffff',
                                    margin: '0 0 30px 0',
                                    textAlign: 'center'
                                }}>
                                    Tell us about yourself
                                </h3>

                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        style={inputStyle}
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        style={inputStyle}
                                    />
                                    <input
                                        type="text"
                                        name="branch"
                                        placeholder="Branch"
                                        value={form.branch}
                                        onChange={handleChange}
                                        required
                                        style={inputStyle}
                                    />
                                    <input
                                        type="text"
                                        name="year"
                                        placeholder="Year"
                                        value={form.year}
                                        onChange={handleChange}
                                        required
                                        style={inputStyle}
                                    />
                                    <textarea
                                        name="why"
                                        placeholder="Why do you want to join?"
                                        value={form.why}
                                        onChange={handleChange}
                                        required
                                        rows={3}
                                        style={{ ...inputStyle, resize: 'vertical' }}
                                    />
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        style={{
                                            background: isSubmitting ? '#ccc' : '#00E5FF',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: 6,
                                            padding: '10px 0',
                                            fontWeight: 600,
                                            cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                            opacity: isSubmitting ? 0.7 : 1
                                        }}
                                    >
                                        {isSubmitting ? 'Joining...' : 'Join Now'}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

const inputStyle = {
    padding: '10px',
    borderRadius: 6,
    border: '1px solid #00E5FF',
    fontSize: '1rem',
    outline: 'none'
};

export default JoinUs;
