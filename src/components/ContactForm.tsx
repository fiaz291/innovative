'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    message: '',
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    email: '',
    city: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) throw new Error('Failed to send message');

      alert('Form submitted!');
      setForm({
        message: '',
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
        email: '',
        city: '',
      });
    } catch (error) {
      alert('Something went wrong while sending your message.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us.</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="mb-4 block">{`Have a question or comment? We'd love to hear from you.*`}</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full border p-4 rounded resize-none"
          rows={5}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="mb-4 block">{`First Name*`}</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="mb-4 block">{`Last Name*`}</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="mb-4 block">{`Address`}</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="mb-4 block">{`Phone`}</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="mb-4 block">{`Email*`}</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="mb-4 block">{`City*`}</label>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`cursor-pointer flex items-center justify-center gap-2 bg-black text-white px-6 py-2 rounded-[24px] hover:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed`}
        >
          {loading && (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          )}
          {loading ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
