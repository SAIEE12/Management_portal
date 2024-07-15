import React, { useState } from 'react';

const usersDB = [
    { id: 'admin', password: 'admin123', role: 'admin' },
    { id: 'user1', password: 'user123', role: 'user' },
];

function Login({ setUser }) {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const user = usersDB.find(user => user.id === id && user.password === password);
        if (user) {
            setUser(user);
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className='login'>
            <h2>Login</h2>
            <input
                type='text'
                placeholder='ID'
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;