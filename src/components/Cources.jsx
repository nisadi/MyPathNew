import React from 'react';

const CareerHub = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden" style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
      
        {/* Main Content */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Title Section */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#111518] tracking-light text-[32px] font-bold leading-tight">Courses & Workshops</p>
                <p className="text-[#5d7689] text-sm font-normal leading-normal">Enhance your skills with our curated courses and workshops.</p>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#eaeef1] pl-4 pr-2 hover:bg-[#d0d8e0] transition-colors">
                <p className="text-[#111518] text-sm font-medium leading-normal">Industry</p>
                <div className="text-[#111518]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </button>
              <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#eaeef1] pl-4 pr-2 hover:bg-[#d0d8e0] transition-colors">
                <p className="text-[#111518] text-sm font-medium leading-normal">Career Path</p>
                <div className="text-[#111518]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </button>
            </div>

            {/* Course Cards */}
            {[
              {
                title: "Digital Marketing Fundamentals",
                description: "Learn the basics of digital marketing, including SEO, social media, and content creation.",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuARZYBSlswxqepJkTkV3qxHdn5QHPWVZ9Yk5YYMSDHa1f7ld3bMiPo9Stbz8cF5YdJxg-1QBsCoCfmhjZr3JGybNEMSfWrakmFdfVU-uZhv88-TLNomPNYDlfQFZ7kXzYMHsYqzjpfnNjRSNI4L6qoxbLgXPYgpGFzquhN2FZXVbj5AjnufjX__Y6NvNvPdm9yvmaxvucJru8dSGUYC9QpDXCyTC0FWIZwdhx_SmBJG0dH9hg2ysvlvNAToBKlCWPZaW9VfVzl2FN6W"
              },
              {
                title: "Project Management Essentials",
                description: "Master the key principles of project management, from planning to execution.",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzX9DPr7ZZ05Cf1xY2xucb22nW2DXqU1Bam_SX35_NRCFxveatVXxdTWlW0TivWnaa9iIUuMLnd-kBzP46uGpFc6vpNyQGhEub7oDzHHRFCMY4Jj2xBaiOVLyd-5fHbU82DEGlNvd4DlzEWWZuQDL14tgLVf6xXJHDZ-v-Bzp-u4XtIPept4oHOTQ1Urifhfl9UMLetbXXAUlM_LFOC1HBG1H7JacdtCQ9NO8xg4vkagPMy9IRQPPMB02xhcHg8M5qDkC_u3N1YY3e"
              },
              {
                title: "Data Analysis with Python",
                description: "Gain practical skills in data analysis using Python, a powerful programming language.",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwVkQT4IBbFMvlrfWGNC-tngf3V7VkoRpMdVq-5gYlriVWE_kYat4YMEZvdKaODeWdl812KxTOG-Key1dV7zuQtH-0Nq_rrMMPnZPTSB150GTSJleaDRqaXvjy61EBLuOHad4YZG4QU-GpylrmSGe5e4b2d1oOwEwZQ19p1wBPFa2Og5VkQQVeP7gNooiFx6upaUAZXRyHEagrBqydBb2Fvjg02eEW52o1q5OV2EguzSmryWFQjRSa6mA6P5GPTxiNvDgGCtTzVtrd"
              },
              {
                title: "Graphic Design for Beginners",
                description: "Explore the fundamentals of graphic design, including typography, color theory, and layout.",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdIBZhPIUSXsWYCRQrd-ZKSB9X5_E5CjaCwIjNUajlxCrvBgVzWbjdRBVGfpJD2vcBLtV7R5bozMu3xrYTw4O0Wvn8Wyc4Z9Mx2DTffIyuJ23A9gyHZxuH8PxXRr0RPitbhJGhRXdcKtGrAwVuNpFZ9KCvkXBq0_pVzH-iGjCjuN394-qRKHCPJwHfUNsQCTWhOZGSYghGVVuOvMlMIULdjjRYQH5R7_jb13eoUhfW9YrF_8X3yOWedBylEC1NUw9izbyowvRB5Jr4"
              },
              {
                title: "Effective Communication Skills",
                description: "Improve your communication skills for professional success, covering verbal and written communication.",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7K-gGZeI0SBzeSJGNQ73G0xG-H1IkfL66huomXUL8RYNUezzTGiYh4eEGxJdov43p7UNPqUlyTKjByojz0SnpA-PsF8A7P-OaoDB6MwM4rsJpufgiHxlgDZJcBxDhY_5FfINavzpJE8FdUlOmsf6LSijJm0kfnPtEANlHVQAFJVDJQQRulOXlrntRFohm5ZalPd43an2X_5Cgd4cjOlG7jXWa1b50RTQBvPzvt6Pa0b_grWH8ixd1ClkrCXqgbjcVsfKy2yE5eXIG"
              }
            ].map((course, index) => (
              <div key={index} className="p-4">
                <div className="flex items-stretch justify-between gap-4 rounded-xl bg-gray-50 p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)] hover:shadow-md transition-shadow">
                  <div className="flex flex-[2_2_0px] flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#111518] text-base font-bold leading-tight">{course.title}</p>
                      <p className="text-[#5d7689] text-sm font-normal leading-normal">{course.description}</p>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#eaeef1] text-[#111518] text-sm font-medium leading-normal w-fit hover:bg-[#d0d8e0] transition-colors">
                      <span className="truncate">Enroll Now</span>
                    </button>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                    style={{ backgroundImage: `url("${course.image}")` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerHub;