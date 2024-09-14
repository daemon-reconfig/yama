"use client";
import React, { useState, useEffect } from "react";
import { CanvasRevealEffect } from "./ui/canvas";
import Confetti from "react-confetti";

interface Challenge {
  id: number;
  title: string;
  description: string;
  date: string;
  task: string;
  hint: string;
  solution: string;
  level: string;
  completed: boolean;
  correctFlag: string;
  solves: number;
}

const initialChallenges: Challenge[] = [
  {
    id: 1,
    title: "Mini Challenge 1: The Binary Breakdown",
    description: "Play some binary game",
    date: "2024-09-05",
    task: "01011001 01000001 01001101 01000001 01111011 00110000 01101110 00110011 01011111 01110011 01110100 00110011 01110000 01011111 01100001 01110100 01011111 01100001 01011111 01110100 00110001 01101101 01100101 01111101",
    hint: "Maybe ASCII?",
    solution: "Visit any Binary to ASCII converter, and paste this binary string, you'll get the flag",
    level: "Easy",
    completed: false,
    correctFlag: "YAMA{0n3_st3p_at_a_t1me}",
    solves: 18, // Example number of solves
  },
  {
    id: 2,
    title: "Mini Challenge 2: DoubleIT",
    description: "Decrypt the message",
    date: "2024-09-05",
    task: "(&u}\")E_|sq7+%#K6'g\`}s8\`7\"ll",
    hint: "What's better than an encoding then rotation?",
    solution: "Rotate the encoded string, 47 times and then apply Base64 decode to get the flag.\nYou can use cyberchef.io for this",
    level: "Medium",
    completed: false,
    correctFlag: "YAMA{t00_e4sy_5485}",
    solves: 6, // Example number of solves
  },
  {
    id: 3,
    title: "Mini Challenge 2: LessSeriousBat",
    description: "Someone said LSD or maybe LSB I don't know, but what's that?",
    date: "2024-10-05",
    task: "https://yama.ninja/challenges/miniChallenges/hehehe.png",
    hint: "Try uncovering the secret message, hiding within the image; and don't be too serious.",
    solution: "Flag is hidden within the image file using a technique known as steganography, you may use online tools such as https://stylesuxx.github.io/steganography/, to extract the flag.",
    level: "Easy",
    completed: false,
    correctFlag: "YAMA{letss_st3g00_1989}",
    solves: 2, // Example number of solves
  },
  {
    id: 4,
    title: "Mini Challenge 2: Can you see through?",
    description: "Can you find a grain of salt in a barrel of sugar?",
    date: "2024-10-05",
    task: "https://yama.ninja/challenges/miniChallenges/etihw_no_etihw.pdf",
    hint: "Maybe in front, but you can't see, reverse the filename.",
    solution: "The flag is written with white text on white background, Open the file, do 'ctrl+A' to select all text, and do 'ctrl+C' to copy all text, paste it any any text-editor and you will see the flag",
    level: "Easy",
    completed: false,
    correctFlag: "YAMA{y0u_g0t_e4gl3_eyes}",
    solves: 4, // Example number of solves
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
  const [submittedAnswers, setSubmittedAnswers] = useState<{ [key: number]: string }>({});
  const [showHint, setShowHint] = useState<{ [key: number]: boolean }>({});
  const [showSolution, setShowSolution] = useState<{ [key: number]: boolean }>({});
  const [confetti, setConfetti] = useState<{ [key: number]: boolean }>({});
  const [feedback, setFeedback] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setConfetti((prevConfetti) => {
        const updatedConfetti = { ...prevConfetti };
        Object.keys(updatedConfetti).forEach((id) => {
          updatedConfetti[parseInt(id)] = false;
        });
        return updatedConfetti;
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [confetti]);

  const handleCompleteChallenge = (id: number) => {
    setChallenges((prevChallenges) =>
      prevChallenges.map((challenge) =>
        challenge.id === id
          ? { ...challenge, completed: !challenge.completed, solves: challenge.solves + 1 } // Increment solves on completion
          : challenge
      )
    );
  };

  const handleSubmitAnswer = (id: number, answer: string) => {
    const challenge = challenges.find((ch) => ch.id === id);
    if (challenge) {
      if (answer === challenge.correctFlag) {
        setFeedback((prevFeedback) => ({
          ...prevFeedback,
          [id]: "Correct! 🎉 - Take the screenshot, post the proof in discord",
        }));
        setConfetti((prevConfetti) => ({
          ...prevConfetti,
          [id]: true,
        }));
        handleCompleteChallenge(id); // Mark as completed and increment solves
      } else {
        setFeedback((prevFeedback) => ({
          ...prevFeedback,
          [id]: "Incorrect. Try again!",
        }));
      }
    }
    setSubmittedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: answer,
    }));
  };

  const toggleHint = (id: number) => {
    setShowHint((prevHints) => ({
      ...prevHints,
      [id]: !prevHints[id],
    }));
  };

  const toggleSolution = (id: number) => {
    setShowSolution((prevSolutions) => ({
      ...prevSolutions,
      [id]: !prevSolutions[id],
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
        <h1 className="text-4xl font-bold mb-6">Old Challenges</h1>
        <p className="mb-12 text-xl">
        Solve the challenges, and submit the flag in the format: YAMA{'{'}something_inside_this{'}'}
        </p>
        <div className="space-y-6">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="relative p-6 rounded-lg shadow-lg bg-gray-800">
              {/* Solves Section */}
              {/* <p className="absolute top-2 left-2 text-white text-sm font-bold bg-green-600 px-2 py-1 rounded">
                {challenge.solves} {challenge.solves === 1 ? "Solve" : "Solves"}
              </p><br></br> */}
              
              {/* Level Badge */}
              <div className="absolute top-2 right-2 px-3 py-1 rounded bg-blue-600 text-white text-sm font-bold">
                {challenge.level}
              </div>

              <h2 className="text-2xl font-semibold mb-2">{challenge.title}</h2>
              <p className="text-sm mb-2">{challenge.date}</p>
              <p className="mb-4">{challenge.description}</p>

              {/* Code section with Copy functionality */}
              <div className="mb-4">
                <strong>Challenge:</strong>
                <CodeWithCopy code={challenge.task} />
              </div>

              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Enter your answer here"
                  className="px-4 py-2 rounded border border-gray-700 bg-white-600 text-black"
                  value={submittedAnswers[challenge.id] || ""}
                  onChange={(e) =>
                    setSubmittedAnswers((prev) => ({
                      ...prev,
                      [challenge.id]: e.target.value,
                    }))
                  }
                />
                <button
                  onClick={() => handleSubmitAnswer(challenge.id, submittedAnswers[challenge.id] || "")}
                  className={`px-4 py-2 rounded text-white ${challenge.completed ? "bg-red-500" : "bg-blue-500"}`}
                >
                  {challenge.completed ? "Submitted" : "Submit Answer"}
                </button>

                {/* Hint and Solution Buttons */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => toggleSolution(challenge.id)}
                    className="w-1/2 px-4 py-2 rounded bg-purple-500 text-white"
                  >
                    {showSolution[challenge.id] ? "Hide Solution" : "Show Solution"}
                  </button>
                  <button
                    onClick={() => toggleHint(challenge.id)}
                    className="w-1/2 px-4 py-2 rounded bg-purple-500 text-white"
                  >
                    {showHint[challenge.id] ? "Hide Hint" : "Show Hint"}
                  </button>
                </div>

                {/* Feedback, Hint, and Solution */}
                <p className="text-green-400">{feedback[challenge.id]}</p>
                {showHint[challenge.id] && (
                  <p className="bg-green-600 p-4 rounded-lg text-l">{challenge.hint}</p>
                )}
                {showSolution[challenge.id] && (
                  <p className="bg-green-600 p-4 rounded-lg text-l">{challenge.solution}</p>
                )}
              </div>
            </div>
          ))}
          <a className="block text-center py-3 px-5 rounded bg-green-600 text-white font-bold" href="/challenges">
              Go to New Challenges
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

