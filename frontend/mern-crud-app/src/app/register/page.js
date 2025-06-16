'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const router = useRouter();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users/register', form);
      alert('Registration successful');
      router.push('/login');
    } catch (error) {
      alert('Registration failed: ' + error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-3xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-full max-w-sm space-y-4">
        <input className="w-full p-3 border rounded" name="name" placeholder="Name" onChange={handleChange} required />
        <input className="w-full p-3 border rounded" name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input className="w-full p-3 border rounded" name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit" className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700">Register</button>
        <p className="text-center">Already have an account? <Link href="/login" className="text-green-600">Login</Link></p>
      </form>
    </div>
  );
}
