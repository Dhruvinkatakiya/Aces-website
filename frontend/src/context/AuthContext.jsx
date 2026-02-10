import React, { createContext, useState, useEffect, useContext } from 'react';
import { googleLogout } from '@react-oauth/google';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loginLogId, setLoginLogId] = useState(localStorage.getItem('loginLogId'));
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkLoggedIn = async () => {
            if (token) {
                try {
                    const res = await fetch('http://localhost:5000/api/auth/me', {
                        headers: { 
                            'Authorization': `Bearer ${token}` 
                        }
                    });
                    const data = await res.json();
                    if (res.ok) {
                        setUser(data);
                    } else {
                        logout();
                    }
                } catch (err) {
                    console.error('Auth check failed:', err);
                    logout();
                }
            }
            setLoading(false);
        };

        checkLoggedIn();
    }, [token]);

    const login = (userData, authToken, logId) => {
        setUser(userData);
        setToken(authToken);
        setLoginLogId(logId);
        localStorage.setItem('token', authToken);
        localStorage.setItem('loginLogId', logId);
    };

    const logout = async () => {
        try {
            if (loginLogId) {
                await fetch('http://localhost:5000/api/auth/logout', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ loginLogId })
                });
            }
        } catch (err) {
            console.error('Logout failed:', err);
        }

        googleLogout();
        setUser(null);
        setToken(null);
        setLoginLogId(null);
        localStorage.removeItem('token');
        localStorage.removeItem('loginLogId');
    };

    const updateProfile = (updatedUser) => {
        setUser(updatedUser);
    };

    return (
        <AuthContext.Provider value={{ user, token, loading, login, logout, updateProfile }}>
            {children}
        </AuthContext.Provider>
    );
};
