"use client";
import React, { useState } from "react";
import { CanvasRevealEffect } from "./ui/canvas";


interface Challenge {
  id: number;
  title: string;
  description: string;
  date: string;
  task: string; // Added a task description
  completed: boolean;
}

const initialChallenges: Challenge[] = [
  {
    id: 1,
    title: "Challenge 1: The Cryptic Code",
    description: "Decrypt the hidden message embedded in the source code.",
    date: "2024-09-05",
    task: "Submit the decrypted message",
    completed: false,
  },
  {
    id: 2,
    title: "Challenge 2: SQL Injection Madness",
    description: "Find and exploit SQL injection vulnerabilities in the provided web application.",
    date: "2024-09-07",
    task: "Submit the flag extracted from the database",
    completed: false,
  },
  {
    id: 3,
    title: "Challenge 3: Binary Breach",
    description: "Analyze the provided binary file for security flaws.",
    date: "2024-09-10",
    task: "Submit the hidden flags extracted from the binary",
    completed: false,
  },
];

const Challenges: React.FC = () => {
  const [challenges, setChallenges] = useState<Challenge[]>(initialChallenges);
  const [submittedAnswers, setSubmittedAnswers] = useState<{ [key: number]: string }>({});
  
  const handleCompleteChallenge = (id: number) => {
    setChallenges((prevChallenges) =>
      prevChallenges.map((challenge) =>
        challenge.id === id
          ? { ...challenge, completed: !challenge.completed }
          : challenge
      )
    );
  };

  const handleSubmitAnswer = (id: number, answer: string) => {
    // Here you would typically send the answer to a backend for verification
    setSubmittedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: answer,
    }));
    handleCompleteChallenge(id); // Mark as completed after submission
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      <CanvasRevealEffect
        animationSpeed={0.6}
        colors={[[0, 255, 0]]}
        opacities={[0.2, 0.4, 0.6, 0.8, 1]}
        containerClassName="absolute inset-0"
      />
      <div className="relative z-10 p-6 md:p-12">
        <h1 className="text-4xl font-bold mb-6">Challenges</h1>
        <p className="mb-12">
          Welcome to the Challenges page. Each challenge includes a task that you need to complete. Submit your answers and track your progress here.
        </p>
        <div className="space-y-6">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className={`p-6 rounded-lg shadow-lg bg-gray-800`}
            >
              <h2 className="text-2xl font-semibold mb-2">{challenge.title}</h2>
              <p className="text-sm mb-2">{challenge.date}</p>
              <p className="mb-4">{challenge.description}</p>
              <p className="mb-4"><strong>Task:</strong> {challenge.task}</p>
              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Enter your answer here"
                  className="px-4 py-2 rounded border border-gray-700 bg-neutral-950 text-white"
                  value={submittedAnswers[challenge.id] || ''}
                  onChange={(e) =>
                    setSubmittedAnswers((prev) => ({
                      ...prev,
                      [challenge.id]: e.target.value,
                    }))
                  }
                />
                <button
                  onClick={() => handleSubmitAnswer(challenge.id, submittedAnswers[challenge.id] || '')}
                  className={`px-4 py-2 rounded text-white ${challenge.completed ? 'bg-red-500' : 'bg-blue-500'}`}
                >
                  {challenge.completed ? 'Submitted' : 'Submit Answer'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Challenges
;
