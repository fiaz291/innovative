'use client';
import { useState } from 'react';

interface RequestFormModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function RequestFormModal({ open, setOpen }: RequestFormModalProps) {
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
      setOpen(false);
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl mx-4 p-8 relative overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          ×
        </button>

        <h1 className="text-3xl font-bold text-center mb-8">
          Application Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block font-semibold mb-2">Name</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="w-full border p-2 rounded"
              />
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
            className="bg-black text-white px-6 py-2 rounded-[24px] hover:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed w-full"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}
