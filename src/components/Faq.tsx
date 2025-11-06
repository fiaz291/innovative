'use client';
import React, { useState } from "react";
import { Search, Mic, FileText, Ticket, MessageSquare, ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    icon: <FileText className="w-5 h-5" />,
    label: "Nutrition Facts",
    answer: "You can find detailed nutrition facts on the back of every product or on our website's product details page.",
  },
  {
    icon: <Ticket className="w-5 h-5" />,
    label: "Question about a promotion",
    answer: "Promotional details are available in our newsletter or promotions section. Contact support if you didn’t receive your discount.",
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    label: "FAQs",
    answer: "Browse our FAQ section to find quick answers to common questions about orders, returns, and shipping.",
  },
];
export default function Faq({ items, isWhite = false }: { items?: {icon: React.ReactNode, label: string, answer: string}[],  isWhite?: boolean }) {

  return (
    <div className="mx-5 md:mx-70 md:py-4 md:px-40">
      <div className="flex items-center justify-between border-b-2 border-white pb-2 mb-4">
        <h2
          className={`text-lg font-semibold ${
            isWhite ? "text-white" : "text-gray-700"
          }`}
        >
          Search for answers
        </h2>
        <div className="flex items-center gap-3">
          <Mic className={`w-5 h-5 ${isWhite ? "text-white" : "text-gray-700"}`} />
          <Search className={`w-5 h-5 ${isWhite ? "text-white" : "text-gray-700"}`} />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 md:p-10 space-y-3">
        {(items && items.length ? items : FAQ_ITEMS).map((item, idx) => (
          <HelpItem key={idx} icon={item.icon} label={item.label} answer={item.answer} />
        ))}
      </div>
    </div>
  );
}

function HelpItem({
  icon,
  label,
  answer,
}: {
  icon: React.ReactNode;
  label: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer w-full flex items-center justify-between py-3 text-left"
      >
        <div className="flex items-center gap-3 text-gray-800">
          {icon}
          <span className="text-sm font-medium">{label}</span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-gray-600 transform transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="pl-8 pb-3 text-gray-600 text-sm transition-all duration-300">
          {answer}
        </div>
      )}
    </div>
  );
}