import React, { useState } from 'react';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { RiBuilding4Line } from 'react-icons/ri';

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="min-h-screen  bg-[#0D2A1F] lex items-center justify-center p-6 antialiased font-sans">
      
      {/* Main Sharp Container */}
      <div className="w-full max-w-[410px] bg-[#0D2A1F] border border-emerald-950/60 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.6)]">
        
        {/* Header / Logo */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-12 h-12 bg-[#1A231F] border border-emerald-900/30 rounded-xl flex items-center justify-center text-white mb-4 shadow-sm">
            <RiBuilding4Line size={24} />
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-white">
            Welcome Back
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Enter your credentials to access CTV PMS
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Email Input */}
          <div className="space-y-2">
            <label className="text-[11px] font-medium uppercase tracking-widest text-gray-400 block">
              Email Address
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-white flex items-center justify-center pointer-events-none">
                <FiMail size={18} />
              </span>
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-12 pr-4 py-3 bg-[#1A231F] border border-emerald-900/30 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-150"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-[11px] font-medium uppercase tracking-widest text-gray-400">
                Password
              </label>
              <a href="#forgot" className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors">
                Forgot?
              </a>
            </div>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-white flex items-center justify-center pointer-events-none">
                <FiLock size={18} />
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full pl-12 pr-12 py-3 bg-[#1A231F] border border-emerald-900/30 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-150"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-white hover:text-gray-300 transition-colors flex items-center justify-center"
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center pt-1">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 rounded bg-[#1A231F] border-emerald-900/40 text-emerald-600 focus:ring-0 cursor-pointer accent-emerald-600"
            />
            <label htmlFor="remember" className="ml-2.5 text-xs text-gray-400 cursor-pointer select-none">
              Keep me logged in
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-medium rounded-xl text-sm transition-all duration-150 shadow-md shadow-black/30 block mt-2"
          >
            Sign In
          </button>
        </form>

      </div>
    </div>
  );
};

export default Signin;