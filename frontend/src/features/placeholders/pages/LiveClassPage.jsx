import React from 'react';

function LiveClassPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Live Classes</h1>
        <p className="text-gray-500 max-w-md mx-auto">
          Join live interactive sessions with your lecturers and collaborate
          with classmates in real time. This feature is coming soon.
        </p>
        <span className="inline-block mt-6 px-4 py-1.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
          Coming Soon
        </span>
      </div>
    </div>
  );
}

export default LiveClassPage;
