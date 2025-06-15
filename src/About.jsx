import React from 'react';
import Nisadi from './assets/Nisadi.jpg';
import FeatureCard from './components/FeatureCard';
import TeamMember from './components/TeamMember';
import SuccessStory from './components/SuccessStory';
import ContactInfo from './components/ContactInfo';

function About() {
  return (   
        <div className="px-40 flex flex-1 justify-center py-5 w-full min-h-screen bg-slate-50">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#0a354b] tracking-light text-[32px] font-bold leading-tight min-w-72">About MyPath</p>
            </div>
            
            <h2 className="text-[#0a354b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Mission</h2>
            <p className="text-[#0a354b] text-base font-normal leading-normal pb-3 pt-1 px-4">
              At MyPath, our mission is to empower individuals in Sri Lanka to make informed career decisions by providing a comprehensive platform that bridges education,
              skills development, and employment opportunities. We strive to be the leading resource for career guidance, fostering personal and professional growth for all.
            </p>
            
            <h2 className="text-[#0a354b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Services We Offer</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <FeatureCard
                icon="GraduationCap"
                title="Career Assessments"
                description="Identify your strengths and interests with our personalized career assessments."
              />
              <FeatureCard
                icon="Briefcase"
                title="Skills Training"
                description="Develop in-demand skills through our curated training programs and workshops."
              />
              <FeatureCard
                icon="PresentationChart"
                title="Job Matching"
                description="Find the perfect job that matches your skills and career aspirations."
              />
              <FeatureCard
                icon="UsersThree"
                title="Expert Guidance"
                description="Connect with experienced career counselors for personalized advice and support."
              />
            </div>
            
            <h2 className="text-[#0a354b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Key Features</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <FeatureCard
                icon="MagnifyingGlass"
                title="Comprehensive Career Database"
                description="Explore a vast database of careers with detailed information on required skills, education, and job outlook."
              />
              <FeatureCard
                icon="UserCircle"
                title="Personalized User Profiles"
                description="Create a personalized profile to track your progress, skills, and career goals."
              />
              <FeatureCard
                icon="ChartLine"
                title="Career Path Visualization"
                description="Visualize potential career paths and progression within different industries."
              />
              <FeatureCard
                icon="Bookmark"
                title="Saved Careers and Jobs"
                description="Save your favorite careers and job postings for easy access and future reference."
              />
            </div>
            
            <h2 className="text-[#0a354b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Meet Our Team</h2>
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-8">
                <TeamMember
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuByly9ger-FzNgrnSR5Hu2NhIbu-DS8AnJFgia3JE5MN4qL8NMnXk2Kg9Wfo0vlHWqnyZW9UAFJoVa82P53nSot51GkNWnpH8CNjLaOmlnlQjI1rRZUniOyl80SOSeSzy6CU7udtIGm92CsV1G34xQI-FcnHdEzBdJ3T_FcR0SW7Jni-G_uqwTDelDKFnS_0OnsvBqPPvEEXJnLerfVu-bSuZRtGCUjLp4iMzAcBH4vHQhtqOHSD_uqrVJQdknvj5YEYqKxhp2hb9rv"
                  name="Pasindu Mathsara"
                  role="CEO & Founder"
                />
                <TeamMember
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuBhHw5j0Vpw-rkcXo4DCScZZcEeUI3zEfgtz03qhQFUqZTSnkdPcH_gmNW1amH23PoWP7YC_w5xbF89tbCsqcD8xdVYlzEFlzbrgLeGkYWwHh-MNQq2cDJEZ4A3GXYsYVz785UNeWw2QxLowqEgIipWfMhGWp2EcEJGHCF-4HYZj04hRMKNtJ67_lkUmh9gwmi_c-e79ON1jdOs6e1mLtNbBhPUa34CTszllsDwWrUFN194ACD71RiyJe7K4ZyaGBVvJKaBWE_k0diJ"
                  name="Imasha Kalpani"
                  role="Head of Career Services"
                />
                <TeamMember
                  image={Nisadi}
                  name="Nisadi Wijerathna"
                  role="Lead Skills Development"
                />
              </div>
            </div>
            
            <h2 className="text-[#0a354b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Impact Stories</h2>
            <div className="p-4">
              <SuccessStory
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuD1RC-msQnP5-PoiBmJbni6507cOZsBv1QmQw1p8wVRud8KEim3cSpkZlt5imCBNfcN4L_BB9owefqROXYOjzv0mt1pdGwC5xFkoRfq6Tw8SMGdiFCCEwIKM9-PXG1sX5Bl8in5jtKDOuduOSoFm5Gqw4_e3KiP35_dc4AdhMZMELtD3VDc7AqzQfW38nGCl-39mOt8BA68MRB5tK0wnniM-vJr1WRZLSp-kO1rC3XMXz2hRSLOjFpEzOg1AVrPUxB06M3BMUJsWPHm"
                tag="Success Story"
                title="From Dropout to Dream Job"
                description="After struggling to find direction, Sanjeewa used CareerConnect to discover his passion for technology. He completed a skills training program and landed a job at a leading tech company."
              />
            </div>
            <div className="p-4">
              <SuccessStory
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuBGNKnF3EWWYYf0XF7b5nEyeaynv22AIYKP4cs99qhBuE4KHrGjOcZZ92MIfCbOg9zOrslId33_HUvauOhUCdgPCYPAVyxEwAEUa0aSMcMPjwV7ZIIws2jLpU0NChalNoicGytcMX_Bhz2vhgMhOXF7HEl1vcrT7sg3GB57YAoPV5tNa5-E_39CcNP3kMR2RThPEzh_1Kq67W0u-5r7LKNCW56fFSP37ooeg1Ia5u-GHplab9cUvYki1qomg9uWY_oQtXV8O7sPG1dJ"
                tag="Success Story"
                title="Career Change at 40"
                description="Nirmala, a former teacher, felt unfulfilled in her career. With CareerConnect's guidance, she transitioned into a new role in project management, finding renewed purpose and satisfaction."
                reverse
              />
            </div>
            
            <h2 className="text-[#0a354b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Contact Us</h2>
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <ContactInfo label="Email" value="info@careerconnect.lk" />
              <ContactInfo label="Phone" value="+94 77 123 4567" />
              <ContactInfo label="Social Media" value="Facebook, LinkedIn, Twitter" />
            </div>
          </div>
        </div>
  );
};

export default About;