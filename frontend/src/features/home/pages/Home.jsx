import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext.jsx';

const FEATURES = [
  {
    title: 'Resources',
    description:
      'Access lecture notes, slides, and study materials for all your modules in one organised place.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    to: '/resources',
    color: 'blue',
  },
  {
    title: 'Resource Requests',
    description:
      'Request missing lectures or materials from peers and lecturers — keep nothing out of reach.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
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
    ),
    to: '/requests',
    color: 'purple',
  },
  {
    title: 'Live Classes',
    description:
      'Join live interactive sessions with your lecturers and collaborate with classmates in real time.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
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
    ),
    to: '/live-class',
    color: 'green',
  },
  {
    title: 'Study Plans',
    description:
      'Build personalised study schedules, set goals, and track your academic progress effortlessly.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
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
    ),
    to: '/study-plan',
    color: 'orange',
  },
];

const cardColor = {
  blue: 'bg-blue-50 border-blue-100 hover:border-blue-300',
  purple: 'bg-purple-50 border-purple-100 hover:border-purple-300',
  green: 'bg-green-50 border-green-100 hover:border-green-300',
  orange: 'bg-orange-50 border-orange-100 hover:border-orange-300',
};

const iconColor = {
  blue: 'bg-blue-100 text-blue-600',
  purple: 'bg-purple-100 text-purple-600',
  green: 'bg-green-100 text-green-600',
  orange: 'bg-orange-100 text-orange-600',
};

function Home() {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="text-center mb-14">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
          Built for SLIIT Students
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Welcome to{' '}
          <span className="text-blue-600">UniLearnHub</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
          Access learning resources, request missing lectures, join live classes,
          and create study plans — all in one place.
        </p>

        {user ? (
          <p className="inline-flex items-center gap-2 bg-green-50 text-green-700 font-medium px-4 py-2 rounded-full text-sm border border-green-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Welcome back, {user.username}!
          </p>
        ) : (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/signup"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm text-sm"
            >
              Get Started — It's Free
            </Link>
            <Link
              to="/login"
              className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {FEATURES.map((feature) => (
          <Link
            key={feature.title}
            to={feature.to}
            className={`group flex flex-col rounded-xl border p-6 transition-all hover:shadow-md ${cardColor[feature.color]}`}
          >
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${iconColor[feature.color]}`}
            >
              {feature.icon}
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-1.5">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed flex-1">
              {feature.description}
            </p>
            <span className="mt-4 text-xs font-semibold text-gray-400 group-hover:text-blue-500 transition-colors">
              Explore →
            </span>
          </Link>
        ))}
      </div>

      {/* Banner */}
      <div className="mt-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl px-8 py-10 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">
          Everything you need, in one hub
        </h2>
        <p className="text-blue-100 max-w-lg mx-auto text-sm">
          UniLearnHub is purpose-built for SLIIT undergraduates. Sign in with
          your campus email and take control of your academic journey.
        </p>
        {!user && (
          <Link
            to="/signup"
            className="inline-block mt-5 px-5 py-2.5 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-sm"
          >
            Create your account
          </Link>
        )}
      </div>
    </div>
  );
}

export default Home;
