'use client';
import React from "react";
import {
  Search,
  Mic,
  FileText,
  Ticket,
  MessageSquare,
} from "lucide-react";

export default function Faq({isWhite = false}: {isWhite?: boolean}) {
    return (
         <div className="mx-5 md:mx-70 md:py-4 md:px-40">
            <div className="flex items-center justify-between border-b-3 border-white pb-2 mb-4 tex">
              <h2 className={`text-lg font-semibold ${ isWhite ? 'text-white' : 'text-gray-700'}`}>Search for answers</h2>
              <div className="flex items-center gap-3">
                <Mic className={`w-5 h-5 ${ isWhite ? 'text-white' : 'text-gray-700'}`} />
                <Search className={`w-5 h-5 ${ isWhite ? 'text-white' : 'text-gray-700'}`} />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-15 space-y-3">
              <HelpItem icon={<FileText className="w-5 h-5" />} label="Nutrition Facts" />
              <HelpItem icon={<Ticket className="w-5 h-5" />} label="Question about a promotion" />
              <HelpItem icon={<MessageSquare className="w-5 h-5" />} label="FAQs" />
            </div>
        </div>
    );
}


function HelpItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center justify-between border-b-1 border-b-black last:border-b-0 pb-2">
      <div className="flex items-center gap-3 text-gray-800">
        {icon}
        <span className="text-sm">{label}</span>
      </div>
    </div>
  );
}