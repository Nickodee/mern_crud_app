'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [name, setName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setName(storedName);
    } else {
      window.location.href = '/login'; // redirect if no name found (not logged in)
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userName');
    window.location.href = '/login';
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white p-4">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      <p className="mb-4 text-lg">Welcome home, <span className="font-semibold">{name}</span>!</p>
      <p>This is my dashboard</p>
      <div className="flex gap-4">
        <Link href="/landing" className="bg-white text-blue-600 px-6 py-3 rounded shadow hover:bg-gray-200">Home</Link>
        <button onClick={handleLogout} className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700">Logout</button>
      </div>
    </div>
  );
}
