import { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

type CommandResponse = {
  output: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<CommandResponse>) {
  const { command, filepath, text } = req.body; // Added text for echo command

  // Adjust the base directory path
  const baseDirectory = path.resolve(process.cwd(), 'public');

  try {
    if (command === 'ls') {
      const files = await fs.readdir(baseDirectory);
      return res.status(200).json({ output: files.join(' ') });
    } else if (command === 'cat') {
      const fileToRead = path.join(baseDirectory, filepath);
      const fileContents = await fs.readFile(fileToRead, 'utf8');
      return res.status(200).json({ output: fileContents });
    } else if (command === 'echo') {
      // Return the text passed to the echo command
      return res.status(200).json({ output: text || '' });
    } else {
      return res.status(400).json({ output: `Command "${command}" is not supported.` });
    }
  } catch (error) {
    return res.status(500).json({ output: `Error: ${(error as Error).message}` });
  }
}
