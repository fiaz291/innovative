'use client';
import { useState } from 'react';

export default function RequestForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    startDate: '',
    coverLetter: '',
    resume: null as File | null,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setForm((prev) => ({ ...prev, resume: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (value) formData.append(key, value as string | Blob);
      });

      const res = await fetch('/api/application', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Failed to submit form');

      alert('Application submitted successfully!');
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        startDate: '',
        coverLetter: '',
        resume: null,
      });
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-15 max-w-[80%] mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">Application Form</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block font-semibold mb-2">Name</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="w-full border p-2 rounded"
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-2">E-mail</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="example@example.com"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-semibold mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="(000) 000-0000"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Position */}
        <div>
          <label className="block font-semibold mb-2">Applied Position</label>
          <input
            type="text"
            name="position"
            value={form.position}
            onChange={handleChange}
            placeholder="Applied Position"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Start Date */}
        <div>
          <label className="block font-semibold mb-2">
            Earliest Possible Start Date
          </label>
          <input
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Cover Letter */}
        <div>
          <label className="block font-semibold mb-2">Cover Letter</label>
          <textarea
            name="coverLetter"
            value={form.coverLetter}
            onChange={handleChange}
            rows={5}
            placeholder="Please do not exceed 200 words."
            required
            className="w-full border p-2 rounded resize-none"
          />
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block font-semibold mb-2">Upload Resume</label>
          <div className="border-2 border-dashed rounded-lg p-6 text-center">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
              id="resume"
            />
            <label
              htmlFor="resume"
              className="cursor-pointer text-gray-700 hover:underline"
            >
              {form.resume ? form.resume.name : 'Upload a file'}
            </label>
            <p className="text-sm text-gray-500 mt-1">
              Drag and drop files here
            </p>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-6 py-2 rounded-[24px] hover:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
