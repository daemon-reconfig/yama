"use client";
import React from 'react';
import { IconFlag } from '@tabler/icons-react';

const events = [
  {
    title: "Deceptions",
    date: "21 September",
    description: "Our first CTF event, 'Deceptions', starts on 21 September. Prepare for a challenging and thrilling experience!",
    icon: <IconFlag className="h-6 w-6 text-terminal-green" />,
  },
  // Add more events here as they are announced
];

export default function Changelog() {
  return (
    <div className="w-full h-screen bg-gray-900 text-white p-4">
      <div className="container mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold">Changelog</h1>
          <p className="text-gray-400">Latest updates and events for our CTF challenges</p>
        </header>
        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={index} className="bg-gray-800 shadow-md bg-gray-800 p-6 rounded-md shadow-md transform transition-transform duration-100 hover:scale-105 hover:shadow-lg hover:border-green-500 border-transparent border-2">
              <div className="flex items-center space-x-3">
                <div className="text-terminal-green">{event.icon}</div>
                <div>
                  <h2 className="text-xl font-semibold">{event.title}</h2>
                  <p className="text-gray-400">{event.date}</p>
                </div>
              </div>
              <p className="mt-2">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
