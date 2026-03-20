import React from 'react';

function ResourceRequestPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-purple-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Resource Requests
        </h1>
        <p className="text-gray-500 max-w-md mx-auto">
          Request missing lectures or study materials from your peers and
          lecturers. This feature is coming soon.
        </p>
        <span className="inline-block mt-6 px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
          Coming Soon
        </span>
      </div>
    </div>
  );
}

export default ResourceRequestPage;
