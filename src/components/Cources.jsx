import React, { useState } from 'react';

const CareerHub = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [showEnrollmentModal, setShowEnrollmentModal] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState({
    industry: null,
    careerPath: null
  });

  const courses = [
    {
      id: 1,
      title: "Digital Marketing Fundamentals",
      description: "Learn the basics of digital marketing, including SEO, social media, and content creation.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      duration: "4 weeks",
      level: "Beginner",
      industry: "Marketing",
      careerPath: "Digital Marketing"
    },
    {
      id: 2,
      title: "Project Management Essentials",
      description: "Master the key principles of project management, from planning to execution.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
      duration: "6 weeks",
      level: "Intermediate",
      industry: "Business",
      careerPath: "Management"
    },
    {
      id: 3,
      title: "Data Analysis with Python",
      description: "Gain practical skills in data analysis using Python, a powerful programming language.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      duration: "8 weeks",
      level: "Intermediate",
      industry: "Technology",
      careerPath: "Data Science"
    },
    {
      id: 4,
      title: "Graphic Design for Beginners",
      description: "Explore the fundamentals of graphic design, including typography, color theory, and layout.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
      duration: "5 weeks",
      level: "Beginner",
      industry: "Creative",
      careerPath: "Design"
    },
    {
      id: 5,
      title: "Effective Communication Skills",
      description: "Improve your communication skills for professional success, covering verbal and written communication.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      duration: "3 weeks",
      level: "Beginner",
      industry: "Business",
      careerPath: "Soft Skills"
    }
  ];

   const filteredCourses = courses.filter(course => {
    const matchesSearch = searchTerm === '' || 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesIndustry = !filter.industry || course.industry === filter.industry;
    const matchesCareerPath = !filter.careerPath || course.careerPath === filter.careerPath;
    
    return matchesSearch && matchesIndustry && matchesCareerPath;
  });


  const enrollInCourse = (course) => {
    setCurrentCourse(course);
    setShowEnrollmentModal(true);
  };

  const confirmEnrollment = () => {
    if (!enrolledCourses.some(c => c.id === currentCourse.id)) {
      setEnrolledCourses([...enrolledCourses, currentCourse]);
    }
    setShowEnrollmentModal(false);
  };

  const industries = [...new Set(courses.map(course => course.industry))];
  const careerPaths = [...new Set(courses.map(course => course.careerPath))];

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden" style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}>
      {/* Main Content */}
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          {/* Title and Search Section */}
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-[#111518] tracking-light text-[32px] font-bold leading-tight">Courses & Workshops</p>
              <p className="text-[#5d7689] text-sm font-normal leading-normal">Enhance your skills with our curated courses and workshops.</p>
            </div>

            <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-3 p-3 flex-wrap pr-4">
            <div className="relative">
              <button 
                className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#eaeef1] pl-4 pr-2 hover:bg-[#d0d8e0] transition-colors"
                onClick={() => setFilter({...filter, industry: null})}
              >
                <p className="text-[#ffffff] text-sm font-medium leading-normal">
                  {filter.industry ? `Industry: ${filter.industry}` : "All Industries"}
                </p>
                <div className="text-[#ffffff]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </button>
              {filter.industry && (
                <div className="absolute z-10 mt-1 w-48 rounded-md bg-white shadow-lg">
                  <div className="py-1">
                    {industries.map((industry, i) => (
                      <button
                        key={i}
                        className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                        onClick={() => setFilter({...filter, industry})}
                      >
                        {industry}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button 
                className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#eaeef1] pl-4 pr-2 hover:bg-[#d0d8e0] transition-colors"
                onClick={() => setFilter({...filter, careerPath: null})}
              >
                <p className="text-[#ffffff] text-sm font-medium leading-normal">
                  {filter.careerPath ? `Career Path: ${filter.careerPath}` : "All Career Paths"}
                </p>
                <div className="text-[#ffffff]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </button>
              {filter.careerPath && (
                <div className="absolute z-10 mt-1 w-48 rounded-md bg-white shadow-lg">
                  <div className="py-1">
                    {careerPaths.map((path, i) => (
                      <button
                        key={i}
                        className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                        onClick={() => setFilter({...filter, careerPath: path})}
                      >
                        {path}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Course Cards */}
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div key={course.id} className="p-4">
                <div className="flex items-stretch justify-between gap-4 rounded-xl bg-gray-50 p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)] hover:shadow-md transition-shadow">
                  <div className="flex flex-[2_2_0px] flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#111518] text-base font-bold leading-tight">{course.title}</p>
                      <p className="text-[#5d7689] text-sm font-normal leading-normal">{course.description}</p>
                      <div className="flex gap-2 mt-2">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{course.duration}</span>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">{course.level}</span>
                        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">{course.industry}</span>
                      </div>
                    </div>
                    <button 
                      className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse text-[#111518] text-sm font-medium leading-normal w-fit transition-colors ${
                        enrolledCourses.some(c => c.id === course.id) 
                          ? 'bg-green-100 hover:bg-green-200' 
                          : 'bg-[#eaeef1] hover:bg-[#d0d8e0]'
                      }`}
                      onClick={() => enrolledCourses.some(c => c.id === course.id) 
                        ? alert(`You're already enrolled in this course!`)
                        : enrollInCourse(course)
                      }
                    >
                      <span className="truncate">
                        {enrolledCourses.some(c => c.id === course.id) ? 'Enrolled ✓' : 'Enroll Now'}
                      </span>
                    </button>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                    style={{ backgroundImage: `url("${course.image}")` }}
                  ></div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500">
              No courses match your filters. Try adjusting your search criteria.
            </div>
          )}
        </div>
      </div>

      {/* Enrollment Modal */}
      {showEnrollmentModal && currentCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Confirm Enrollment</h3>
            <p className="mb-4">You're about to enroll in: <strong>{currentCourse.title}</strong></p>
            <div className="flex gap-2">
              <button 
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => setShowEnrollmentModal(false)}
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={confirmEnrollment}
              >
                Confirm Enrollment
              </button>
            </div>
          </div>
        </div>
      )}
     </div>
  );
};

export default CareerHub;