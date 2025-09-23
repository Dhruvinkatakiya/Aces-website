// In JoinUs.jsx
const token = localStorage.getItem('token');
const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
        alert('Please login to submit the form.');
        // redirect to login page
        return;
    }
    const res = await fetch('http://localhost:5000/api/join', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(form)
    });
    // handle response...
};