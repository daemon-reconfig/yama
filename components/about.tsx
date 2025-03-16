"use client";
import React from 'react';
import { Clock, Calendar, Users, Terminal, Shield, ChevronRight } from 'lucide-react';

const YamaHomePage = () => {
  return (
    <div className="bg-zinc-900 min-h-screen font-sans text-zinc-100">
      {/* Header/Navigation */}
      {/* <header className="bg-zinc-800 py-4 px-6 sticky top-0 z-10 border-b border-green-500/20">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="text-green-500" size={32} />
            <h1 className="text-2xl font-bold text-green-500">YAMA</h1>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li><a href="#" className="hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#events" className="hover:text-green-400 transition-colors">Events</a></li>
              <li><a href="#about" className="hover:text-green-400 transition-colors">About</a></li>
              <li><a href="#team" className="hover:text-green-400 transition-colors">Team</a></li>
            </ul>
          </nav>
          <div className="flex gap-3">
            <a href="/registration" className="px-4 py-2 bg-green-600 hover:bg-green-500 transition-colors rounded-md font-medium">Registration</a>
            <a href="/changelog" className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 transition-colors rounded-md font-medium">Changelog</a>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="bg-zinc-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-green-500"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-green-500"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-green-500 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-1">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Join <span className="text-green-500">YAMA</span></h1>
            <p className="text-xl text-zinc-300 mb-8">YAMA is a student-led cybersecurity community focused on hands-on learning, CTFs, workshops, and growing the next generation of security experts.</p>
            <div className="flex gap-4">
              <a href="#events" className="px-6 py-3 bg-green-600 hover:bg-green-500 transition-colors rounded-md font-medium flex items-center gap-2">
                Upcoming Events <ChevronRight size={16} />
              </a>
              <a href="#about" className="px-6 py-3 bg-zinc-700 hover:bg-zinc-600 transition-colors rounded-md font-medium">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-zinc-900 py-12 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold text-green-500 mb-2">3</h3>
            <p className="text-zinc-400">Events Organized</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold text-green-500 mb-2">300+</h3>
            <p className="text-zinc-400">Student Members</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-bold text-green-500 mb-2">7</h3>
            <p className="text-zinc-400">Sponsers</p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="events" className="py-16 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
            <p className="text-zinc-400">Join us for our exciting cybersecurity events and workshops</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Featured Event */}
            <div className="bg-zinc-800 rounded-lg overflow-hidden border border-green-500/30 col-span-full">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">Featured</span>
                  <span className="text-zinc-400 flex items-center gap-1">
                    <Calendar size={14} /> March 18, 2025 - March 22, 2025
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Road To NCIIPC Pentathon</h3>
                <p className="text-zinc-300 mb-4">Join Road to Pentathon for NCIIPC-AICTE Pentathon 2025 event preparation within the college with respect to VAPT and CTF Challenges.</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-1 text-zinc-400">
                    <Clock size={16} /> 09:30 - 16:30
                  </div>
                  <div className="flex items-center gap-1 text-zinc-400">
                    <Users size={16} /> 100+ participants
                  </div>
                  <div className="flex items-center gap-1 text-zinc-400">
                    <Terminal size={16} /> All skill levels
                  </div>
                </div>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdNwqvPNikwS5XwiIlhuFGJBZFWpi2y9dt_JIAlXcmrGpIrFg/viewform" className="inline-block px-4 py-2 bg-green-600 hover:bg-green-500 transition-colors rounded-md font-medium">Register for CTF</a>
              </div>
            </div>
            
            
            {/* Regular Event */}
            <div className="bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-3 py-1 bg-zinc-700 text-zinc-300 rounded-full text-sm font-medium">Hands-on</span>
                  <span className="text-zinc-400 flex items-center gap-1">
                    <Calendar size={14} /> 21 September, 2024
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">Deceptions</h3>
                <p className="text-zinc-300 mb-4">Our first CTF event, 'Deceptions'</p>
                {/* <a href="#register-lab" className="text-green-500 hover:text-green-400 font-medium flex items-center gap-1">
                  Learn more <ChevronRight size={16} />
                </a> */}
              </div>
            </div>
            
            {/* Regular Event */}
            <div className="bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-3 py-1 bg-zinc-700 text-zinc-300 rounded-full text-sm font-medium">hands-on</span>
                  <span className="text-zinc-400 flex items-center gap-1">
                    <Calendar size={14} /> 23 October, 2024
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">Hexplore</h3>
                <p className="text-zinc-300 mb-4">Hands on CTF and Hacking Workshop.</p>
                {/* <a href="#register-panel" className="text-green-500 hover:text-green-400 font-medium flex items-center gap-1">
                  Learn more <ChevronRight size={16} />
                </a> */}
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a href="/changelog" className="inline-block px-6 py-3 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-md font-medium border border-zinc-700">
              View All Events
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">About <span className="text-green-500">YAMA</span></h2>
              <p className="text-zinc-300 mb-4">YAMA is a student-led cybersecurity community dedicated to raising awareness and providing hands-on learning opportunities in all aspects of information security.</p>
              <p className="text-zinc-300 mb-6">Our mission is to foster a collaborative environment where students can develop practical skills, network with industry professionals, and grow as security practitioners.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-700 p-4 rounded-lg">
                  <h3 className="font-bold mb-2 text-green-400">Workshops</h3>
                  <p className="text-zinc-300 text-sm">Regular hands-on workshops on various cybersecurity topics</p>
                </div>
                <div className="bg-zinc-700 p-4 rounded-lg">
                  <h3 className="font-bold mb-2 text-green-400">CTF Events</h3>
                  <p className="text-zinc-300 text-sm">Competitive hacking challenges to test and improve your skills</p>
                </div>
                <div className="bg-zinc-700 p-4 rounded-lg">
                  <h3 className="font-bold mb-2 text-green-400">Guest Speakers</h3>
                  <p className="text-zinc-300 text-sm">Learn from industry professionals and academic experts</p>
                </div>
                <div className="bg-zinc-700 p-4 rounded-lg">
                  <h3 className="font-bold mb-2 text-green-400">Community</h3>
                  <p className="text-zinc-300 text-sm">Network with like-minded peers interested in cybersecurity</p>
                </div>
              </div>
            </div>
            <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-700 relative">
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-green-500 rounded-full"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-green-500 rounded-full"></div>
              <h3 className="text-xl font-bold mb-4">Why Join YAMA?</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="mt-1 bg-green-500/20 p-1 rounded text-green-400">
                    <Shield size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-100">Practical Skills</h4>
                    <p className="text-zinc-400 text-sm">Develop hands-on cybersecurity skills applicable in the real world</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 bg-green-500/20 p-1 rounded text-green-400">
                    <Users size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-100">Network</h4>
                    <p className="text-zinc-400 text-sm">Connect with peers, mentors, and industry professionals</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 bg-green-500/20 p-1 rounded text-green-400">
                    <Terminal size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-100">Competitions</h4>
                    <p className="text-zinc-400 text-sm">Participate in CTFs and other security competitions</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 bg-green-500/20 p-1 rounded text-green-400">
                    <Calendar size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-100">Regular Events</h4>
                    <p className="text-zinc-400 text-sm">Attend workshops, talks, and social events throughout the year</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
{/* CTA Section */}
{/* <section className="py-16 bg-gradient-to-b from-zinc-900 to-zinc-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join the <span className="text-green-500">YAMA</span> Community?</h2>
          <p className="text-zinc-300 mb-8 text-lg">Whether you're a beginner or an experienced security enthusiast, YAMA welcomes all students passionate about cybersecurity.</p>
          <a href="/registration" className="inline-block px-8 py-4 bg-green-600 hover:bg-green-500 transition-colors rounded-md font-medium text-lg">Register Now</a>
          <div className="mt-10 p-6 bg-zinc-800 rounded-lg border border-zinc-700 inline-block">
            <p className="text-zinc-300 mb-2">Have questions? Reach out to us</p>
            <p className="text-green-500 font-medium">contact@yama-security.edu</p>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      {/* <section id="team" className="py-16 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-2">Our Team</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Meet the dedicated students and faculty who make YAMA possible</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 text-center">
              <div className="h-40 bg-zinc-700 flex items-center justify-center">
                <Users size={64} className="text-green-500 opacity-60" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Alex Johnson</h3>
                <p className="text-zinc-400 text-sm mb-2">President</p>
                <p className="text-zinc-300 text-sm">Senior, Computer Science</p>
              </div>
            </div>
            
            <div className="bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 text-center">
              <div className="h-40 bg-zinc-700 flex items-center justify-center">
                <Users size={64} className="text-green-500 opacity-60" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Taylor Smith</h3>
                <p className="text-zinc-400 text-sm mb-2">Vice President</p>
                <p className="text-zinc-300 text-sm">Junior, Cybersecurity</p>
              </div>
            </div>
            
            <div className="bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 text-center">
              <div className="h-40 bg-zinc-700 flex items-center justify-center">
                <Users size={64} className="text-green-500 opacity-60" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Jamie Rivera</h3>
                <p className="text-zinc-400 text-sm mb-2">Events Coordinator</p>
                <p className="text-zinc-300 text-sm">Senior, Information Systems</p>
              </div>
            </div>
            
            <div className="bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 text-center">
              <div className="h-40 bg-zinc-700 flex items-center justify-center">
                <Users size={64} className="text-green-500 opacity-60" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Dr. Maya Patel</h3>
                <p className="text-zinc-400 text-sm mb-2">Faculty Advisor</p>
                <p className="text-zinc-300 text-sm">Professor, Computer Science</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <a href="#team-full" className="inline-block px-6 py-3 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-md font-medium border border-zinc-700">
              View Full Team
            </a>
          </div>
        </div>
      </section> */}
      
      {/* Newsletter Section */}
      {/* <section className="py-12 bg-zinc-800 border-t border-zinc-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
              <p className="text-zinc-300">Subscribe to our newsletter for event announcements, cybersecurity tips, and community news</p>
            </div>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 bg-zinc-900 rounded-md border border-zinc-600 focus:border-green-500 outline-none"
              />
              <button className="px-6 py-3 bg-green-600 hover:bg-green-500 transition-colors rounded-md font-medium whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="bg-zinc-900 py-12 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="text-green-500" size={24} />
                <h2 className="text-xl font-bold text-green-500">YAMA</h2>
              </div>
              <p className="text-zinc-400 mb-6">Your Academic Cybersecurity Awareness Community</p>
              <p className="text-zinc-500 text-sm">© 2025 YAMA. All rights reserved.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#events" className="text-zinc-400 hover:text-green-400 transition-colors">Events</a></li>
                <li><a href="#about" className="text-zinc-400 hover:text-green-400 transition-colors">About Us</a></li>
                <li><a href="#team" className="text-zinc-400 hover:text-green-400 transition-colors">Our Team</a></li>
                <li><a href="/registration" className="text-zinc-400 hover:text-green-400 transition-colors">Registration</a></li>
                <li><a href="/changelog" className="text-zinc-400 hover:text-green-400 transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-zinc-400 hover:text-green-400 transition-colors">Discord</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-green-400 transition-colors">GitHub</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-green-400 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-green-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="text-zinc-400 hover:text-green-400 transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default YamaHomePage;