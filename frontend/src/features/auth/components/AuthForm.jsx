// AuthForm is a reusable layout wrapper for authentication forms.
// Login.jsx and Signup.jsx implement their own full form logic directly,
// but this component can be used for simpler or future auth screens.
import React from 'react';

function AuthForm({ title, subtitle, onSubmit, error, loading, submitLabel, children, footer }) {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            {subtitle && (
              <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
            )}
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-4">
            {children}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm mt-1"
            >
              {loading ? 'Please wait…' : submitLabel}
            </button>
          </form>

          {footer && (
            <div className="text-center text-sm text-gray-500 mt-6">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
