'use client';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-purple-700 text-white p-4">
      <h1 className="text-5xl font-bold mb-6 text-center">Welcome to MERN App</h1>
      <div className="flex gap-6">
        <Link href="/login" className="bg-white text-blue-600 px-6 py-3 rounded shadow hover:bg-gray-200">Login</Link>
        <Link href="/register" className="bg-white text-blue-600 px-6 py-3 rounded shadow hover:bg-gray-200">Register</Link>
      </div>
    </div>
  );
}
