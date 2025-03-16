import { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

type CommandResponse = {
  output: string;
};

const sanitizeFilePath = (filePath: string) => {
  // Resolve the absolute path
  const absolutePath = path.resolve(filePath);
  // Make sure the path starts with the base directory
  return absolutePath.startsWith(path.resolve(process.cwd(), 'public')) ? absolutePath : null;
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
      const sanitizedPath = sanitizeFilePath(filepath);
      if (!sanitizedPath) {
        return res.status(400).json({ output: 'Invalid file path.' });
      }

      // Check if the file exists and is within the base directory
      const fileStat = await fs.stat(sanitizedPath);
      if (fileStat.isFile() && sanitizedPath.startsWith(baseDirectory)) {
        const fileContents = await fs.readFile(sanitizedPath, 'utf8');
        return res.status(200).json({ output: fileContents });
      } else {
        return res.status(400).json({ output: 'File does not exist or is not accessible.' });
      }
    } else if (command === 'echo') {
      // Return the text passed to the echo command
      return res.status(200).json({ output: text || '' });
    } else if (command === 'help') {
      // const fileContents = await fs.readFile(fileToRead, 'utf8');
      const fileContents = `
      Help:

    ls: Lists files in the current directory.
    cat: Displays the contents of a file.
    echo: echo's the same back.
      `
      return res.status(200).json({ output: fileContents });
    } else {
      return res.status(400).json({ output: `Command "${command}" is not supported.` });
    }
  } catch (error) {
    return res.status(500).json({ output: `Error: ${(error as Error).message}` });
  }
}
