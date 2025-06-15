import React from 'react';
import logo from '../assets/logo.jpg';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-solid border-amber-50 px-10 py-3 w-full bg-blue-50">
        <div className="flex items-center gap-9">
         
          <img src={logo} alt="logo" width={48} height={48} />
          <Link to="/" className="[&_h2]:hover:no-underline"> <h2 className="text-[#003666] text-lg font-bold leading-tight tracking-[-0.015em]">MyPath</h2></Link>
         
          <div className="flex items-center gap-10">
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              About
            </Link>
           
            <Link to="/courses" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Courses
            </Link>
            
            <Link to="/careers" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Careers
            </Link>
            
            <Link to="/resources" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              CV Builder
            </Link>

            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Contact
            </Link>
          </div>
        </div>


      <div className="flex flex-1 justify-end gap-5">
        {/* Search bar */}
        <label>
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
            <div className="text-[#00355b] flex border-none bg-[#e7eef3] items-center justify-center pl-4 rounded-l-xl border-r-0">
              <Search size={20} className="text-[#00355b]" />
            </div>
            <input
              placeholder="Search"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#003564] focus:outline-0 focus:ring-0 border-none bg-[#e7eef3] focus:border-none h-full placeholder:text-[#4e7997] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              value=""
            />
          </div>
        </label>

        {/* Auth buttons */}
        <div className="flex gap-5">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e7eef3] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Sign Up</span>
          </button>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e7eef3] text-[#ffffff] text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Login</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
