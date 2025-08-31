import React, { useState } from 'react';
import { Instagram, Mail, Send, MapPin, GraduationCap, Award } from 'lucide-react';

const crewMembers = [
  {
    id: 1,
    name: 'Elan Camaret',
    role: 'President',
    photo: '/images/crew/elan.png',
    description: "Hey. I'm Elan, the Surf Club president. I've been surfing pretty much my whole life and I'm still as hooked as day one. My favorite thing about the club is all the fun trips we take and all the great memories that come from them. I'm so stoked to make more this year!",
    funFact: "Surfing since childhood"
  },
  {
    id: 2,
    name: 'Alex Wagenman',
    role: 'Vice President',
    photo: '/images/crew/Alex.png',
    description: "Hey I'm Alex, stoked to be your VP! I'm from New Mexico and am now on my third year here chasing swells in Miami. I'm a film/TV actor and am double-majoring in Finance and International Business. My favorite experience with FIU Surf is watching the sunrise in the lineup with good waves and even better company.",
    funFact: "Film/TV Actor from New Mexico"
  },
  {
    id: 3,
    name: 'Nathan Jennings',
    role: 'Treasurer',
    photo: '/images/crew/Nathan.png',
    description: "Hey guys! I'm Nathan, FIU Surf's Treasurer and 4th year Accounting-Marketing major. I went into this club following 2 of my friends, just looking for cool parties with cool people, but I ended up finding so much more: a new favorite hobby and dozens of the coolest friends ever.",
    funFact: "Accounting-Marketing Major"
  },
];

const CrewSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedMember, setExpandedMember] = useState(null);

  const handleEmailSubmit = () => {
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  const toggleMemberExpansion = (memberId) => {
    setExpandedMember(expandedMember === memberId ? null : memberId);
  };

  const getRoleColor = (role) => {
    switch (role.toLowerCase()) {
      case 'president':
        return 'from-blue-600 to-blue-800';
      case 'vice president':
        return 'from-purple-600 to-purple-800';
      case 'treasurer':
        return 'from-green-600 to-green-800';
      default:
        return 'from-gray-600 to-gray-800';
    }
  };

  const getRoleIcon = (role) => {
    switch (role.toLowerCase()) {
      case 'president':
        return <Award className="w-5 h-5" />;
      case 'vice president':
        return <GraduationCap className="w-5 h-5" />;
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
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Crew</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our passionate leadership team dedicated to creating the best surf experience at FIU. 
            We're more than a club, we're a family riding the waves together! 🌊
          </p>
        </div>

        {/* Crew Members in Single Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {crewMembers.map((member, index) => (
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
                  <div className={`bg-gradient-to-r ${getRoleColor(member.role)} text-white px-3 py-1 rounded-full shadow-lg flex items-center gap-2`}>
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
                  <p className={`text-gray-700 text-xs leading-relaxed transition-all duration-300 ${
                    expandedMember === member.id ? 'line-clamp-none' : 'line-clamp-3'
                  }`}>
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

        {/* Join Us Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Group Photo */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 overflow-hidden">
                <img
                  src="/images/crew/group-photo.jpg"
                  alt="FIU Surf Club Group Photo"
                  className="w-full h-80 object-cover"
                  onError={(e) => {
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-80 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                        <div class="text-center">
                          <div class="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                            <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                          </div>
                          <p class="text-gray-500 font-medium">Group Photo</p>
                          <p class="text-gray-400 text-sm">Coming Soon</p>
                        </div>
                      </div>
                    `;
                  }}
                />
                <div className="p-6">
                  <p className="text-xl font-bold text-gray-900 text-center">
                    We're more than a club, we're a family! 🌊
                  </p>
                </div>
              </div>
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
                
                {/* Instagram Link */}
                <a
                  href="https://instagram.com/fiusurfclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-6 py-4 rounded-2xl font-bold text-white transition-all duration-300 shadow-lg hover:shadow-xl mb-6 w-full justify-center hover:scale-105"
                >
                  <Instagram className="w-6 h-6" />
                  Follow @FIUSurfClub
                </a>

                {/* Email Signup */}
                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Stay Updated</h4>
                      <p className="text-blue-100 text-sm">Get event notifications & surf reports</p>
                    </div>
                  </div>
                  
                  {isSubmitted ? (
                    <div className="bg-green-500 text-white py-4 px-6 rounded-xl font-bold text-center shadow-lg">
                      🌊 Awesome! Welcome to the crew - check your email!
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all font-medium"
                      />
                      <button
                        onClick={handleEmailSubmit}
                        disabled={isSubmitting || !email}
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:from-green-400 disabled:to-emerald-500 px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 flex items-center gap-3 justify-center shadow-lg hover:scale-105 disabled:scale-100"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Join the Crew!
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrewSection;
