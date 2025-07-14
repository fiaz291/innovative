'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

type Contact = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  message: string;
  created_at: string;
};

export default function AdminContacts() {
  const router = useRouter();
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (isAdmin !== 'true') {
      router.push('/admin/login');
      return;
    }

    const fetchContacts = async () => {
      const res = await fetch('/api/contact');
      const json = await res.json();
      setContacts(json.data || []);
    };

    fetchContacts();
  }, [router]);

  return (
    <div>
        <div className="text-white w-full bg-no-repeat bg-center md:bg-cover">
              <Navbar isPremium={false} isTransparentBg />
        </div>
        <div className="p-10 max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Contact Submissions</h1>
          <div className="overflow-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Email</th>
                  <th className="border p-2">Phone</th>
                  <th className="border p-2">City</th>
                  <th className="border p-2">Message</th>
                  <th className="border p-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((c) => (
                  <tr key={c.id} className="border-t">
                    <td className="border p-2">{c.firstName} {c.lastName}</td>
                    <td className="border p-2">{c.email}</td>
                    <td className="border p-2">{c.phone}</td>
                    <td className="border p-2">{c.city}</td>
                    <td className="border p-2">{c.message}</td>
                    <td className="border p-2">{new Date(c.created_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
}
