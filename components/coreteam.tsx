"use client";
import React from "react";
import { IconBrandGithub, IconBrandLinkedin, IconBrandMedium } from "@tabler/icons-react";

const teamMembers = [
  {
    name: "Akshit Gupta",
    role: "Red Teamer & Malware Dev",
    description: "Akshit is our tactical genius in the world of offensive security, expertly simulating attacks to fortify our defenses.",
    socials: {
      github: "https://github.com/pwnNrove",
      linkedin: "https://www.linkedin.com/in/pwnnrove/",
    },
  },
  {
    name: "Ashim",
    role: "Security Researcher",
    description: "Ashim dives deep into security research, uncovering new vulnerabilities and pioneering innovative solutions.",
    socials: {
      github: "https://github.com/among1anonymous",
      linkedin: "https://www.linkedin.com/in/ashim-8540201b2/",
    },
  },
  {
    name: "Mehul Sardana",
    role: "Red Teamer",
    description: "Mehul specializes in red teaming, leveraging his expertise to identify and exploit weaknesses before malicious actors can.",
    socials: {
      github: "https://github.com/daemon-reconfig/",
      linkedin: "https://www.linkedin.com/in/mehul-sardana-b1a120194/",
    },
  },
  {
    name: "Shiv Pratap Singh",
    role: "Application Engineer",
    description: "Shiv is our application security specialist, dedicated to ensuring our software remains robust and resilient against threats.",
    socials: {
      github: "https://github.com/shivpratapsingh111/",
      linkedin: "https://www.linkedin.com/in/shivpratapsingh111/",
      medium: "https://medium.com/@shivpratapsingh777.2",
    },
  },
  // Add more team members here as needed
];

const sponsors = [

  {
    name: "Aayush",
    contribution: "University Student",
    socials: {
      linkedin: "https://www.linkedin.com/in/aayush-aggarwal-437086206/",
    },
  },
  {
    name: "Akshit Gupta",
    contribution: "University Student",
    socials: {
      github: "https://github.com/pwnNrove",
      linkedin: "https://www.linkedin.com/in/pwnnrove/",
    },
  },
  {
    name: "Amit Panghal",
    contribution: "University Student",
    socials: {
      github: "https://github.com/Tx0actical/",
      linkedin: "https://www.linkedin.com/in/amit-panghal/",
    },
  },
  {
    name: "Ashim",
    contribution: "University Student",
    socials: {
      github: "https://github.com/among1anonymous",
      linkedin: "https://www.linkedin.com/in/ashim-8540201b2",
    },
  },
  {
    name: "Mehul Sardana",
    contribution: "University Student",
    socials: {
      github: "https://github.com/daemon-reconfig",
      linkedin: "https://www.linkedin.com/in/mehul-sardana-b1a120194",
    },
  },
  {
    name: "Saksham Jain",
    contribution: "University Student",
    socials: {
      github: "https://github.com/Sjain-dir",
      linkedin: "https://www.linkedin.com/in/saksham-jain-0b9144211/",
    },
  },
  {
    name: "Shiv Pratap Singh",
    contribution: "University Student",
    socials: {
      github: "https://github.com/shivpratapsingh111/",
      linkedin: "https://www.linkedin.com/in/shivpratapsingh111/",
    },
  },
  // Add more sponsors here as needed
];

export default function CoreTeam() {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white p-4">
      <div className="container mx-auto">
        {/* Core Team Section */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold">Core Team</h1>
          <p className="text-gray-400 font-xl font-semibold">Meet the people who make it all happen</p>
        </header>
        <div className="space-y-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-md shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-green-500 border-transparent border-2">
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-gray-400">{member.role}</p>
              <p className="mt-2">{member.description}</p>
              <div className="flex space-x-4 mt-3">
                {member.socials.github && (
                  <a href={member.socials.github} target="_blank" rel="noopener noreferrer">
                    <IconBrandGithub className="h-6 w-6 text-terminal-green" />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                    <IconBrandLinkedin className="h-6 w-6 text-terminal-green" />
                  </a>
                )}
                {member.socials.medium && (
                  <a href={member.socials.medium} target="_blank" rel="noopener noreferrer">
                    <IconBrandMedium className="h-6 w-6 text-terminal-green" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Sponsors Section */}
        <section className="mt-12">
          <header className="text-center mb-8">
            <h2 className="text-3xl font-bold">Sponsors</h2>
            <p className="text-gray-400 font-xl font-semibold">A huge thanks to our generous sponsors</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-md shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-green-500 border-transparent border-2"
              >
                <h3 className="text-xl font-semibold">{sponsor.name}</h3>
                <p className="text-gray-400">{sponsor.contribution}</p>
                <div className="flex space-x-4 mt-3">
                  {sponsor.socials.github && (
                    <a href={sponsor.socials.github} target="_blank" rel="noopener noreferrer">
                      <IconBrandGithub className="h-6 w-6 text-terminal-green" />
                    </a>
                  )}
                  {sponsor.socials.linkedin && (
                    <a href={sponsor.socials.linkedin} target="_blank" rel="noopener noreferrer">
                      <IconBrandLinkedin className="h-6 w-6 text-terminal-green" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
