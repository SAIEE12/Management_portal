import React, { useState } from 'react';

function CreateUser({ setIsCreatingUser }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password, email, mobile }),
            });

            if (!response.ok) {
                throw new Error('Failed to create user');
            }

            const result = await response.json();
            console.log(result);
            setIsCreatingUser(false);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='main-content'>
        <div className='create-user'>
            <h2 style={{textAlign:"center"}}>Create User</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type='tel'
                    placeholder='Mobile Number'
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                />
                <button type='submit' disabled={loading}>
                    {loading ? 'Creating...' : 'Create'}
                </button>
                {/* <button type='button' onClick={() => setIsCreatingUser(false)}>Cancel</button> */}
                {error && <p className='error'>{error}</p>}
            </form>
        </div>
        </div>
    );
}

export default CreateUser;