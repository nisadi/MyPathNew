import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-50" style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}>
    

      {/* Main Content */}
      <div className="flex flex-1 justify-center items-center py-5 px-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-[#0d161b] text-2xl font-bold text-center pb-4">Welcome back</h2>
          
          {/* Username Field */}
          <div className="mb-4">
            <label className="block text-[#0d161b] text-sm font-medium mb-2">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-3 rounded-lg border text-[#000000] border-[#cfdde7] bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#128ee7] focus:border-transparent placeholder:text-[#4c799a]"
            />
          </div>

          {/* Password Field */}
          <div className="mb-2">
            <label className="block text-[#0d161b] text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg border text-[#000000] border-[#cfdde7] bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#128ee7] focus:border-transparent placeholder:text-[#4c799a]"
            />
          </div>

          {/* Forgot Password */}
          <div className="mb-6 text-right">
            <Link to="/forgot-password" className="text-[#4c799a] text-sm underline hover:text-blue-600">Forgot password?</Link>
          </div>

          {/* Login Button */}
          <button className="w-full py-3 px-5 bg-[#128ee7] text-white font-bold rounded-full hover:bg-[#0d7bc7] transition-colors mb-4">
            Login
          </button>

          {/* Sign Up Link */}
          <p className="text-[#4c799a] text-sm text-center">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 underline hover:text-blue-800">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;