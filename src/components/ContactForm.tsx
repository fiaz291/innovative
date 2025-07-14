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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    alert('Form submitted!');
  };

  return (
    <div className="p-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us.</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="mb-4 block">{`Have a question or comment? We'd love to hear from you.*`}</label>
        <textarea
          name="message"
          onChange={handleChange}
          className="w-full border p-4 rounded resize-none"
          rows={5}
          required
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className='mb-4 block'>{`First Name*`}</label>
                <input type="text" name="firstName" onChange={handleChange} required className="w-full border p-2 rounded" />
            </div>
            <div>
                <label className='mb-4 block'>{`Last Name*`}</label>
                <input type="text" name="lastName" onChange={handleChange} className="w-full border p-2 rounded" />
            </div>
            <div>
                <label className="mb-4 block">{`Address`}</label>
                <input type="text" name="address" onChange={handleChange} className="w-full border p-2 rounded" />
            </div>
            <div>
                <label className="mb-4 block">{`Phone`}</label>
                <input type="text" name="phone" onChange={handleChange} className="w-full border p-2 rounded" />
            </div>
            <div>
                <label className="mb-4 block">{`Email*`}</label>
                <input type="email" name="email" onChange={handleChange} required className="w-full border p-2 rounded" />
            </div>
            <div>
                <label className="mb-4 block">{`City*`}</label>
                <input type="text" name="city" onChange={handleChange} required className="w-full border p-2 rounded" />
            </div>
        </div>
        <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">Submit</button>
      </form>
    </div>
  );
}
