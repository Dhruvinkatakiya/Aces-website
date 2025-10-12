/**
 * API utility file for managing API URLs and common fetch operations
 */

// API URL configuration - uses environment variable or fallback to Render backend deployment
export const API_URL = import.meta.env.VITE_API_URL || 'https://aces-backend.onrender.com';

/**
 * Helper function for making API requests
 * @param {string} endpoint - The API endpoint (without the base URL)
 * @param {Object} options - Fetch options (method, headers, body, etc.)
 * @returns {Promise} - Fetch promise
 */
export const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
  
  // Default headers
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const config = {
    ...options,
    headers,
  };

  const response = await fetch(url, config);
  
  // Check if the response is ok (status in the range 200-299)
  if (!response.ok) {
    const error = await response.json().catch(() => ({
      message: `API request failed with status ${response.status}`,
    }));
    throw new Error(error.message || 'Something went wrong');
  }

  return response.json();
};

// Common API methods
export const get = (endpoint, options = {}) => 
  apiRequest(endpoint, { ...options, method: 'GET' });

export const post = (endpoint, data, options = {}) => 
  apiRequest(endpoint, { 
    ...options, 
    method: 'POST',
    body: JSON.stringify(data),
  });

export const put = (endpoint, data, options = {}) => 
  apiRequest(endpoint, { 
    ...options, 
    method: 'PUT',
    body: JSON.stringify(data),
  });

export const del = (endpoint, options = {}) => 
  apiRequest(endpoint, { ...options, method: 'DELETE' });