import React, { useState } from 'react';
import { Instagram, UserPlus, MapPin, GraduationCap, Award, ChevronLeft, ChevronRight } from 'lucide-react';

const crewMembers = [
  {
    id: 1,
    name: 'Elan',
    role: 'President',
    photo: '/images/crew/elan.png',
    description:
      "Hey. I'm Elan, the Surf Club president. I've been surfing pretty much my whole life and I'm still as hooked as day one. My favorite thing about the club is all the fun trips we take and all the great memories that come from them. I'm so stoked to make more this year!",
    funFact: 'Surfing since childhood',
  },
  {
    id: 2,
    name: 'Alex',
    role: 'Vice President',
    photo: '/images/crew/alx.png',
    description:
      "Hey I'm Alex, stoked to be your VP! I'm from New Mexico and am now on my third year here chasing swells in Miami. I'm a film/TV actor and am double-majoring in Finance and International Business. My favorite experience with FIU Surf is watching the sunrise in the lineup with good waves and even better company.",
    funFact: 'Film/TV Actor from New Mexico',
  },
  {
    id: 9,
    name: 'Laisha',
    role: 'Tech Director',
    photo: '/images/crew/Lb.png',
    description:
      "Hey! I'm Laisha, I'm studying CS at FIU, basically all that you see I created it, except for the fire pics! I love to travel, be outside all the time and sometimes you will find me making music.",
    funFact: 'Tech Enthusiast',
  },
  {
    id: 3,
    name: 'Nathan Jennings',
    role: 'Treasurer',
    photo: '/images/crew/Nathan.png',
    description:
      "Hey guys! I'm Nathan, FIU Surf's Treasurer and 4th year Accounting-Marketing major. I went into this club following 2 of my friends, just looking for cool parties with cool people, but I ended up finding so much more: a new favorite hobby and dozens of the coolest friends ever.",
    funFact: 'Accounting-Marketing Major',
  },
  {
    id: 4,
    name: 'Dani',
    role: 'Secretary',
    photo: '/images/crew/Daniela.png',
    description:
      "Hey y'all! I'm Daniela, your Surf Club secretary. I'm from Venezuela and a senior majoring in Biology. I caught my first waves with this club, and I'm so proud of the crew, the community, and all the memories we've made. Stoked for another year of good vibes, see you in the lineup!",
    funFact: 'From Venezuela 🌊',
  },
  {
    id: 5,
    name: 'Ava',
    role: 'Risk Manager',
    photo: '/images/crew/Ava.png',
    description:
      "Whats up! I'm Ava, risk manager. I'm majoring in kinesiology & exercise science, class of 2027. Here to make sure the only wipe outs are in the water, not the hospital 🤞",
    funFact: 'Keeps us safe!',
  },
  {
    id: 6,
    name: 'Michelle',
    role: 'Media Director',
    photo: '/images/crew/michelle.png',
    description:
      "Hey gang! My name is Michelle and I'm a senior double majoring in Marine Biology and Natural and Applied Sciences. I love surfing, rock climbing, and filming. If you see me, I'll probably have a camera in my hands.",
    funFact: 'Always filming 🎥',
  },
  {
    id: 7,
    name: 'Mia',
    role: 'Marketing',
    photo: '/images/crew/Mia.png',
    description:
      "Hi everyone my name is Mia, I'm a third year student here at FIU studying Marketing! I started learning to surf Feb 2024 after joining the club and my favorite memory was our insane Puerto Rico Trip last year!🤙",
    funFact: 'Puerto Rico trip lover',
  },
  {
    id: 8,
    name: 'David',
    role: 'Competition Director',
    photo: '/images/crew/David.png',
    description:
      "Hi guys, my name is David! I'm a 3rd year Earth Science major. I like competing in Triathlons and flying on the weekends. I joined the club last year and was lucky enough to become the Comp Director too!",
    funFact: 'Triathlete & Pilot ✈️',
  },
];

