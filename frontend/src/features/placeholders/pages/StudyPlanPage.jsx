import React from 'react';

function StudyPlanPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-orange-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Study Plans</h1>
        <p className="text-gray-500 max-w-md mx-auto">
          Create personalised study schedules, set academic goals, and track
          your progress. This feature is coming soon.
        </p>
        <span className="inline-block mt-6 px-4 py-1.5 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">
          Coming Soon
        </span>
      </div>
    </div>
  );
}

export default StudyPlanPage;
