"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CanvasRevealEffect } from "./ui/canvas";
import Confetti from "react-confetti";

interface Challenge {
  id: number;
  title: string;
  description: string;
  task: string;
  hint: string;
  completed: boolean;
}

const initialChallenges: Challenge[] = [
  {
    id: 1,
    title: "Title: Searching the streets",
    description: "Description: Who took this picture in which month of which year.",
    task: "https://drive.google.com/file/d/1o2v07x9HdLg4EWyQT0iGXJDiZJhjXIon/view?usp=drive_link",
    hint: "How to view streets on maps?",
    completed: false,
  },
  // Additional challenges
  ];

  const CodeWithCopy: React.FC<{ code: string }> = ({ code }) => {
    const [copied, setCopied] = useState(false);
  
    const handleCopy = () => {
      navigator.clipboard.writeText(code).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    };
  
    return (
      <div className="relative p-4 bg-gray-900 rounded text-white">
        <pre className="overflow-x-auto">{code}</pre>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 px-3 py-1 bg-blue-600 rounded text-white"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    );
  };
  

const Challenges: React.FC = () => {
  const [challenges, setChallenges] = useState<Challenge[]>(initialChallenges);
  const [showHint, setShowHint] = useState<{ [key: number]: boolean }>({});
  const [solvedStatus, setSolvedStatus] = useState<{ [key: number]: string }>({});
  const [confetti, setConfetti] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    challenges.forEach((challenge) => {
      checkChallengeStatus(challenge.id);
    });
  }, [challenges]);

  const checkChallengeStatus = async (id: number) => {
    try {
      const response = await axios.get(`http://134.209.149.61:1111/challenge/${id}`, {
        responseType: 'text',
      });
      const params = new URLSearchParams(response.data);
      const status = params.get('status');
      const name = params.get('name');

      if (status === "solved") {
        setSolvedStatus((prevStatus) => ({
          ...prevStatus,
          [id]: `Solved by ${name}`,
        }));
        setConfetti((prevConfetti) => ({
          ...prevConfetti,
          [id]: true,
        }));
      }
    } catch (error) {
      console.error(`Error fetching challenge status for ID: ${id}`, error);
    }
  };

  const toggleHint = (id: number) => {
    setShowHint((prevHints) => ({
      ...prevHints,
      [id]: !prevHints[id],
    }));
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <CanvasRevealEffect
        animationSpeed={0.6}
        colors={[[0, 255, 0]]}
        opacities={[0.2, 0.4, 0.6, 0.8, 1]}
        containerClassName="absolute inset-0 bg-gray-900"
      />
      <div className="relative z-10 p-6 md:p-12 bg-grey-900">
        <h1 className="text-4xl font-bold mb-6">Challenges</h1>
        {/* <p className="mb-12 text-xl">
        In each challenge, you'll receive a video link. Watch the video carefully to identify the location shown. Once you've figured it out, head to that spot and look for a poster with a QR code hidden nearby. Scan the QR code and submit the flag in the Discord channel "#proof" to complete the challenge. 
        <br />
        NOTE: Only the first to submit will earn the reward!
        </p> */}
        <p className="mb-12 text-xl">
        Post the answer with proof in Discord channel "#proof" to complete the challenge. 
        <br />
        NOTE: Only the first to submit will earn the reward!
        </p>
        <div className="space-y-6">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className="relative p-6 rounded-lg shadow-lg bg-gray-800 transition-all duration-500"
            >
              {/* Solves Section */}
              {/* <p className="absolute top-2 left-2 text-white text-sm font-bold bg-green-600 px-2 py-1 rounded">
                {challenge.solves} {challenge.solves === 1 ? "Solve" : "Solves"}
              </p> */}
              
              <h2 className="text-2xl font-bold mb-2">{challenge.title}</h2>
              <p className="mb-4 text-xl">{challenge.description}</p>

              {/* Code section with Copy functionality */}
              <div className="mb-4">
                <CodeWithCopy code={challenge.task} />
              </div>
              
                  {/* Hint and Solution Buttons */}
                  <div className="flex flex-col space-y-4">
                  <button
                    onClick={() => toggleHint(challenge.id)}
                    className="block text-center py-3 px-5 rounded bg-purple-600 text-white font-bold"
                  >
                    {showHint[challenge.id] ? "Hide Hint" : "Show Hint"}
                  </button>
                  <br />
                </div>
                  {/* Feedback, Hint, and Solution */}
                {showHint[challenge.id] && (
                  <p className="bg-green-600 p-4 rounded-lg text-xl">{challenge.hint}</p>
                )}

              {/* Overlay and Blur Effect */}
              {solvedStatus[challenge.id] && (
                <>
                  <div className="absolute inset-0 bg-opacity-10 flex items-center justify-center rounded-lg transition-all duration-500 z-10">
                  <pre className="bg-grey-900 p-4 rounded">
                    <h2 className="text-4xl font-bold text-green-400">
                      {solvedStatus[challenge.id]}
                    </h2>
                    </pre>
                  </div>
                  <div className="absolute inset-0 backdrop-blur-sm z-0"></div>
                </>
              )}
            </div>
          ))}
          <a className="block text-center py-3 px-5 rounded bg-green-600 text-white font-bold" href="/old-challenges">
              Go to Old Challenges
          </a>
          <br />
          <br />
          <br />
        </div>
      </div>

      {Object.keys(confetti).map((id) =>
        confetti[parseInt(id)] ? (
          <Confetti
            key={id}
            numberOfPieces={1000}
            gravity={0.3}
            recycle={false}
          />
        ) : null
      )}
    </div>
  );
};

export default Challenges;