const CrewSection = () => {
  const [expandedMember, setExpandedMember] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleMemberExpansion = (memberId) => {
    setExpandedMember(expandedMember === memberId ? null : memberId);
  };

  // Calculate total pages (groups of 3)
  const totalPages = Math.ceil(crewMembers.length / 3);
  const currentPage = Math.floor(currentIndex / 3);

  const nextSlide = () => {
    if (currentPage < totalPages - 1) {
      setCurrentIndex((currentPage + 1) * 3);
    }
  };

  const prevSlide = () => {
    if (currentPage > 0) {
      setCurrentIndex((currentPage - 1) * 3);
    }
  };

  const getRoleColor = (role) => {
    switch (role.toLowerCase()) {
      case 'president':
        return 'from-blue-600 to-blue-800';
      case 'vice president':
        return 'from-purple-600 to-purple-800';
      case 'treasurer':
        return 'from-green-600 to-green-800';
      case 'secretary':
        return 'from-pink-600 to-pink-800';
      case 'risk manager':
        return 'from-red-600 to-red-800';
      case 'media director':
        return 'from-yellow-600 to-yellow-800';
      case 'marketing':
        return 'from-indigo-600 to-indigo-800';
      case 'competition director':
        return 'from-teal-600 to-teal-800';
      case 'tech director':
        return 'from-gray-600 to-gray-800';
      default:
        return 'from-gray-600 to-gray-800';
    }
  };

  const getRoleIcon = (role) => {
    switch (role.toLowerCase()) {
      case 'president':
        return <Award className="w-5 h-5" />;
      case 'vice president':
        return <Award className="w-5 h-5" />;
      case 'treasurer':
        return <MapPin className="w-5 h-5" />;
      default:
        return <Award className="w-5 h-5" />;
    }
  };

  return (
    <section id="crew" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 mb-6">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Crew
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our passionate leadership team dedicated to creating the best surf experience at FIU.
            We're more than a club, we're a family riding the waves together! 🌊
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-7xl mx-auto mb-20 px-16">
          {/* Left Arrow - More Separated */}
          <button
            onClick={prevSlide}
            disabled={currentPage === 0}
            className="absolute -left-8 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 border border-gray-200 group"
          >
            <ChevronLeft className="w-7 h-7 text-gray-700 group-hover:text-blue-600 transition-colors" />
          </button>

          {/* Crew Cards Container with Smooth Transition */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {/* Group cards by pages of 3 */}
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {crewMembers.slice(pageIndex * 3, (pageIndex + 1) * 3).map((member) => (
                      <div
                        key={member.id}
                        className="group bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                      >
                        {/* Member Image */}
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={member.photo}
                            alt={member.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              e.target.src = '/images/placeholder-avatar.jpg';
                            }}
                          />

                          {/* Role Badge */}
                          <div className="absolute top-3 left-3">
                            <div
                              className={`bg-gradient-to-r ${getRoleColor(
                                member.role
                              )} text-white px-3 py-1 rounded-full shadow-lg flex items-center gap-2`}
                            >
                              {getRoleIcon(member.role)}
                              <span className="font-semibold text-xs">{member.role}</span>
                            </div>
                          </div>
                        </div>

                        {/* Member Info */}
                        <div className="p-3">
                          <div className="text-center mb-2">
                            <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                            <p className="text-blue-600 font-medium text-sm">{member.funFact}</p>
                          </div>

                          {/* Description */}
                          <div className="text-center">
                            <p
                              className={`text-gray-700 text-xs leading-relaxed transition-all duration-300 ${
                                expandedMember === member.id ? 'line-clamp-none' : 'line-clamp-3'
                              }`}
                            >
                              {member.description}
                            </p>
                            <button
                              onClick={() => toggleMemberExpansion(member.id)}
                              className="text-blue-600 hover:text-blue-800 font-medium text-xs mt-1 transition-colors"
                            >
                              {expandedMember === member.id ? 'Read Less' : 'Read More'}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow - More Separated */}
          <button
            onClick={nextSlide}
            disabled={currentPage >= totalPages - 1}
            className="absolute -right-8 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 border border-gray-200 group"
          >
            <ChevronRight className="w-7 h-7 text-gray-700 group-hover:text-blue-600 transition-colors" />
          </button>

          {/* Page Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * 3)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentPage === index 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Join Us Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Group Photo */}
            <div className="relative w-full h-[500px] lg:h-[700px]">
              <img
                src="/images/crew/group1.png"
                alt="Group Photo"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Join Us Card */}
            <div className="bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 text-center">Join the Wave! 🏄‍♂️</h3>
                <p className="text-blue-100 mb-6 text-center text-lg">
                  Ready to catch some waves and make lifelong friends? Connect with us!
                </p>
                
                {/* Join Form Button */}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfiBjwcwiqWjNG6JABtm4GXLe4oDjTNi1nNIVM5u1l1eiQorQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg w-full justify-center mb-4"
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  Join the Club
                </a>
                
                {/* Instagram Link */}
                <a
                  href="https://www.instagram.com/fiusurf/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-6 py-4 rounded-2xl font-bold text-white transition-all duration-300 shadow-lg hover:shadow-xl w-full justify-center hover:scale-105"
                >
                  <Instagram className="w-6 h-6" />
                  Follow @FIUSurf
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrewSection;
