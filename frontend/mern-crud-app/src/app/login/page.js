'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
    const [form, setForm] = useState({ email: '', password: '' });
    const router = useRouter();

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/users/login', form);
            localStorage.setItem('userName', res.data.user.name);
            alert('Login successful');
            router.push('/dashboard');
        } catch (error) {
            alert('Login failed: ' + (error.response?.data?.message || 'Unexpected error'));
        }
    };


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h2 className="text-3xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-full max-w-sm space-y-4">
                <input className="w-full p-3 border rounded" name="email" type="email" placeholder="Email" onChange={handleChange} required />
                <input className="w-full p-3 border rounded" name="password" type="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">Login</button>
                <p className="text-center">Don't have an account? <Link href="/register" className="text-blue-600">Register</Link></p>
            </form>
        </div>
    );
}
