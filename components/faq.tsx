"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is a CTF?",
    answer: "A CTF (Capture The Flag) is a cybersecurity competition where participants tackle a series of security-related challenges. The goal is to capture 'flags' (a special pattern of string, e.g., 'YAMA{anyth1ng_rand0m}') to earn points and showcase their skills."
  },
  {
    question: "How do I participate?",
    answer: "You can participate by registering on our platform at 'https://ctf.yama.ninja/'. Stay tuned to our announcements for more details."
  },
  {
    question: "What will be the maximum team size?",
    answer: "This event is for solo participants."
  },
  {
    question: "What will be the complexity level of this CTF?",
    answer: "The complexity level of the CTF will vary to accommodate different skill levels. We aim to provide challenges that are engaging for both beginners and experienced participants. More details will be provided in our announcements."
  },
  {
    question: "Is it a virtual event or on-site?",
    answer: "The format of this event is virtual (online)."
  },
  {
    question: "What will be the duration of the CTF?",
    answer: "It will be a 24-hour CTF, from 11:00 AM on August 21, 2024 (Saturday) to 11:00 AM on August 22, 2024 (Sunday)."
  },
  {
    question: "When is the Capture The Flag (CTF) event scheduled to take place?",
    answer: "It will be live from 11:00 AM on August 21, 2024 (Saturday) to 11:00 AM on August 22, 2024 (Sunday)."
  },
  {
    question: "What will be the prizes?",
    answer: "Prizes have not yet been disclosed. Consider it a surprise."
  },
  {
    question: "Who can participate?",
    answer: "As long as you are a student of Chandigarh University, you can participate."
  },
  {
    question: "I do not have any prior experience in cybersecurity. Can I participate?",
    answer: "Of course you can! This CTF is beginner-friendly, and we have created some challenges specifically for newcomers."
  },  

  // Add more FAQs as needed
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white p-4">
      <div className="container mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold">FAQs</h1>
          <p className="text-gray-400">Frequently Asked Questions about our platform and events</p>
        </header>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-md shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-green-500 border-transparent border-2" onMouseEnter={() => toggleAnswer(index)}>
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{faq.question}</h2>
                {/* <button
                  onClick={() => toggleAnswer(index)}
                  className="text-white p-2 bg-green-600 rounded-lg text-base font-bold"
                >
                  {openIndex === index ? "Hide" : "Show"}
                </button> */}
              </div>
              {openIndex === index && (
                <p className="mt-2 text-white font-xl font-semibold">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-center mb-4">Have another issue?</h2>
          <p className="text-center text-gray-400 mb-4">
            If your question is not answered here, feel free to reach out to us by submitting the form below.
          </p>
          <div className="flex justify-center">
          <button 
  className="bg-green-600 p-4 rounded-lg text-base font-bold"
  onClick={() => window.open('https://forms.gle/8gka9oNmDXUWMCWe9/', '_blank', 'noopener,noreferrer')}
>
  Submit your query - Google Form
</button>

          </div>
        </div>
        <br></br>
          <br></br>
          <br></br>
          <br></br>
      </div>
    </div>
  );
}
