import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const FirstLoginForm = ({ onComplete }) => {
    const { token, updateProfile } = useAuth();
    const [formData, setFormData] = useState({
        branch: 'CSE',
        year: '1'
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('http://localhost:5000/api/auth/update-profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ 
                    branch: formData.branch, 
                    year: formData.year 
                })
            });

            const data = await res.json();
            if (res.ok) {
                updateProfile(data);
                onComplete();
            } else {
                alert(data.msg || 'Update failed');
            }
        } catch (err) {
            console.error('Update error:', err);
            alert('Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
            <div className="w-full max-w-md bg-[#151625] border border-[rgba(0,229,255,0.1)] rounded-2xl p-8 shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Complete Your Profile</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">Branch</label>
                        <select
                            name="branch"
                            value={formData.branch}
                            onChange={handleChange}
                            className="w-full bg-[#0A0B14] border border-[rgba(0,229,255,0.1)] rounded-xl px-4 py-3 text-white focus:border-[var(--color-cyan)] outline-none"
                        >
                            <option value="CSE">CSE</option>
                            <option value="IT">IT</option>
                            <option value="EC">EC</option>
                            <option value="EI">EI</option>
                            <option value="Mech">Mech</option>
                            <option value="Civil">Civil</option>
                            <option value="Chemical">Chemical</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">Year</label>
                        <select
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            className="w-full bg-[#0A0B14] border border-[rgba(0,229,255,0.1)] rounded-xl px-4 py-3 text-white focus:border-[var(--color-cyan)] outline-none"
                        >
                            <option value="1">1st Year</option>
                            <option value="2">2nd Year</option>
                            <option value="3">3rd Year</option>
                            <option value="4">4th Year</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-[var(--color-cyan)] to-cyan-600 text-[#0F101D] font-bold py-3.5 rounded-xl hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all disabled:opacity-50"
                    >
                        {loading ? 'Saving...' : 'Continue'}
                    </button>
                </form>
            </div>
        </motion.div>
    );
};

export default FirstLoginForm;
