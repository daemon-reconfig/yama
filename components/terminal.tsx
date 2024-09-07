"use client";
import { useState, useEffect, useRef } from 'react';

export default function Terminal() {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Automatically focus on input field when component mounts
    inputRef.current?.focus();
  }, []);

  const handleCommand = async () => {
    const [command, ...args] = input.split(' ');

    // Add command to history
    setHistory((prev) => [...prev, input]);
    setHistoryIndex(-1);

    try {
      const res = await fetch('/api/terminal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          command,
          filepath: args.join(' '),
          text: args.join(' '), // For echo command
        }),
      });

      const data = await res.json();
      setOutput((prev) => prev + `$ ${input}\n${data.output}\n`);
      setInput(''); // Clear input field
    } catch (error) {
      setOutput((prev) => prev + `$ ${input}\nError: ${error}\n`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        setHistoryIndex((prev) => prev + 1);
        setInput(history[history.length - 1 - historyIndex - 1] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        setHistoryIndex((prev) => prev - 1);
        setInput(history[history.length - 1 - historyIndex + 1] || '');
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div className="w-full h-screen bg-black text-white p-4">
      <div className="overflow-auto h-full">
        <pre>{output}</pre>
        <div className="text-green-400 inline-block">yama@bash:~$</div>
        <input
          type="text"
          className="bg-black border-none focus:outline-none text-white inline-block ml-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
      </div>
    </div>
  );
}
