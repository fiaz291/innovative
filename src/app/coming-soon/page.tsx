'use client';

import React from 'react';
import { Clock, Wrench, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ComingSoon() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Icon Section */}
        <div className="mb-8">
          <div className="relative mx-auto w-24 h-24 mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="relative bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
              <Wrench className="w-10 h-10 text-blue-500" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Coming Soon
          </h1>
          <p className="text-gray-600 text-lg mb-2">
            {`We're working hard to bring you something amazing!`}
          </p>
          <p className="text-gray-500 text-sm">
            This feature is currently under development and will be available soon.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-2 text-blue-500 mb-4">
            <Clock className="w-5 h-5" />
            <span className="text-sm font-medium">Development in Progress</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleGoBack}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 inline mr-2" />
            Go Back
          </button>
        </div>

        {/* Footer */}
        <div className="mt-8 text-xs text-gray-400">
          <p>Thank you for your patience</p>
        </div>
      </div>
    </div>
  );
}