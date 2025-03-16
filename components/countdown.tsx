import React, { useState } from "react";
import {
  Bell,
  Calendar,
  Flag,
  Users,
  Shield,
  ChevronRight,
  BookOpen,
  Code,
  Terminal,
  Trophy,
} from "lucide-react";

const Countdown = () => {
  const [eventExpanded, setEventExpanded] = useState(false);

  // Sample upcoming events
  const upcomingEvents = [
    {
      title: "Web Exploitation Workshop",
      date: "March 21, 2025",
      description:
        "Learn practical techniques to identify and exploit common web vulnerabilities.",
    },
    {
      title: "YAMA CTF Competition",
      date: "April 5-6, 2025",
      description:
        "24-hour Capture The Flag competition with prizes for top performers.",
    },
    {
      title: "Network Security Fundamentals",
      date: "April 15, 2025",
      description:
        "Hands-on workshop covering network security principles and tools.",
    },
  ];

  // Toggle event expansion
  const toggleEvents = () => {
    setEventExpanded(!eventExpanded);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100 font-sans">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-slate-800 to-slate-900 px-4 py-12 md:py-24">
        <div className="relative z-10 container mx-auto max-w-6xl">
          <div className="mb-8 flex items-center">
            <Shield className="h-12 w-12 text-cyan-400 mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              YAMA
            </h1>
          </div>

          <h2 className="text-xl md:text-3xl mb-6 max-w-3xl font-medium text-gray-200">
            Your campus destination for cybersecurity skills, challenges, and
            community
          </h2>

          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex">
            <a
              href="#registration"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-medium text-lg inline-flex items-center justify-center transition duration-200 shadow-lg shadow-cyan-500/20"
            >
              Register Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#events"
              className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-medium text-lg inline-flex items-center justify-center transition duration-200"
            >
              Upcoming Events
            </a>
          </div>
        </div>

        {/* Abstract cybersecurity graphics background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* What we do section */}
        <section className="py-16 px-4 bg-slate-800">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-10 text-center">What We Do</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-700 p-6 rounded-xl hover:bg-slate-600 transition-all duration-200">
                <Trophy className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">CTF Competitions</h3>
                <p className="text-gray-300">
                  Participate in our regular Capture The Flag competitions to
                  test your skills against your peers and win prizes.
                </p>
              </div>

              <div className="bg-slate-700 p-6 rounded-xl hover:bg-slate-600 transition-all duration-200">
                <Terminal className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Hands-on Workshops</h3>
                <p className="text-gray-300">
                  Learn practical cybersecurity skills through our interactive
                  workshops led by industry professionals and faculty.
                </p>
              </div>

              <div className="bg-slate-700 p-6 rounded-xl hover:bg-slate-600 transition-all duration-200">
                <Users className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Community Network</h3>
                <p className="text-gray-300">
                  Connect with like-minded students, mentors, and professionals
                  in the cybersecurity field.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section
          id="events"
          className="py-16 px-4 bg-gradient-to-b from-slate-900 to-slate-800"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold">Upcoming Events</h2>
              <button
                onClick={toggleEvents}
                className="text-cyan-400 hover:text-cyan-300 flex items-center"
              >
                {eventExpanded ? "Show Less" : "View All"}
                <ChevronRight
                  className={`ml-1 h-5 w-5 transition-transform ${
                    eventExpanded ? "rotate-90" : ""
                  }`}
                />
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents
                .slice(0, eventExpanded ? upcomingEvents.length : 3)
                .map((event, index) => (
                  <div
                    key={index}
                    className="bg-slate-700 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-cyan-900/20 transition-all duration-200"
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <Calendar className="h-5 w-5 text-cyan-400 mr-2" />
                        <span className="text-gray-300 text-sm">
                          {event.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                      <p className="text-gray-300 mb-4">{event.description}</p>
                      <a
                        href="#"
                        className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center"
                      >
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section
          id="registration"
          className="py-16 px-4 bg-gradient-to-r from-slate-900 to-slate-800"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-2xl p-8 md:p-12 border border-cyan-800/50">
              <div className="md:flex md:items-center md:justify-between">
                <div className="mb-8 md:mb-0 md:mr-8">
                  <h2 className="text-3xl font-bold mb-4">Join YAMA Today</h2>
                  <p className="text-gray-300 text-lg mb-6 max-w-xl">
                    Become part of our cybersecurity community and gain access
                    to exclusive workshops, competitions, and networking
                    opportunities.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <div className="bg-cyan-500/20 p-1 rounded mr-3 mt-1">
                        <Shield className="h-4 w-4 text-cyan-400" />
                      </div>
                      <span>
                        Access to all workshops and training materials
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-cyan-500/20 p-1 rounded mr-3 mt-1">
                        <Trophy className="h-4 w-4 text-cyan-400" />
                      </div>
                      <span>Priority registration for CTF competitions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-cyan-500/20 p-1 rounded mr-3 mt-1">
                        <Users className="h-4 w-4 text-cyan-400" />
                      </div>
                      <span>Networking with industry professionals</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl max-w-md w-full">
                  <h3 className="text-xl font-bold mb-4">Register Now</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        University Email
                      </label>
                      <input
                        type="email"
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="email@university.edu"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Experience Level
                      </label>
                      <select className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                    >
                      Submit Registration
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Changelog Section */}
        <section id="changelog" className="py-16 px-4 bg-slate-900">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-10">Changelog</h2>

            <div className="space-y-8 max-w-3xl">
              <div className="bg-slate-800 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-500/20 p-2 rounded-full mr-4">
                    <Code className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold">v2.5.0 - Platform Update</h3>
                    <p className="text-gray-400 text-sm">March 10, 2025</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">+</span>
                    <span>
                      Added new web exploitation challenges to practice platform
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">~</span>
                    <span>Improved CTF scoreboard with real-time updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">-</span>
                    <span>
                      Fixed authentication bug in challenge submission system
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500/20 p-2 rounded-full mr-4">
                    <Bell className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold">v2.4.0 - Community Features</h3>
                    <p className="text-gray-400 text-sm">February 23, 2025</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">+</span>
                    <span>Introduced member profiles with skill tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">+</span>
                    <span>Added notification system for upcoming events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">~</span>
                    <span>
                      Redesigned event registration flow for better usability
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="#"
                className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center"
              >
                View all updates
                <ChevronRight className="ml-1 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
